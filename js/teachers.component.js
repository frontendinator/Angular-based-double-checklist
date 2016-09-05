angular.
	module('checklist').
  	component('forTeachers', {
  		templateUrl: 'components/teachersection.html',
  		controller: function checklistTeachers ($scope, $http) {
      	$http.get("js/checklistteachers.json").then(function(response) {
        $scope.items = response.data.items;
    });
  	}
});