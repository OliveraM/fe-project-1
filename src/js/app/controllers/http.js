(function(mainModule){
	mainModule.controller('httpCtrl', ['$http', '$scope', 'httpService', function($http, $scope, httpService){
		var self = this;
		self.jsonData = '';

		selt.getMessage = function(){
						//$http.get('../../../res/people.json')
			httpService.get()
			.then(function(res){
				console.log(res.data);
				self.jsonData = res.data;
			})
		};
	}]);
})(window.angular.module("mainModule"));