import React from 'react';

interface Props {
  player: IPlayer;
  favoratePlayer: FavoratePlayer;
}


export const PlayerListItem: React.FC<Props> = ({ player, favoratePlayer }) => {
  return (
    <li>
      <label>
        <input type="checkbox" checked={player.favorite} onClick={() => {
            favoratePlayer(player);
          }}/> {player.first_name}
      </label>
    </li>

    
  );

  
};