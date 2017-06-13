angular.module('mainController', ['authServices'])

.controller('mainCtrl', function(Auth, $timeout, $location, $rootScope){
	var app=this;

	app.loadme = false;
	$rootScope.$on('$routeChangeStart', function(){
		if(Auth.isLoggedIn()){
			//console.log("user is logged in");
			app.isLoggedIn = true;
			Auth.getUser().then(function(data){
				//console.log(data.data.username);
				app.username = data.data.username;
			});
		}
		else{
			//console.log("user is not logged in");
			app.isLoggedIn = false;
			app.username=null;
			app.loadme = true;
		}
	});
	app.doLogin = function(LoginData){
		app.loading = true;
		app.errorMessage= false;
		
		Auth.login(app.LoginData).then(function(data){
			//console.log(data);
			if(data.data.success){
				app.loading=false;
				app.successMessage = data.data.message;
				$timeout(function() {
					$location.path('/');
					app.LoginData = '';
					app.successMessage = false;
				}, 1500);
				
			}
			else{
				app.loading=false;
				app.errorMessage = data.data.message;
			}
		});	
	};
	this.logout = function(){
		Auth.logout();
		$location.path('/logout');
		$timeout(function(){
			$location.path('/');
		}, 1500);
	}
});


