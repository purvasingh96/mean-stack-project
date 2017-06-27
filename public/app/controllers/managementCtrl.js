angular.module('managementController', ['studentServices'])
.controller('managementCtrl', function(Student){
	var app = this;
	app.loading = true;
	Student.getRegisteredStudents().then(function(data){
		if(data.data.success)
		{
			app.students = data.data.students;
			app.loading=false;
		}else{
			app.errorMsg = data.data.message;
			app.loading=false;
		}
	})
})
