(function(mainModule){

	mainModule.directive('welcomeAttr', function(){
		return{
			restrict: "A",
			link: function(){
				 alert("Howdy");
			}
		}
	})
})(window.angular.module("mainModule"));