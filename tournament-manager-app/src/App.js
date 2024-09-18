import React, { useState } from 'react';
import PlayerStatsForm from './components/PlayerStatsForm';

const App = () => {
  const [players, setPlayers] = useState([]);

  const addPlayer = (player) => {
    setPlayers([...players, player]);
  };

  const createTournament = () => {
    if (players.length < 2) {
      alert("Not enough players to create a tournament.");
      return;
    }
    
    // Tournament creation logic
      const createRoundRobinTournament = (players) => {
      const matchups = [];
      const numPlayers = players.length;
    
      for (let i = 0; i < numPlayers; i++) {
        for (let j = i + 1; j < numPlayers; j++) {
          matchups.push([players[i], players[j]]);
        }
      }
    
      return matchups;
    };
    
    console.log("Creating tournament with players:", players);
    //generate matchups and handle tournament logic
  };

  return (
    <div>
      <PlayerStatsForm onAddPlayer={addPlayer} />
      <button onClick={createTournament}>Create Tournament</button>
    </div>
  );
};

export default App;
