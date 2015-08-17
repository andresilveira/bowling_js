/*global window */
'use strict';

function Frame(id, playerId, rows, total) {
  this.maximum = Frame._NUMBER_OF_PINS; 
  
  this.id = id;
  this.playerId = playerId;
  this.rows = rows || [];
  this.total = total || 0;
  this.isStrike = false;
  this.isSpare = false;
}

Frame.prototype = {
  constructor: Frame,
  
  knockedPins: function () {
    var knockedPins = 0;
    for(var row of this.rows){
      knockedPins += row;
    }
    return knockedPins;
  },
  
  remainingPins: function () {
    return this.maximum - this.knockedPins();
  },
  
  knock: function(pins) {
    if(pins > this.remainingPins()){
      throw new RangeError("somehow you knocked more pins than it's possible");
    }
    
    if(pins == Frame._NUMBER_OF_PINS){
      this.strike();
    }
    else if(pins == this.remainingPins()){
      this.spare();
    }
    else {
      this.rows.push(pins);
      if(this.full()){
        this.updateTotal();
      }
    }
  },
  
  updateTotal: function () {
    if(this.isStrike || this.isSpare){
      this.total = "";
    }
    else {
      this.total = this.rows.reduce(function(a, b) {
        return parseInt(a) + parseInt(b);
      });
    }
  },
  
  strike: function () {
    this.rows = ["", "X"];
    this.isStrike = true;
  },
  
  spare: function () {
    this.rows.push("/");
    this.isSpare = true;
  },
  
  full: function () {
    return this.isStrike || this.isSpare || this.rows.length == Frame._NUMBER_OF_ROWS ;
  }
};

Frame._NUMBER_OF_ROWS = 2,
Frame._NUMBER_OF_PINS = 10,

window.app = window.app || {};
window.app.Frame = Frame;