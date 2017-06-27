angular.module('studentServices', [])
	.factory('Student', function($http){
		studentFactory = {};	//user objects

		//Student.getRegisteredStudents():
		studentFactory.getRegisteredStudents = function(){
			return $http.get('/api/management');
		}
		return studentFactory;	
	});

//factory is just a way to orgaise code.
