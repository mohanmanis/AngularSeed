angular.module('ControllerModule', [])
.controller('ControllerOne',['$scope','MessageService',function($scope, MessageService){
	
	$scope.output= MessageService.message();

	console.log("Inside Controller 1");

}]);