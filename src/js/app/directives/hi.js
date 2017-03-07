(function(mainModule){

 mainModule.directive('hi', function(){
 	return {
 		require: "welcome",
 		link: function(scope, element, attrs, welcomeCtrl){
 			welcomeCtrl.sayHi();
 		}
 	}
 })
 
})(window.angular.module("mainModule"));