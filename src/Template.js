'use strict';

var htmlEscapes = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  '\'': '&#x27;',
  '`': '&#x60;'
};

var escapeHtmlChar = function (chr) {
  return htmlEscapes[chr];
};

var reUnescapedHtml = /[&<>"'`]/g;
var reHasUnescapedHtml = new RegExp(reUnescapedHtml.source);

var escape = function (string) {
  return (string && reHasUnescapedHtml.test(string))
  ? string.replace(reUnescapedHtml, escapeHtmlChar)
  : string;
};

/**
* Sets up defaults for all the Template methods such as a default template
*
* @constructor
*/
function Template() {
  this.defaultTemplate = ''
}

/*
* @param {object} data The object containing keys you want to find in the template to replace.
* @returns {string} HTML String
*/
Template.prototype.show = function (data) {

  var view = '';
  var template = this.defaultTemplate;

  view = view + template;

  return view;
};