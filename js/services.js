angular.module('ServiceModule',[])
.factory('MessageService', function(){
	
	return {
		 message: function(){

		 return ("I am using Message Service!!");

		}
	}
});