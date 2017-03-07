(function(mainModule){

 mainModule.directive('welcome', function(){
 	/* DIRECTIVE COMMUNICATE TO DIRECTIVE */
	return{
		restrict: "E",
		controller: function($scope){
			$scope.words = [];

			this.sayHello = function(){
				$scope.words.push("hello");
			};

			this.sayHowdy = function(){
				$scope.words.push("howdy");
			};

			this.sayHi = function(){
				$scope.words.push("hi");
			}
		},
		link: function(scope, element){
			element.bind("mouseenter", function(){
				console.log(scope.words);
			})
		}
		//template: "<div>Howdy there! You look splendid.</div>"
	}
})
})(window.angular.module("mainModule"));