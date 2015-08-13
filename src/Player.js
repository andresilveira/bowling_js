'use strict';

function Player(id, name) {
  if( typeof id == 'undefined' ){
    throw new TypeError('a Player requires an id');
  }
  
  this.id = id;
  this.name = name || 'Unknown';
  this.score = 0;
}

Player.prototype = {
  constructor: Player
};