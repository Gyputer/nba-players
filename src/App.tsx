import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import { PlayerList } from './PlayerList';
import { FavorateList } from './FavorateList';

const playersInit: IPlayer[] = [];
const favoratePlayersInit: IPlayer[] = [];


function App() {
  const [players, setplayers]: [IPlayer[], (players: IPlayer[]) => void] = React.useState(playersInit);
  const [favoratePlayers, setFavoratePlayer]: [IPlayer[], (favoratePlayers: IPlayer[]) => void] = React.useState(favoratePlayersInit);

  const [searchTerm, setSearchTerm] = React.useState("");
  const [color, setColor] = React.useState("");

  const ChangeColor = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setColor(event.target.value);
  };

  const handleChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setSearchTerm(event.target.value);
  };

  React.useEffect(() => {
    axios
      .get<IPlayers>("https://www.balldontlie.io/api/v1/players", {
        headers: {
          "Content-Type": "application/json"
        },
      })
      .then(response => {

        setplayers(response.data.data);
      });
  }, []);


  const results = !searchTerm
    ? players
    : players.filter(player =>
      player.first_name.toLowerCase().includes(searchTerm.toLocaleLowerCase())
    );


  const favoratePlayer = (selectedPlayer: IPlayer) => {

    if (selectedPlayer.favorite !== false) {
      const newList = favoratePlayers.concat(selectedPlayer);
      setFavoratePlayer(newList);
    }

    const newPlayers = players.map(player => {
      if (player === selectedPlayer) {
        return {
          ...player,
          favorite: !player.favorite,
        };
      }
      else return player;

    });
    setplayers(newPlayers);

  };

  const removefavoratePlayer = (selectedPlayer: IPlayer) => {
    const newList = favoratePlayers.filter(player => player !== selectedPlayer);
    setFavoratePlayer(newList);
  };

  return (
    <>
   

      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
      />
      <div style={{ display: "flex" }}>
        <PlayerList players={results} favoratePlayer={favoratePlayer} />
        <FavorateList color={color} players={favoratePlayers} removefavoratePlayer={removefavoratePlayer} />
      </div>
      <input
        type="text"
        placeholder="color"
        value={color}
        onChange={ChangeColor}
      />

    </>

  );

}

export default App;
