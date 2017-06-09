var appRoute = angular.module('appRoute', ['ngRoute'])

.config(function($routeProvider, $locationProvider) {

  $routeProvider // Create routes

  // Home Route    
  .when('/', {
    templateUrl: 'app/views/pages/faculty_login.html',

  })
  
    // Login Route            
  .when('/faculty_login', {
    templateUrl: 'app/views/pages/faculty_login.html'
  })

  //check_load route
  .when('/check_load', {
  	templateUrl: 'app/views/pages/check_load.html'
  })

  //register route
  .when('/register', {
    templateUrl: 'app/views/users/register.html',
    controller: 'regCtrl',
    controllerAs: 'registerFaculty'
  })

  // "catch all" to redirect to home page            
  .otherwise({ redirectTo: '/' });

  // Required for no base (remove '#' from address bar)
  $locationProvider.html5Mode({ enabled: true, requireBase: false });
});


