import React from 'react';

interface Props {
  player: IPlayer;
  removefavoratePlayer: FavoratePlayer;
}


export const FavorateListItem: React.FC<Props> = ({ player, removefavoratePlayer }) => {
  return (
    <li>
      <label>
        <input type="checkbox" checked={player.favorite} onClick={() => {
            removefavoratePlayer(player);
          }}/> {player.first_name}
      </label>
    </li>

    
  );

  
};