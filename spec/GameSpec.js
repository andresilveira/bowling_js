// global Game, Player
describe("Game", function() {
  'use strict';
  
  var game, player;
  
  beforeEach(function(){
    game = new Game();
  });
  
  it("has a collection of players", function() {
    expect(game.players.all()).toEqual([]);
  });
  
  it("can add a player", function() {
    player = new Player(1, 'Little John');
    game.add_player(player);
    expect(game.players.all()).toEqual([player]);
  });
});
