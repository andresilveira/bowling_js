/*global $on, window */
'use strict';

/**
* Sets up App
*/
function App() {
  this.model = new app.Game();

  this.playerTemplate = new app.PlayerTemplate();
  
  this.view = new app.GameView();
  
  this.controller = new app.GameController(this.model, this.view);
}

var app = new App();