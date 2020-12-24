import React from 'react';
import { PlayerListItem } from './PlayerListItem';

interface Props {
  players: IPlayer[];
  favoratePlayer: FavoratePlayer;
}

export const PlayerList: React.FC<Props> = ({ players, favoratePlayer }) => {
  return (
    <ul>
      {players.map(player => (
        <PlayerListItem key={player.id} player={player} favoratePlayer={favoratePlayer} />
      ))}
    </ul>
  );
};