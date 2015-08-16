/*global window */

'use strict';

function Game(players) {
  this.players = new Collection(players);

  this.winner = null;
}

Game.prototype = {
  constructor: Game,
  add_player: function(player, callback){ 
    this.players.add(player, callback);
  }
};

// Export to window
window.app = window.app || {};
window.app.Game = Game;