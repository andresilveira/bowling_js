/*global qs, $on, window, PlayerTemplate */

'use strict';

function GameView() {
  this.playerTemplate = new PlayerTemplate();
  this.frameTemplate = new FrameTemplate();

  this.$game = qs('#game');
  this.$players = qs('#players');
  this.$currentPlayer = null;
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
        
        if(frame.full()){
          self._setUpNextPlayer();
        }
      }
    };

    viewCommands[viewCmd]();
  },
  
  _startGame: function () {
    this._initPlayer();
    $hide(this.$newGameControls);
  },
  
  _setUpNextPlayer: function () {
    this._setUpPlayer(this._nextPlayer());
  },
  
  _nextPlayer: function (){
    this.$currentPlayer = this.$currentPlayer.nextElementSibling || qs('.player');
    return this.$currentPlayer;
  },
  
  _initPlayer: function () {
    this.$currentPlayer = qs('.player');
    $addClass(this.$currentPlayer, 'current');
    this._setUpPlayer(this.$currentPlayer);
  },
  
  _setUpPlayer: function ($player) {
    $hide(qs('.player.current .play'));
    $removeClass(qs('.player.current'), 'current');
    
    $addClass($player, 'current');
    $show(qs('.play', $player));
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