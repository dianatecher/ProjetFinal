angular
	.module('blog')
	.controller('HomeCtrl', HomeCtrl);

function HomeCtrl() {
	const vm = this;

	const article = {
		img: "",
		titre: "Mort lors d'un barbecue près d'un volcan",
		time: "Il y a 10 min",
		contenu: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa iusto ut incidunt, nobis soluta culpa illum autem."
	};

	vm.product = article;

}



