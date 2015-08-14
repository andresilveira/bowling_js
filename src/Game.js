'use strict';

function Game(players) {
  this.players = new Collection(players);

  this.winner = null;
}

Game.prototype = {
  constructor: Game,
  _add_player: function(player_or_players){ this.players.add(player_or_players); },
  add_player: function(player){ this._add_player(player); },
  add_players: function(players){ this._add_player(players); }
};