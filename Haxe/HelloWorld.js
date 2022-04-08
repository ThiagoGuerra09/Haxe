(function ($global) { "use strict";
var HelloWorld = function() { };
HelloWorld.main = function() {
	console.log("HelloWorld.hx:3:","Hello World");
};
var haxe_iterators_ArrayIterator = function(array) {
	this.current = 0;
	this.array = array;
};
haxe_iterators_ArrayIterator.prototype = {
	hasNext: function() {
		return this.current < this.array.length;
	}
	,next: function() {
		return this.array[this.current++];
	}
};
HelloWorld.main();
})({});
