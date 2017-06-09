angular.module('userControllers', ['userServices'])

.controller('regCtrl', function($http, $location, $timeout, User){

	var app=this;

	app.regUser = function(regData){
		app.loading = true;
		app.errorMessage= false;
		console.log(app.regData);
		User.create(app.regData).then(function(data){
			if(data.data.success){
				app.loading=false;
				app.successMessage = data.data.message;
				$timeout(function() {
					$location.path('/');
				}, 1500);
				
			}
			else{
				app.loading=false;
				app.errorMessage = data.data.message;
			}
		});	
	};
});
