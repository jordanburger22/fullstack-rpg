const express = require('express')
const { getTrainer, createTrainer, setupComplete } = require('../controllers/trainerController')
const trainerRouter = express.Router()


trainerRouter.get('/', getTrainer)

trainerRouter.post('/', createTrainer)

trainerRouter.put('/setup', setupComplete)

module.exports = trainerRouter