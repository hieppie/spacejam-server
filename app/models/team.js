const mongoose = require('mongoose')
const playerSchema = require('./player')

const teamSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  players: [playerSchema],
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Team', teamSchema)
