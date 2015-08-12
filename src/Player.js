'use strict'

function Player(id, name) {
  if( typeof id == 'undefined' ){
    throw TypeError('a Player requires an id');
  }
  
  this.id = id;
  this.name = name || 'Unknown';
  this.score = 0;
}

User.prototype = {
  constructor: User
}