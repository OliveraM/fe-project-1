(function(mainModule){

	mainModule.directive('leaving', function(){
	return function(scope, element, attrs){
		element.bind('mouseleave', function(){
			console.log('mouse left the div');
			//element.removeClass(attrs.entering);
		});
	}
});
})(window.angular.module("mainModule"));