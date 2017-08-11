"use strict";

console.log( "main.js" );

let bombCategories = require("./loader.js");
let bombTypes = require("./loader.js");
let bombProducts = require("./loader.js");

bombCategories.loadCategories()
	.then((loadedCategories) => {
			console.log( "Bomb Categories", loadedCategories );
		},
		(reject) => {
			console.log( "Categories did not load" );
		});

bombTypes.loadTypes()
	.then((loadedTypes) => {
		console.log( "Bomb Types", loadedTypes );
	},
	(reject) => {
		console.log( "Types did not load" );
	});

bombProducts.loadProducts()
	.then((loadedProducts) => {
		console.log( "Bomb Products", loadedProducts );
	},
	(reject) => {
		console.log( "Products did not load" );
	});
