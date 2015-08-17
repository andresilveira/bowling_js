/*global qs, $on, window, PlayerTemplate */

'use strict';

function GameView() {
  this.playerTemplate = new PlayerTemplate();

  this.$game = qs('#game');
  this.$players = qs('#players');
  this.$addPlayer = qs('#add-player');
  this.$startGame = qs('[name = "startGame"]');
  this.$newGameControls = qs('#new-game-controls')
}

GameView.prototype = {
  constructor: GameView,
  
  render: function (viewCmd, parameter) {
    var self = this;
    var viewCommands = {
      addPlayer: function () {
        self.$players.innerHTML += self.playerTemplate.show(parameter);
      },
      startGame: function () {
        self._startGame();
      }
    };

    viewCommands[viewCmd]();
  },
  
  _startGame: function () {
    var playButtons = qsa('.play');
    $show(playButtons[0]);
    $hide(this.$newGameControls);
  },
  
  bind: function (event, handler) {
    var self = this;
    if (event === 'addPlayer') {
      $delegate(this.$game, '#add-player', 'click', function () {
        handler();
      });
    }
    else if(event === 'startGame'){
      $delegate(this.$game, '[name = "startGame"]', 'click', function () {
        handler();
      });
    }
  }
};

window.app = window.app || {};
window.app.GameView = GameView;