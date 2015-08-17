/*global Frame */

describe("Frame", function() {
  'use strict';
  
  var frame;
  
  beforeEach(function(){
    frame = new Frame();
  });
  
  it("should have a maximum (number of pins to be knocked)", function () {
    expect(frame.maximum).toEqual(Frame._NUMBER_OF_PINS);
  });
  
  describe(".rows", function () {
    it("should be an array representing the rows of a frame", function () {
      expect(frame.rows).toEqual([]);
    });
  });
  
  describe(".currentRow", function () {
    it("should be the size of rows + 1", function () {
      expect(frame.currentRow()).toEqual(1);
      frame.rows.push(1);
      expect(frame.currentRow()).toEqual(2);
    });
  });
  
  describe(".knock", function () {
    it("should populate the current row with the number of knocked pins", function () {
      var knockedPins = 5;
      frame.knock(knockedPins);
      expect(frame.rows).toEqual([5]);
    });
  });
  
  describe(".updateTotal()", function () {
    it("should update the total", function () {
      var total = 5;
      frame.updateTotal(total);
      
      expect(frame.total).toEqual(total);
    });
  });
});
