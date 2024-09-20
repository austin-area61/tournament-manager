// backend/models/Player.js

const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  winLossRatio: {
    type: Number,
    required: true,
  },
  kdRatio: {
    type: Number,
    required: true,
  },
  accuracy: {
    type: Number,
    required: true,
  },
  headshotRatio: {
    type: Number,
    required: true,
  },
  preferredWeapon: {
    type: String,
    required: true,
  },
});

const Player = mongoose.model('Player', playerSchema);

module.exports = Player;
