const mongoose = require('mongoose')
// const responseSchema = require('./response')

const playerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    points: {
      type: String,
      required: true
    },
    rebounds: {
      type: String,
      required: true
    },
    assists: {
      type: String,
      required: true
    },
    threeptm: {
      type: String,
      required: true
    },
    steals: {
      type: String,
      required: true
    },
    blocks: {
      type: String,
      required: true
    },
    fgpct: {
      type: String,
      required: true
    },
    ftpct: {
      type: String,
      required: true
    },
    turnovers: {
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
