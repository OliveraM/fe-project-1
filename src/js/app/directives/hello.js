(function(mainModule){

	 mainModule.directive('hello', function(){
	 	return {
	 		restrict: 'A',
	 		require: "welcome",
	 		link: function(scope, element, attrs, welcomeCtrl){
	 			welcomeCtrl.sayHello();
	 		}
	 	}
	 })
})(window.angular.module('mainModule'))