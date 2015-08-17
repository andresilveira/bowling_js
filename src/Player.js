/*global window, Frame*/

'use strict';

function Player(id, name) {
  this.id = id;
  this.name = name || 'Player ' + id;
  this.score = 0;
  
  var frames = [];
  for(var i=0; i<Player._NUMBER_OF_FRAMES; i++){
    frames.push(new Frame(i, this.id));
  }
  this.frames = new Collection(frames);
  this._currentFrame = 1;
}

Player.prototype = {
  constructor: Player,
  
  defaultName: function(){
    this.name = this.name || 'Player ' + this.id;
  },
  
  play: function (pins) {
    var frame = this.frames.find(this._currentFrame);
    
    frame = this._markScore(frame, pins);
    return frame;
  },
  
  _markScore(frame, pins){
    // a strike
    frame.knock(pins);
    this._nextFrame(frame);
    return frame;
  },
  
  _nextFrame: function (frame) {
    if(frame.full()){
      this._currentFrame++;
    }
  }
};

Player._NUMBER_OF_FRAMES = 10;

// Export to window
window.app = window.app || {};
window.app.Player = Player;
