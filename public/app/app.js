var userApp = angular.module('userApp', ['appRoute', 'userControllers', 'userServices', 'mainController', 'authServices'])

.config(function($httpProvider){
	//configuring app to all http requests
	$httpProvider.interceptors.push('AuthInterceptors');
});
