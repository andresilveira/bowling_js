import React from 'react';
import Player from './Player';

const Game = () => (
  <div>
    <h1>BowlingJs</h1>
    <ul className="players">
      <li>
        <Player />
      </li>
    </ul>
  </div>
);

export default Game;
