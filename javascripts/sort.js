"use strict";

var sort = {};

let bombs = require("./loader.js");
sort.productArray = []; //Main Output Array
sort.categoryArray = [];
//Load Products, Types,and Categories 
bombs.loadProducts()
	.then
		((loadedProducts) => {
			// console.log( "loadedProducts", loadedProducts );
			let products = (Object.values(loadedProducts))[0];
			for (let i = 0; i < products.length; i++) {
				sort.productArray.push(Object.values(products[i])[0]);
			}
			return bombs.loadTypes();
		},
		(reject) => {
			console.log( "Products did not load" );
		}).then
		((loadedTypes) => {
			let bomb_types = (Object.values(loadedTypes)[0]);
			for (let i = 0; i < sort.productArray.length; i++) {
				for (let j = 0; j < bomb_types.length; j++) {
					if (sort.productArray[i].type === bomb_types[j].id) {
						sort.productArray[i].type_name = bomb_types[j].name;
						sort.productArray[i].category = bomb_types[j].category;
					}
				}
			}
			
			return bombs.loadCategories();
		},
		(reject) => {
			console.log( "Types did not load" );
		}).then((loadedCategories) => {
			let categories = (Object.values(loadedCategories)[0]);
			for (let i = 0; i < categories.length; i++) {
				sort.categoryArray.push(categories[i]);
			}
			
			for (let i = 0; i < sort.productArray.length; i++) {
				for (let j = 0; j < categories.length; j++) {
					if (sort.productArray[i].category === categories[j].id) {
						sort.productArray[i].category_name = categories[j].name;
					}
				}
			}
			// console.log( "productArray", sort.productArray );
		},
		(reject) => {
			console.log( "Categories did not load" );
		});

module.exports = sort;

