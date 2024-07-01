const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')

const userSchema = new Schema({
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    userSince: {
        type: Date,
        default: Date.now
    }
})

// pre-save hook to encrypt user passwords on signup
userSchema.pre("save", async function (next) {
    const user = this;

    // Hash the password if it has been modified or is new
    if (user.isModified('password')) {
        try {
            const hash = await bcrypt.hash(user.password, 10);
            user.password = hash;
        } catch (err) {
            return next(err);
        }
    }
})

// method to check encrypted password on login
userSchema.methods.checkPassword = async function (passwordAttempt) {
    try {
        return await bcrypt.compare(passwordAttempt, this.password);
    } catch (err) {
        throw err;
    }
};

userSchema.methods.withoutPassword = function () {
    const user = this.toObject();
    delete user.password;
    return user;
};

module.exports = mongoose.model('User', userSchema)