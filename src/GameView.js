/*global qs, $on, window */

'use strict';

function GameView(template) {
  this.template = template;

  this.$game = qs('#game');
  this.$players = qs('#players');
  this.$addPlayer = qs('#add-player');
}

GameView.prototype = {
  constructor: GameView,
  
  render: function (viewCmd, parameter) {
    var self = this;
    var viewCommands = {
      showGame: function () {
        self.$game.innerHTML = self.template.show(parameter);
      }
    };

    viewCommands[viewCmd]();
  },
  
  bind: function (event, handler) {
    var self = this;
    if (event === 'addPlayer') {
      $on(self.$addPlayer, 'click', function () {
        handler();
      });
    }
  }
};

window.app = window.app || {};
window.app.GameView = GameView;