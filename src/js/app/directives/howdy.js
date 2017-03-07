(function(mainModule){

 mainModule.directive('howdy', function(){
 	return {
 		require: "welcome",
 		link: function(scope, element, attrs, welcomeCtrl){
 			welcomeCtrl.sayHowdy();
 		}
 	}
 });
})(window.angular.module("mainModule"));
