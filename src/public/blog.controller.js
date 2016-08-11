angular
	.module('blog')
	.controller('MainCtrl', MainCtrl);

function MainCtrl($http) {
	// vm for ViewModel, we won't use vm
	const vm = this;

	// myTest is for ngShow
	vm.myTest = false;

	//quelles fonctions existent
	vm.refresh = refresh;
	vm.addItem = addItem;
	vm.edit = edit;
	vm.update =  update;
	vm.remove = remove;
	vm.clear = clear;

	vm.refresh();//idem que refresh();

	function  refresh() {
		$http.get('/itemlist/').success(function (response) {
			console.log("I got the data I requested");
			vm.itemlist = response;
			vm.item = ""; //it will clear input boxes after we call refresh function
		});
	}


	//CREATE -- Object.keys(vm.item).length) : number of properties / values in vm.item
	function addItem() {
		console.log(vm.item);//OK : the function will receive the data from the input boxes

		if (Object.keys(vm.item).length == 3) {
			console.log("longueur : "+ Object.keys(vm.item).length);
			$http.post('/itemlist/', vm.item).success(function (response) {
				console.log(response);
				vm.refresh();
				//console.log(getDateAndTime());
			}); //this will send data to the server
		} else {
			console.log("else longueur : "+ Object.keys(vm.item).length);
			alert("all fields must be filled :-)");
		}
	};

		//DELETEremove(contact._id)
	function remove(id) {
		console.log('I want to remove this id : '+id);
		const r = confirm("Really ?");
		if (r === true) {
			 $http.delete('/itemlist/' + id).success(function (response) {
				 console.log(response);
				 vm.refresh();
			 });
		}
	};

	//clear fields
	function clear() {
		vm.item = "";
		vm.myTest = false;
	}


	/* UPDATE */
	//edit
	function edit(id) {
		console.log('I want to edit this id : '+id);
		vm.myTest = true;//update button is shown
		$http.get('/itemlist/' + id).success(function (response) {
			 vm.item = response; //it will put the response into the input boxeswith ng-model contact
		})
	};

	//update
	function update() {
		//console.log(vm.item._id);
		//content inside input boxeswill be sent to the server
		vm.myTest = false;
		$http.put('/itemlist/'+ vm.item._id, vm.item).success(function (response) {
				vm.refresh();
		})
	};

}
