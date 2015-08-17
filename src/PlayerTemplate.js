/*jshint laxbreak:true */
/*global Template, escape, window */

'use strict';

function PlayerTemplate() {
  Template.call(this);
  this.frameTemplate = new app.FrameTemplate();
  
  this.defaultTemplate = function(player){
    var template = 
    '<div class="player" data-id="{{id}}">'
    +   '<div class="pannel">'
    +     '<div class="name">'
    +     '  <p>{{name}}</p>'
    +     '</div>'
    +     '<div class="play hide">'
    // TODO: refactor the play list into a loop
    +     '  <ul>';
          for(var i=0; i<=Frame._NUMBER_OF_PINS; i++){
            template += '    <li><input type="button" class="pins btn-default" data-player-id="{{id}}" value="'+(i)+'"></li>'
          }
    template +=
         '  </ul>'
    +     '</div>'
    +     '<div class="clear"></div>'
    +   '</div>'
    +   '<div class="frames">';
          for(var frame of player.frames.all()){
            template += this.frameTemplate.show(frame);
          }
    template +=
          '<div class="clear"></div>'
    +   '</div>'
    + '</div>';
    return template;
  }
  
}

PlayerTemplate.prototype.show = function (data) {

  var view = '';
  var template = this.defaultTemplate(data);

  template = template.replace(/\{\{id\}\}/g, data.id);
  template = template.replace(/\{\{name\}\}/g, escape(data.name));

  view = view + template;

  return view;
};

window.app = window.app || {};
window.app.PlayerTemplate = PlayerTemplate;