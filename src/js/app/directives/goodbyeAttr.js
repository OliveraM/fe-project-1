(function(mainModule){
	
	mainModule.directive('goodbyeAttr', function(){
		return {
			restrict: "A",
			link: function(){
				return 'see you later';
			}
		}
	})

})(window.angular.module('mainModule'));