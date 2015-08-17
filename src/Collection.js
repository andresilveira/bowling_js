'use strict';

function Collection (element_or_elements){
  this._collection = {};
  this.currentId = 1;

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
    if( element_or_elements instanceof Array ){  // need some duck typing here...
      var length = element_or_elements.length;
      
      for (var i = 0; i < length; i++) {
        this._add(element_or_elements[i], callback);
      }
    }
    else {
      this._add(element_or_elements, callback);
    }
  },
  
  _add: function (element, callback){
    callback = callback || function () {};
    
    element.id = this.currentId;
    this._collection[element.id] = element;
    this.incrementCurrentId();
    
    callback.call(this, element);
  },
  // simulates the behaviour from SQL auto increment
  incrementCurrentId: function () {
    this.currentId++;
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