'use strict';

import style from './style.sass';

angular
	.module('blog')
	.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: './views/home.html',
		controller: 'HomeCtrl'
	})
	.when('/login', {
		templateUrl: './views/login.html',
		controller: 'LoginCtrl'
	})
	.when('/signup', {
		templateUrl: './views/signup.html',
		controller: 'SignupCtrl'
	});
});
