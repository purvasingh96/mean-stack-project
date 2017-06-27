var appRoute = angular.module('appRoute', ['ngRoute'])

.config(function($routeProvider, $locationProvider) {

  $routeProvider // Create routes

  // Home Route    
  .when('/', {
    templateUrl: 'app/views/users/register.html'

  })
  .when('/logout', {
    templateUrl: 'app/views/users/logout.html'
  })
  .when('/management', {
    templateUrl: 'app/views/pages/management.html',
    controller: 'managementCtrl',
    controllerAs: 'management'
  })
    // Login Route            
  .when('/faculty_login', {
    templateUrl: 'app/views/users/faculty_login.html'
  })

  //check_load route
  .when('/check_load', {
    templateUrl: 'app/views/pages/check_load.html',
    controller: 'csvCtrl',
    
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


