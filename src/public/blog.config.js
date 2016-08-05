'use strict';

import style from './style.sass';

angular
	.module('blog')
	.config(function ($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: './views/home.html',
				controller: 'HomeCtrl'
			});
	});
