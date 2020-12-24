import React from 'react';
import { FavorateListItem } from './FavorateListItem';


interface Props {
  players: IPlayer[];
  removefavoratePlayer: FavoratePlayer;
  color:string;
}

export const FavorateList: React.FC<Props> = ({color, players, removefavoratePlayer }) => {
  return (
    <ul style={{'backgroundColor':color}}>
      {players.map(player => (
        <FavorateListItem key={player.id} player={player} removefavoratePlayer={removefavoratePlayer} />
      ))}
    </ul>
  );
};