/*global $on, window */
'use strict';

/**
* Sets up App
*/
function App() {
  this.model = new app.Game();

  this.playerTemplate = new app.PlayerTemplate();
  this.gameTemplate = new app.GameTemplate();
  
  this.view = new app.GameView(this.gameTemplate);
  
  this.controller = new app.GameController(this.model, this.view);
}

var app = new App();

function setView() {
  app.controller.setView('showGame');
}

$on(window, 'load', setView);