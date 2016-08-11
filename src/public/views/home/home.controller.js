angular
	.module('blog')
	.controller('HomeCtrl', HomeCtrl);

function HomeCtrl() {
	const vm = this;

	const articles = [{
		img: [
			"/uploaded_images/admin/volcan.jpg",
			"/uploaded_images/admin/barbecue.jpg"
		],
		titre: "Mort lors d'un barbecue près d'un volcan",
		time: "Il y a 10 min",
		contenu: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa iusto ut incidunt, nobis soluta culpa illum autem.",
		brouillon: false
	},
	{
	img: [
			"/uploaded_images/admin/volcan.jpg",
			"/uploaded_images/admin/barbecue.jpg"
		],
		titre: "Chine élection démocratique encadré par des militaires",
		time: "Il y a 12 jours",
		contenu: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa iusto ut incidunt, nobis soluta culpa illum autem.",
		brouillon: false
	}];

	vm.likes = 0;
	vm.products = articles;
	vm.increment = increment;
	vm.statusLike = true;
	vm.clikedList = true;


function switchArticle(){
	if (vm.clikedList === true) {
		vm.clikedList = false;

		return;
	}
}


	function increment(){
		if (vm.statusLike === true) {
			vm.statusLike = false;
			vm.likes += 1;

		}
		else{
			vm.statusLike = true;
			vm.likes -= 1;
		}
	};
}
