import React, { useState } from 'react';
import { TextField, Button, Grid, Typography, Container } from '@mui/material';

const PlayerStatsForm = () => {
  // Defining a state object using useState to hold form data.
  const [playerData, setPlayerData] = useState({
    name: '',
    winLossRatio: '',
    kdRatio: '',
    accuracy: '',
    headshotRatio: '',
    preferredWeapon: ''
  });

  const handleChange = (e) => {
    setPlayerData({ ...playerData, [e.target.name]: e.target.value });
  };
//handling form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(playerData);  // This is where we'll handle form submission later
  };