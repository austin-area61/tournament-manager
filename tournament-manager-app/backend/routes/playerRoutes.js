// backend/routes/playerRoutes.js
const express = require('express');
const Player = require('../models/Player');
const router = express.Router();

// Add a player
router.post('/add', async (req, res) => {
  const { name, winLossRatio, kdRatio, accuracy, headshotRatio, preferredWeapon } = req.body;

  try {
    const newPlayer = new Player({ name, winLossRatio, kdRatio, accuracy, headshotRatio, preferredWeapon });
    await newPlayer.save();
    res.status(201).json(newPlayer);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Fetch all players
router.get('/', async (req, res) => {
  try {
    const players = await Player.find();
    res.status(200).json(players);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
