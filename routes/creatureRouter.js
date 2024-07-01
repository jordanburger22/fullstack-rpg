const express = require('express')
const { addMany, getAllCreatures, addOne } = require('../controllers/creatureController')
const creatureRouter = express.Router()

creatureRouter.post('/many', addMany)

creatureRouter.get('/', getAllCreatures)

creatureRouter.post('/', addOne)

module.exports = creatureRouter