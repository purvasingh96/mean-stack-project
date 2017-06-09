angular.module('userControllers', [])

.controller('regCtrl', function($http){

	var app=this;

	app.regUser = function(regData){
		console.log("testing new button");
		console.log(app.regData);
		$http.post('/api/faculty', app.regData).then(function(data){
			console.log(data);
		});	//faculty registered in faculty_details
		/*if(data.regData.success){
			//create success message
			//redirect to home page
			app.successMessage = data.regData.message;
		}
		else{
			//create error message
			app.errorMessage = data.regData.message;
		}*/
	};
});
