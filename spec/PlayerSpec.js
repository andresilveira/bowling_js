describe("Player", function() {
  'use strict'; 
  
  it("should be called by the name when specified", function() {
    var name = "Little John";
    expect(new Player(1, name).name).toEqual(name);
  });
  
  it("should be called 'Player id' when not known", function() {
    expect(new Player(1).name).toEqual('Player 1');
  });
  
  it("should have an id", function() {
    var id = 1;
    expect(new Player(id).id).toEqual(id);
  });
  
  it("should have a score of 0 when created", function() {
    expect(new Player(1).score).toEqual(0);
  });
});
