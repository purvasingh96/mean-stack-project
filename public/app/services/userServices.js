angular.module('userServices', [])
	.factory('User', function($http){
		userFactory = {};	//user objects

		//User.create(regData):
		userFactory.create = function(regData){
			return $http.post('/api/faculty', regData);
		}
		return userFactory;	
	});

//factory is just a way to orgaise code.
