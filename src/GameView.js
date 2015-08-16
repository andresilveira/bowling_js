/*global qs, $on, window, PlayerTemplate */

'use strict';

function GameView() {
  this.playerTemplate = new PlayerTemplate();

  this.$game = qs('#game');
  this.$players = qs('#players');
  this.$addPlayer = qs('#add-player');
}

GameView.prototype = {
  constructor: GameView,
  
  render: function (viewCmd, parameter) {
    var self = this;
    var viewCommands = {
      addPlayer: function () {
        self.$players.innerHTML += self.playerTemplate.show(parameter);
      }
    };

    viewCommands[viewCmd]();
  },
  
  bind: function (event, handler) {
    var self = this;
    if (event === 'addPlayer') {
      $delegate(this.$game, '#add-player', 'click', function () {
        handler();
      });
    }
  }
};

window.app = window.app || {};
window.app.GameView = GameView;