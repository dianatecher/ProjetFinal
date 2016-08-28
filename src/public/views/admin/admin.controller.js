angular
	.module('blog')
	.controller('AdminCtrl', AdminCtrl);

function AdminCtrl($http) {
	const vm = this;

	vm.articles = [];
	vm.newArticle = {};
	vm.selectedArticles = [];
	vm.edit_mode = false;
	vm.edit_title = "";

	vm.addArticle = addArticle;
	vm.deleteArticle = deleteArticle;
	vm.editArticle = editArticle;
	vm.selectArticle = selectArticle;
	vm.submitArticle = submitArticle;
	vm.refresh = refresh;


	function selectArticle(index) {
		const article = vm.articles[index];
		if (vm.articles[index].checked === true) {
			vm.selectedArticles.push(vm.articles[index]);
		} else {
			const local_index = vm.selectedArticles.indexOf(article);
			vm.selectedArticles.splice(local_index, 1);
		}
	}

	function addArticle() {
		// Reset checkboxes and vm.selectedArticles []

		vm.edit_mode = true;
		vm.edit_title = "Add New Post";
	}

	function deleteArticle() {
		const selected_articles = vm.selectedArticles;
		vm.selectedArticles = [];
		for (let i = 0; i < selected_articles.length; ++i) {
			$http.delete(`/api/articles/${selected_articles[i]._id}`)
				.then(function success(res) {
					console.log(res);
					vm.refresh();
				}, function error(res) {
					console.log(res);
				});
		}
	}

	function editArticle() {
		// Reset checkboxes and vm.selectedArticles []

		const selected_article = vm.selectedArticles[0];
		vm.newArticle.title = selected_article.title;
		vm.newArticle.content = selected_article.content;
		vm.edit_mode = true;
		vm.edit_title = "Edit Post";

	}

	function submitArticle() {
		// Hardcoded author "admin"
		vm.newArticle.author = "admin";
		if (vm.edit_title === "Add New Post") {
			console.log(vm.newArticle);
			$http.post('/api/articles', vm.newArticle)
				.then(function success(res) {
					vm.myForm.$setPristine();
					vm.myForm.$setValidity();
					vm.myForm.$setUntouched();

					vm.refresh();
					vm.edit_mode = false;
					vm.newArticle = {};

				}, function error(res) {
					console.log(res);
				});
		} else if (vm.edit_title === "Edit Post") {
			console.log('Submit edit');
			$http.put(`/api/articles/${vm.selectedArticles[0]._id}`, vm.newArticle)
				.then(function success(res) {
					vm.edit_mode = false;
					vm.newArticle = {};
					vm.refresh();
				}, function error(res) {
					console.log(res);
				});
		}
	}

	function refresh() {
		$http.get('/api/articles')
			.then(function success(res) {
				vm.articles = res.data;
			}, function error(res) {
				vm.articles = res.data;
			});
	}

	refresh();

}
