(function(mainModule){
	mainModule.factory('httpService', ['$http', '$scope', function($http, $scope){
		this.get = function(){
			return $http.get('../../../res/people.json');
		};
	}]);
})(window.angular.module("mainModule"));