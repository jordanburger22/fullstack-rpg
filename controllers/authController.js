const User = require('../models/user')
const jwt = require('jsonwebtoken')
const { createTrainer } = require('./trainerController')


const loginErr = 'Email or Password Incorrect'

const signup = async (req, res, next) => {
    try {
        const userCheck = await User.findOne({ email: req.body.email })
        if (userCheck) {
            res.status(403)
            return next(new Error('Account with this email already exists'))
        }
        const newUser = new User(req.body)
        const savedUser = await newUser.save()
        const token = jwt.sign(savedUser.withoutPassword(), process.env.SECRET)
        return res.status(201).send({ user: savedUser.withoutPassword(), token, firstLogin: true })
    } catch (err) {
        res.status(500)
        return next(err)
    }
}


const login = async (req, res, next) => {
    try {
        const user = await User.findOne({ email: req.body.email })
        if (!user) {
            res.status(403)
            return next(new Error(loginErr))
        }

        const passwordCheck = await user.checkPassword(req.body.password)
        if (!passwordCheck) {
            res.status(403)
            return next(new Error(loginErr))
        }
        const token = jwt.sign(user.withoutPassword(), process.env.SECRET)
        return res.status(201).send({ user: user.withoutPassword(), token })
    } catch (err) {
        res.status(500)
        return next(err)
    }
}


module.exports = { login, signup }