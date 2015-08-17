/*jshint laxbreak:true */
/*global Template, window */

'use strict';

function FrameTemplate() {
  Template.call(this);
  
  this.defaultTemplate
  = '<svg version="1.1" id="{{id}}" class="frame" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 100" xml:space="preserve">'
  + ' <g>'
  + '   <rect x="0" y="0" class="frame-container" width="100" height="100"/>'
  + '   <polyline class="divider" points="50,16 50,56 100,56"/>'
  + '   <line class="divider" x1="100" y1="16" x2="0" y2="16"/>'
  + ' </g>'
  + ' <text transform="matrix(1 0 0 1 45.5508 13.0214)" id="title">{{id}}</text>'
  + ' <text transform="matrix(1 0 0 1 16.1015 39.0215)" id="row1"></text>'
  + ' <text transform="matrix(1 0 0 1 66.1012 39.0215)" id="row2"></text>'
  + ' <text transform="matrix(1 0 0 1 34.8789 78.0213)" id="total"></text>'
  + '</svg>';
}

FrameTemplate.prototype.show = function (data) {

  var view = '';
  var template = this.defaultTemplate;

  template = template.replace(/\{\{id\}\}/g, data.id);

  view = view + template;

  return view;
};

window.app = window.app || {};
window.app.FrameTemplate = FrameTemplate;