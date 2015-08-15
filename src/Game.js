'use strict';

function Game(players) {
  this.players = new Collection(players);

  this.winner = null;
}

Game.prototype = {
  constructor: Game,
  add_player: function(player){ 
    this.players.add(player);
  }
};