(function(mainModule){
	mainModule.directive('entering', function(){
		// scope: false - izoluje scope direktive od controllera
		return function(scope, element, attrs){
			console.log(scope, attrs);
			element.bind('mouseenter', function(){
				// console.log('mouse entered the div');
				// element.addClass(attrs.entering);
				/* DIRECTIVE COMMUNICATE TO CONTROLLER*/
				 scope.fun.end();
				// scope.$apply("fun.start()");
				//scope.$apply(attrs.entering);
			})
		}
	})
})(window.angular.module('mainModule'));