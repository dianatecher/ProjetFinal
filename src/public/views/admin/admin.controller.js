angular
	.module('blog')
	.controller('AdminCtrl', AdminCtrl);

function AdminCtrl() {
	const vm = this;

	vm.createEdit = "Créer un article";

	vm.removeDb = removeDb;

	vm.editDb = editDb;

	vm.addDb = addDb;

	vm.articles = [
				{
					titre: "Ceci est un titre",
					description: "Ceci est une description",
					content: "ceci est le contenu de mon article",
					save: false
				},
				{
					titre: "titre 2",
					description: "description 2",
					content: "contenu 2",
					save: false
				},
				{
					titre: "titre 3",
					description: "description 3",
					content: "contenu 3",
					save: false
				},
				{
					titre: "titre 4",
					description: "description 4",
					content: "contenu 4",
					save: false
				},
				{
					titre: "titre 5",
					description: "description 5",
					content: "contenu 5",
					save: false
				},
	];

	function removeDb(article){
		console.log('debug');
		console.log(article);
		vm.articles.splice(vm.articles.indexOf(article), 1);
	}

	function editDb(article){}

	function addDb(article) {
				console.log('test');
				console.log(article);
				var title = vm.title;

				vm.articles.push({
					titre: vm.title,
					description: vm.descrip,
					content: vm.contenu,
					save: false
					});

				vm.title = '';
				vm.descrip = '';
				vm.contenu = '';
			};

	function saveDb(article) {
				console.log('test');
				console.log(article);
				var title = vm.title;

				vm.articles.push({
					titre: vm.title,
					description: vm.descrip,
					content: vm.contenu
					});

				vm.title = '';
				vm.descrip = '';
				vm.contenu = '';
			};

}
