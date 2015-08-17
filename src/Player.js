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
  this._strikes = []; // [ {frame: Frame, lastRows: [1, 5]} ]
  this._spares = [];  // [ {frame: Frame, lastRows: [5]} ]
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
    // check for the previous strikes and spares
    // update the score on the frames which were a strike
    // pop the ones updated
    
    // mark the current frame
    frame.knock(pins);
    
    // add the frame to a stack if strike or spare
    if(frame.isStrike){
      this._strikes.push({frame: frame, lastTwoRows: []});
    }
    else if(frame.isSpare){
      this._spares.push({frame: frame, lastRow: []});
    }
    
    // move to the next frame
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
