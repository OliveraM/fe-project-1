 (function(mainModule){

	 mainModule.controller('FunCtrl', function(){
	 	var self = this;

	 	self.start = function(){
	 		console.log("Fun times have been started");
	 	}

	 	self.end = function() {
	    	console.log("Fun time is over.");
	  	}
	 })
	 
 })(window.angular.module('mainModule'));