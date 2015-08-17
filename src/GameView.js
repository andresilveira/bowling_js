/*global qs, $on, window, PlayerTemplate */

'use strict';

function GameView() {
  this.playerTemplate = new PlayerTemplate();
  this.frameTemplate = new FrameTemplate();

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
      },
      updateFrame: function(){
        var frame = parameter;
        var $frame = qs('.player[data-id="'+frame.playerId+'"] .frame[data-id="'+frame.id+'"]');
        $frame.outerHTML = self.frameTemplate.show(frame);
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
      $on(this.$addPlayer, 'click', function () {
        handler();
      })
    }
    else if(event === 'startGame'){
      $on(this.$startGame, 'click', function () {
        handler();
      });
    }
    else if(event === 'play'){
      $delegate(this.$players, 'input.pins', 'click', function () {
        handler({playerId: this.dataset.playerId, pins: this.value});
      });
    }
  }
};

window.app = window.app || {};
window.app.GameView = GameView;