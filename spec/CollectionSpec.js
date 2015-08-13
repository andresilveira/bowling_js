describe("Collection", function () {
  'use strict';
  
  var collection, element = null;
  
  beforeEach(function(){
    collection = new Collection();
  });
  
  describe(".all", function() {
    it("should return an array", function() {
      expect(collection.all()).toEqual([]);
    });
  });
  
  describe(".add", function() {
    it("should add a single object", function() {
      collection.add({id: 1});
      expect(collection.all()).toEqual([{id: 1}]);
    });
    
    it("should add an array of objects", function() {
      collection.add([{id: 1}, {id: 2}]);
      expect(collection.all()).toEqual([{id: 1}, {id: 2}]);
    });
  });
  
  describe(".remove", function() {
    beforeEach(function(){
      collection.add([ {id: 1}, {id: 2} ]);
    });
    
    it("remove the element and return it", function() {
      collection.remove(1, function(element){
        expect(collection.all()).not.toContain([{id: 1}]);
        expect(element).toEqual({id: 1});
      });
    });
    
    it("should return null if element is not found", function() {
      element = collection.remove(3);
      expect(element).not.toBeDefined();
    });
  });
  
  describe(".finders", function() {
    beforeEach(function(){
      collection.add([ {id: 1}, {id: 2} ]);
    });
    
    it("should find an element with a given id", function() {
      expect(collection.find(1)).toEqual({id: 1});
    });
    
    it("should return an empty array when the element is not found", function() {
      expect(collection.find(3)).not.toBeDefined();
    });
    
    it("should find an element by a given attribute, ", function() {
      collection.find_by({id: 1}, function(elements){
        expect(elements).toEqual([{id: 1}]);
      });
    });
    
    it("should return an empty array when the element is not found", function() {
      collection.find_by({id: 3}, function(elements){
        expect(elements).toEqual([]);
      });
    });
  });
  
  describe(".count", function() {
    it("should return 0 when empty", function() {
      expect(collection.count()).toEqual(0);
    });
    
    it("should return the size the number of elements", function() {
      collection.add({id: 1});
      expect(collection.count()).toEqual(1);
    });
  });
});
