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
  
  describe(".knock", function () {
    it("should populate the current row with the number of knocked pins", function () {
      var knockedPins = 5;
      frame.knock(knockedPins);
      expect(frame.rows).toEqual([5]);
    });
  });
  
  describe(".updateTotal()", function () {
    it("should update the total", function () {
      frame.rows = [1,5]
      frame.updateTotal();
      
      expect(frame.total).toEqual(6);
    });
  });
});
