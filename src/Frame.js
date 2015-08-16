'use strict';

function Frame(id) {
  this._NUMBER_OF_ROWS = 2;
  this._NUMBER_OF_PINS = 10;
  
  this.id = id;
  this.maximum = this._NUMBER_OF_PINS;
  this.knockedPins = 0;
  this.remaining_pins = this.maximum - this.knockedPins; 
  this.rows = [];
}

Frame.prototype = {
  constructor: Frame,
  
  currentRow: function () {
    return this.rows.length + 1;
  },
  
  knock: function(pins) {
    if(pins > this.remaining_pins){
      throw new RangeError("somehow you knocked more pins than it's possible");
    }
    
    this.rows.push(pins);
  },
  
  updateTotal: function (newTotal) {
    this.total = newTotal;
  }
};