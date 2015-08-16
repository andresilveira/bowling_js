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
    self.addPlayer();
  });
}

GameController.prototype = {
  constructor: GameController,
  
  setView: function (view) {
    this.view.render(view);
  },
  
  addPlayer: function () {
    var self = this;

    self.model.create(function () {
      self.view.render('newPlayer');
    });
  }
};

window.app = window.app || {};
window.app.GameController = GameController;