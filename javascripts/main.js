"use strict";

console.log( "main.js" );

let bombCategories = require("./loader.js");

bombCategories.loadCategories()
	.then((loadedCategories) => {
			console.log( "Bomb Categories", loadedCategories );
		},
		(reject) => {
			console.log( "Categories did not load" );
		});