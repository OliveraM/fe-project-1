(function(mainModule){

	mainModule.filter('capitalize', function(){
		/* filter function has to return the function that will be exectued every time Angular needs to evaluate the expression */
		return function(text){
			return text.toUpperCase();
		}
	});
})(window.angular.module("mainModule"));