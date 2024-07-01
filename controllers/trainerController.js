const Trainer = require('../models/trainer')



const createTrainer = async (req, res, next) => {
    try {
        req.body.userId = req.auth._id
        const newTrainer = new Trainer(req.body)
        const savedTrainer = await newTrainer.save()
        return res.status(201).send(savedTrainer)
    } catch (err) {
        res.status(500)
        return next(err)
    }
}

const getTrainer = async (req, res, next) => {
    try {
        const trainer = await Trainer.findOne({ userId: req.auth._id })
        if(!trainer){
            return res.status(200).send(null)
        }
        return res.status(200).send(trainer)
    } catch (err) {
        res.status(500)
        return next(err)
    }
}

const setupComplete = async(req,res,next) => {
    try {
        const trainer = await Trainer.findOneAndUpdate(
            {userId: req.auth._id},
            {setupComplete: true},
            {new: true}
        )
        return res.status(201).send(trainer)
    } catch (err) {
        res.status(500)
        return next(err)
    }
}

const saveTrainer = async (req, res , next) => {
    try {
        
    } catch (err) {
        
    }
}


module.exports = { createTrainer, getTrainer, setupComplete }