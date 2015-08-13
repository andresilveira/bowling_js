'use strict';

// TODO: 
//  * consider make Collection inherit from Array http://perfectionkills.com/how-ecmascript-5-still-does-not-allow-to-subclass-an-array/

function Collection (element_or_elements){
  this._collection = {};

  if (element_or_elements){
   this.add(element_or_elements); 
  }
}

Collection.prototype = {
  constructor: Collection,
  
  all: function (){
    var that = this;
    return Object.keys(this._collection).map(function(key) { return that._collection[key]; });
  },
  
  add: function (element_or_elements, callback){
    callback = callback || function () {};
    
    if( element_or_elements instanceof Array ){  // need some duck typing here...
      var length = element_or_elements.length;
      for (var i = 0; i < length; i++) {
        callback.call(this, this._add(element_or_elements[i]));
      }
    } else {
      callback.call(this, this._add(element_or_elements));
    }
  },
  
  _add: function (element, callback){
    if( typeof element.id == 'undefined' ){
      throw new TypeError('an element requires an id to be added');
    }
    callback = callback || function () {};

    this._collection[element.id] = element;
  },
  
  count: function () {
    return Object.keys(this._collection).length; // can be potentially bug prone without checking hasOwnProperty
  },
  
  find: function (id){
    return this._collection[id];
  },
  
  // the data passed to the callback is an Array with the elements that match ALL the 
  // query attributes
  find_by: function (query, callback){
    if (!callback) {
      return;
    }
    
    callback.call(this, this.all().filter(function (element){
      for (var attr in query) {
        if (query[attr] !== element[attr]) { return false; }
      }
      return true;
    }));
  },
  
  remove: function (id, callback){
    callback = callback || function () {};
    callback.call(this, this.find(id));
    
    delete this._collection[id];
  }
};