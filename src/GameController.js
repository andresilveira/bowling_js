/*global window */

'use strict';

/**
* Takes a model and view and acts as the controller between them
*
* @constructor
* @param {object} model The model instance
* @param {object} view The view instance
*/
function GameController(model, view) {
  var self = this;
  self.model = model;
  self.view = view;

  self.view.bind('addPlayer', function () {
    var player = new Player(self.model.players.currentId);
    self.model.add_player(player, function(stored_player){
      self.addPlayer(stored_player);
    });
  });
  
  self.view.bind('startGame', function() {
    self.startGame();
  });
  
  self.view.bind('play', function (parameters) {
    self.play(parameters.playerId, parameters.pins);
  })
}

GameController.prototype = {
  constructor: GameController,
  
  setView: function (action) {
    this.view.render(action);
  },
  
  addPlayer: function (player) {
    this.view.render('addPlayer', player);
  },
  
  startGame: function () {
    this.view.render('startGame');
  },
  
  play: function (playerId, pins) {
    var player = this.model.players.find(playerId);
    var frame = player.play(pins);
    this.view.render('updateFrame', frame);
  }
};

window.app = window.app || {};
window.app.GameController = GameController;