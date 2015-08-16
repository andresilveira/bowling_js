/*jshint laxbreak:true */
/*global Template, window */

'use strict';

function GameTemplate() {
  Template.call(this);
  
  this.defaultTemplate
  = '<div id="players"></div>'
  + '<a href="#addPlayer" id="add-player">+ Add a player</a> Or'
  + '<button class="btn-default" name="startGame">Let the Game begin!</button>';
}

GameTemplate.prototype = new Template();
GameTemplate.prototype.constructor = GameTemplate;

window.app = window.app || {};
window.app.GameTemplate = GameTemplate;