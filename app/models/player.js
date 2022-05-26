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
      required: false
    },
    rebounds: {
      type: String,
      required: false
    },
    assists: {
      type: String,
      required: false
    },
    threeptm: {
      type: String,
      required: false
    },
    steals: {
      type: String,
      required: false
    },
    blocks: {
      type: String,
      required: false
    },
    fgpct: {
      type: String,
      required: false
    },
    ftpct: {
      type: String,
      required: false
    },
    turnovers: {
      type: String,
      required: false
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
