const Creature = require('../models/creatures')


const addMany = async (req, res, next) => {
    try {
        const creatureArr = await Promise.all(req.body.map(async (creature) => {
            const newCreature = new Creature(creature)
            const savedCreature = await newCreature.save()
            return savedCreature
        }))

        return res.status(201).send(creatureArr)
    } catch (err) {
        res.status(500)
        return next(err)
    }
}

const getAllCreatures = async (req, res, next) => {
    try {
        const creatures = await Creature.find()
        return res.status(200).send(creatures)
    } catch (err) {
        res.status(500)
        return next(err)
    }
}

const addOne = async(req, res, next) => {
    try {
        const newCreature = new Creature(req.body)
        const savedCreature = await newCreature.save()
        return res.status(201).send(savedCreature)
    } catch (err) {
        res.status(500)
        return next(err)
    }
}

module.exports = { addMany, getAllCreatures, addOne }