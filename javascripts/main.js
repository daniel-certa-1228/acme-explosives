"use strict";

console.log( "main.js" );

let bombs = require("./loader.js"),
	Handlebars = require('hbsfy/runtime'),
	productTemplate = require('../templates/product-template.hbs');

	// let outputArray =[];

	let productArray = [];
	let typeArray =[];
	let categoryArray = [];
//Load Products, Types,and Categories 
bombs.loadProducts()
	.then
		((loadedProducts) => {
			console.log( "loadedProducts", loadedProducts );
			productArray.push(loadedProducts);
			console.log( "productArray", productArray );
			return bombs.loadTypes();
		},
		(reject) => {
			console.log( "Products did not load" );
		}).then
		((loadedTypes) => {
			console.log( "loadedTypes", loadedTypes );
			typeArray.push(loadedTypes);
			console.log( "typeArray", typeArray );
			return bombs.loadCategories();
		},
		(reject) => {
			console.log( "Types did not load" );
		}).then((loadedCategories) => {
			console.log( "loadedCategories", loadedCategories );
			// for (let i = 0; i < loadedCategories.categories.length; i++) {
				categoryArray.push(loadedCategories);
			// }
			
			console.log( "categoryArray", categoryArray );
		},
		(reject) => {
			console.log( "Categories did not load" );
		});

let outputDiv = document.getElementById("product-div");


let mainSelect = document.getElementById("category-select");
mainSelect.addEventListener("change", (event) => {
	outputDiv.classList.remove('hidden');
	
		if (mainSelect.value === "0") {
			let value = parseInt(mainSelect.value);
			console.log( "select event 0", value );
			let fireworksCat = categoryArray[0].categories[value];
			console.log( "fireworksCat.name", fireworksCat.name );
			console.log( "fireworksCat.id", fireworksCat.id );
		}

		if (mainSelect.value === "1") {
			let value = parseInt(mainSelect.value);
			console.log( "select event 1", value);
		}
});
 



		// console.log( "categories[0]", categories[0].categories[value] );
	// 	let fireworksCat = categories[0].categories[value];
	// 	// console.log( "fireworksCat.name", fireworksCat.name );
	// 	// console.log( "fireworksCat.id", fireworksCat.id );

	// 	let fireworksTypes = types[0];
		
	// 	for (let i = 0; i < fireworksTypes.types.length; i++) {

	// 		if (types[0].types[i].category === value) {
	// 			console.log( "Types", types[0].types[i] );
	// 		}
			
	// 	}

	// 	let fireworksProducts = products[0].products;
	// 	console.log( "fireworksProducts", fireworksProducts );

	// 	for (let i = 0; i < fireworksProducts.length; i++) {
	// 		console.log( "test products", fireworksProducts[i] );
	// 	}

		
	


	
