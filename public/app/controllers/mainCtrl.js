angular.module('mainController', ['authServices'])

.controller('mainCtrl', function(Auth, $timeout, $location, $rootScope, $http){
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

	app.readCSV = function(){
		$http.get('/assets/students.csv').then(function(response)
			{
				console.log("got csv");
				app.processData(response.data);
			});
	};
	app.processData = function(allText) {
		// split content based on new line
		console.log("process data");
		var allTextLines = allText.split(/\r\n|\n/);
		var headers = allTextLines[0].split(',');
		var lines = [];
		for ( var i = 0; i < allTextLines.length; i++) {
			// split content based on comma
			var data = allTextLines[i].split(',');
			if (data.length == headers.length) {
				var tarr = [];
				for ( var j = 0; j < headers.length; j++) {
					tarr.push(data[j]);
				}
				lines.push(tarr);
			}
		}
		app.data = lines;
	};

	app.selected = [];
	app.exist = function(item){
		return app.selected.indexOf(item)>-1;
	}

	app.toggleSelection = function(item){
		var idx = app.selected.indexOf(item);
		if(idx > -1){
			app.selected.splice(idx, 1);
		}
		else{
			app.selected.push(item);
		}
	}
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
