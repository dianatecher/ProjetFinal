angular
	.module('blog')
	.controller('AdminCtrl', AdminCtrl);

function AdminCtrl($http) {
	const vm = this;

	vm.articles = {};
	vm.selectedArticles = [];

	vm.selectArticle = selectArticle;

	$http.get('/api/articles')
		.then(function success(res) {
			vm.articles = res.data;
		}, function error(res) {
			vm.articles = res.data;
		});

	function selectArticle(index) {
		const article = vm.articles[index];
		if (vm.articles[index].checked === true) {
			vm.selectedArticles.push(vm.articles[index]);
		} else {
			const local_index = vm.selectedArticles.indexOf(article);
			vm.selectedArticles.splice(local_index, 1);
		}
	}

}
