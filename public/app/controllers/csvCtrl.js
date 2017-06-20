angular.module('csvController', [])

.controller('csvCtrl', function($scope, $http) {
	$scope.readCSV = function() {
		// http get request to read CSV file content
		$http.get('/assets/students.csv').then(function(response)
			{
				console.log("got csv");
				$scope.processData(response.data);
			});
	};
	$scope.processData = function(allText) {
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
		$scope.data = lines;
	};
});
