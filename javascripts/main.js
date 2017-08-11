"use strict";

console.log( "main.js" );

let bombs = require("./loader.js"),
	Handlebars = require('hbsfy/runtime'),
	productTemplate = require('../templates/product-template.hbs');

let outputDiv = document.getElementById("product-div");

let categories = bombs.getCategories();
console.log( "categories", categories );
let types = bombs.getTypes();
console.log( "types", types );
let products = bombs.getProducts();
console.log( "products", products );


let mainSelect = document.getElementById("category-select");
mainSelect.addEventListener("change", (event) => {

	if (mainSelect.value === "0") {
		let value = parseInt(mainSelect.value);
		// console.log( "select event 0" );
		outputDiv.classList.remove('hidden');
		// console.log( "categories[0]", categories[0].categories[value] );
		let fireworksCat = categories[0].categories[value];
		// console.log( "fireworksCat.name", fireworksCat.name );
		// console.log( "fireworksCat.id", fireworksCat.id );

		let fireworksTypes = types[0];
		
		for (let i = 0; i < fireworksTypes.types.length; i++) {

			if (types[0].types[i].category === value) {
				console.log( "Types", types[0].types[i] );
			}
			
		}

		let fireworksProducts = products[0].products;
		console.log( "fireworksProducts", fireworksProducts );

		for (let i = 0; i < fireworksProducts.length; i++) {
			console.log( "test products", fireworksProducts[i] );
		}

		
	}

	if (mainSelect.value === "1") {
		let value = parseInt(mainSelect.value);
		console.log( "select event 1" );
		outputDiv.classList.remove('hidden');
		console.log( "categories[0]", categories[0].categories[value] );
	}
	
});
 

bombs.loadCategories()
	.then
		((loadedCategories) => {
			// console.log( "Bomb Categories", loadedCategories );
			return bombs.loadTypes();
		},
		(reject) => {
			console.log( "Categories did not load" );
		}).then
		((loadedTypes) => {
			// console.log( "Bomb Types", loadedTypes );
			return bombs.loadProducts();
		},
		(reject) => {
			console.log( "Types did not load" );
		}).then((loadedProducts) => {
			// console.log( "Bomb Products", loadedProducts );
		},
		(reject) => {
			console.log( "Products did not load" );
		});
