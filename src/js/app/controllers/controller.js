(function(mainApp){
  mainApp.controller('MainCtrl', ['$scope',  function($scope){
	var $this = $scope;

	/* capitalize filter */
	$this.test = {
		myString : 'lala'
	};

	/* filtering by search input*/ 
	$this.people = [
      {
        name: "Eric Simons",
        born: "Chicago"
      },
      {
        name: "Albert Pai",
        born: "Taiwan"
      },
      {
        name: "Matthew Greenster",
        born: "Virginia"
      }
    ];
}]);
})(window.angular.module('mainModule'));