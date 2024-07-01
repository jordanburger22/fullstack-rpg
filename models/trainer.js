const mongoose = require('mongoose')
const Schema = mongoose.Schema

const inventoryItems = [
    { itemId: 'smallHealthPotion', itemName: 'Small Health Potion', description: 'Restores a small amount of health to a creature.', count: 0 },
    { itemId: 'medHealthPotion', itemName: 'Medium Health Potion', description: 'Restores a moderate amount of health to a creature.', count: 0 },
    { itemId: 'lrgHealthPotion', itemName: 'Large Health Potion', description: 'Restores a large amount of health to a creature.', count: 0 },
    { itemId: 'revive', itemName: 'Revive', description: 'Revives a fainted creature with partial health.', count: 0 },
    { itemId: 'maxRevive', itemName: 'Max Revive', description: 'Fully revives a fainted creature with maximum health.', count: 0 },
    { itemId: 'elixir', itemName: 'Elixir', description: 'Restores a creature\'s stats to their maximum values.', count: 0 },
    { itemId: 'powerUp', itemName: 'Power Up', description: 'Increases a creature\'s combat abilities for a limited time.', count: 0 },
    { itemId: 'vitamin', itemName: 'Vitamin', description: 'Boosts a creature\'s stats permanently.', count: 0 },
    { itemId: 'rareCandy', itemName: 'Rare Candy', description: 'Instantly levels up a creature.', count: 0 }
];


const inventoryItemSchema = new Schema({
    itemId: {
        type: String,
        required: true
    },
    itemName: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    count: {
        type: Number,
        default: 0
    }
});



const trainerSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    currentPosition: {
        x: {
            type: Number,
            required: true,
            default: 0
        },
        y: {
            type: Number,
            required: true,
            default: 0
        }
    },
    money: {
        type: Number,
        default: 0
    },
    inventory: {
        type: [inventoryItemSchema],
        default: inventoryItems // Initialize inventory with predefined items
    },
    creatures: [{
        type: Schema.Types.Mixed,
        ref: 'Creature'
    }],
    setupComplete: {
        type: Boolean,
        default: false
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
})


module.exports = mongoose.model('Trainer', trainerSchema)