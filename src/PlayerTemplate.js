/*jshint laxbreak:true */
/*global Template, escape, window */

'use strict';

function PlayerTemplate() {
  Template.call(this);
  
  this.defaultTemplate
  = '<div class="player" data-id="{{id}}">'
  +   '<div class="pannel">'
  +     '<div class="name">'
  +     '  <p>{{name}}</p>'
  +     '</div>'
  +     '<div class="play hide">'
  // TODO: refactor the play list into a loop
  +     '  <ul>'
  +     '    <li><button class="btn-default" name="pins-1">1</button></li>'
  +     '    <li><button class="btn-default" name="pins-2">2</button></li>'
  +     '    <li><button class="btn-default" name="pins-3">3</button></li>'
  +     '    <li><button class="btn-default" name="pins-4">4</button></li>'
  +     '    <li><button class="btn-default" name="pins-5">5</button></li>'
  +     '    <li><button class="btn-default" name="pins-6">6</button></li>'
  +     '    <li><button class="btn-default" name="pins-7">7</button></li>'
  +     '    <li><button class="btn-default" name="pins-8">8</button></li>'
  +     '    <li><button class="btn-default" name="pins-9">9</button></li>'
  +     '    <li><button class="btn-default" name="pins-10">10</button></li>'
  +     '  </ul>'
  +     '</div>'
  +     '<div class="clear"></div>'
  +   '</div>'
  // TODO: refactor the frames into a loop
  +   '<div class="frames">'
  +   '  <object data-frame-id=1 data-player-id="{{id}}" class="frame" type="image/svg+xml" data="./assets/images/frame.svg" >This browser doesn\'t support svg :(</object>'
  +   '  <object data-frame-id=1 data-player-id="{{id}}" class="frame" type="image/svg+xml" data="./assets/images/frame.svg">This browser doesn\'t support svg :(</object>'
  +   '  <object data-frame-id=1 data-player-id="{{id}}" class="frame" type="image/svg+xml" data="./assets/images/frame.svg">This browser doesn\'t support svg :(</object>'
  +   '  <object data-frame-id=1 data-player-id="{{id}}" class="frame" type="image/svg+xml" data="./assets/images/frame.svg">This browser doesn\'t support svg :(</object>'
  +   '  <object data-frame-id=1 data-player-id="{{id}}" class="frame" type="image/svg+xml" data="./assets/images/frame.svg">This browser doesn\'t support svg :(</object>'
  +   '  <object data-frame-id=1 data-player-id="{{id}}" class="frame" type="image/svg+xml" data="./assets/images/frame.svg">This browser doesn\'t support svg :(</object>'
  +   '  <object data-frame-id=1 data-player-id="{{id}}" class="frame" type="image/svg+xml" data="./assets/images/frame.svg">This browser doesn\'t support svg :(</object>'
  +   '  <object data-frame-id=1 data-player-id="{{id}}" class="frame" type="image/svg+xml" data="./assets/images/frame.svg">This browser doesn\'t support svg :(</object>'
  +   '  <object data-frame-id=1 data-player-id="{{id}}" class="frame" type="image/svg+xml" data="./assets/images/frame.svg">This browser doesn\'t support svg :(</object>'
  +   '  <object data-frame-id=1 data-player-id="{{id}}" class="frame" type="image/svg+xml" data="./assets/images/frame.svg">This browser doesn\'t support svg :(</object>'
  +   '  <div class="clear"></div>'
  +   '</div>'
  + '</div>';
}

PlayerTemplate.prototype.show = function (data) {

  var view = '';
  var template = this.defaultTemplate;

  template = template.replace('{{id}}', data.id);
  template = template.replace('{{name}}', escape(data.name));

  view = view + template;

  return view;
};

window.app = window.app || {};
window.app.PlayerTemplate = PlayerTemplate;