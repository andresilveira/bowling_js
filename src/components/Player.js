import React from 'react';
import Frame from './Frame';

const Player = ({name}) => (
  <div>
    <h3>{name}</h3>
    <Frame rolls={[{label: 3, value: 3, id: 1}, {label: 1, value: 1, id: 2}]} />
    <Frame rolls={[{label: 1, value: 1, id: 3}, {label: 2, value: 2, id: 4}]} />
  </div>
);

export default Player;
