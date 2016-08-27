'use strict';

import style from './style.sass';

angular
	.module('blog')
	.config(function ($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: './views/home.html',
				controller: 'HomeCtrl',
				controllerAs: 'home'
			})
			.when('/login', {
				templateUrl: './views/login.html',
				controller: 'LoginCtrl',
				controllerAs: 'login'
			})
			.when('/signup', {
				templateUrl: './views/signup.html',
				controller: 'SignupCtrl',
				controllerAs: 'signup'
			})
			.when('/users/admin', {
				templateUrl: './views/admin.html',
				controller: 'AdminCtrl',
				controllerAs: 'admin'
			});
	});
