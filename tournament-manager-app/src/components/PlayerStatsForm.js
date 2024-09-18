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
  return (
    <Container maxWidth="sm" style={{ marginTop: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Add Player Stats
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Player Name"
              name="name"
              value={playerData.name}
              onChange={handleChange}
              variant="outlined"
              required
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Win/Loss Ratio"
              name="winLossRatio"
              value={playerData.winLossRatio}
              onChange={handleChange}
              variant="outlined"
              type="number"
              required
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              label="K/D Ratio"
              name="kdRatio"
              value={playerData.kdRatio}
              onChange={handleChange}
              variant="outlined"
              type="number"
              required
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Accuracy (%)"
              name="accuracy"
              value={playerData.accuracy}
              onChange={handleChange}
              variant="outlined"
              type="number"
              required
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Headshot Ratio (%)"
              name="headshotRatio"
              value={playerData.headshotRatio}
              onChange={handleChange}
              variant="outlined"
              type="number"
              required
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Preferred Weapon"
              name="preferredWeapon"
              value={playerData.preferredWeapon}
              onChange={handleChange}
              variant="outlined"
              required
            />
          </Grid>

          <Grid item xs={12}>
            <Button variant="contained" color="primary" type="submit" fullWidth>
              Add Player
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};