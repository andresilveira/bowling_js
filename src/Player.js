/*global window, Frame*/

'use strict';

function Player(id, name) {
  this._NUMBER_OF_FRAMES = 10;
  this.id = id;
  this.name = name || 'Player ' + id;
  this.score = 0;
  
  var frames = [];
  for(var i=0; i<this._NUMBER_OF_FRAMES; i++){
    frames.push(new Frame(i));
  }
  this.frames = new Collection(frames);
}

Player.prototype = {
  constructor: Player,
  defaultName: function(){
    this.name = this.name || 'Player ' + this.id;
  }
};

// Export to window
window.app = window.app || {};
window.app.Player = Player;
