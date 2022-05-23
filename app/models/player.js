const mongoose = require('mongoose')
// const responseSchema = require('./response')

const playerSchema = new mongoose.Schema(
  {
    Name: {
      type: String,
      required: true
    },
    Points: {
      type: String,
      required: true
    },
    Rebounds: {
      type: String,
      required: true
    },
    Assists: {
      type: String,
      required: true
    },
    Threeptm: {
      type: String,
      required: true
    },
    Steals: {
      type: String,
      required: true
    },
    Blocks: {
      type: String,
      required: true
    },
    FGPercentage: {
      type: String,
      required: true
    },
    FTPercentage: {
      type: String,
      required: true
    },
    Turnovers: {
      type: String,
      required: true
    },
    // responses: [responseSchema],
    team: {
      // References use the type ObjectId
      type: mongoose.Schema.Types.ObjectId,
      // the name of the model to which they refer
      ref: 'Team'
    },
    owner: {
      // References use the type ObjectId
      type: mongoose.Schema.Types.ObjectId,
      // the name of the model to which they refer
      ref: 'User'
    }
  },
  {
    timestamps: true
  }
)

// we are still module exporting but not making a new Schema model because this is a SUBDOC
module.exports = playerSchema
