const mongoose = require('mongoose')
const Schema = mongoose.Schema

const creatureSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    level: {
        type: Number,
        default: 1
    },
    attackPower: {
        type: Number,
        default: 1
    },
    defensePower: {
        type: Number,
        default: 1
    },
    currentHp: {
        type: Number,
        default: 20
    },
    maxHp: {
        type: Number,
        default: 20
    },
    rarity: {
        type: Number,
        default: 1,
        min: 1,
        max: 10
    },
    type: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Creature', creatureSchema)