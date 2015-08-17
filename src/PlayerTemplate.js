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