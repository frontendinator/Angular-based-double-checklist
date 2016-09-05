angular.
	module('checklist').
  	component('forParents', {
  		templateUrl: 'components/parentsection.html',
  		controller: function checklistParents ($scope, $http) {
      	$http.get("js/checklistparents.json").then(function(response) {
        $scope.items = response.data.items;
    });
  	}
});