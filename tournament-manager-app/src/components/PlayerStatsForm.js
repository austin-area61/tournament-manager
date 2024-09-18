import React, { useState } from 'react';
import { TextField, Button, Grid, Typography, Container } from '@mui/material';

const PlayerStatsForm = () => {
  const [playerData, setPlayerData] = useState({
    name: '',
    winLossRatio: '',
    kdRatio: '',
    accuracy: '',
    headshotRatio: '',
    preferredWeapon: ''
  });