'use strict';

function Player(id, name) {
  this.id = id;
  this.name = name || 'Player ' + id;
  this.score = 0;
}

Player.prototype = {
  constructor: Player,
  defaultName: function(){
    this.name = name || 'Player ' + id;
  }
};

// Export to window
window.app = window.app || {};
window.app.Player = Player;
