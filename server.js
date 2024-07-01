const express = require('express')
const app = express()
const mongoose = require('mongoose')
const morgan = require('morgan')
const authRouter = require('./routes/authRouter')
const trainerRouter = require('./routes/trainerRouter')
require('dotenv').config()
const {expressjwt} = require('express-jwt')
const creatureRouter = require('./routes/creatureRouter')


app.use(express.json())
app.use(morgan('dev'))

const connectToDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log('Connected to DB')
    } catch (err) {
        console.log(err)
    }
}

connectToDB()

app.use('/auth', authRouter)
app.use('/api', expressjwt({secret: process.env.SECRET, algorithms: ['HS256']}))
app.use('/api/trainer', trainerRouter)
app.use('/api/creature', creatureRouter)


app.use((err, req, res, next) => {
    console.log(err)
    if(err.name === 'UnathorizedError'){
        res.status(err.status)
    }
    return res.send({errMsg: err.message})
})


app.listen(process.env.PORT, () => console.log(`Server is running on PORT: ${process.env.PORT}`))