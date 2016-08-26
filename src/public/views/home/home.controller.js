angular
	.module('blog')
	.controller('HomeCtrl', HomeCtrl);

function HomeCtrl($http) {
	const vm = this;

	vm.articles = {};
	vm.currentArticle = {};

	vm.selectArticle = selectArticle;

	$http.get('/api/articles')
		.then(function success(res) {
			vm.articles = res.data;
			vm.currentArticle = res.data[0];
		}, function error(res) {
			vm.articles = res.data;
			vm.currentArticle = res.data[0];
		});

	function selectArticle(index) {
		vm.currentArticle = vm.articles[index];
	}

}
