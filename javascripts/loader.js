"use strict";


let bombLoader = {};

let bombCategories = [];
// console.log( "bombCategories", bombCategories );
let bombTypes = [];
// console.log( "bombTypes", bombTypes );
let bombProducts = [];
// console.log( "bombProducts", bombProducts );

bombLoader.getCategories = () => {
	return bombCategories;
};

bombLoader.getTypes = () => {
	return bombTypes;
};

bombLoader.getProducts = () => {
	return bombProducts;
};

bombLoader.loadCategories = () => {
	return new Promise(function(resolve, reject){
		let categoryLoader = new XMLHttpRequest();
		categoryLoader.open("GET", "json/categories.json");
		categoryLoader.send();

		categoryLoader.addEventListener("load", (event) => {
			let categories = JSON.parse(event.target.responseText);
			bombCategories.push(categories);
			resolve(categories);
			
		});
	});
};

bombLoader.loadTypes = () => {
	return new Promise(function(resolve,reject){
		let typeLoader = new XMLHttpRequest();
		typeLoader.open("GET", "json/types.json");
		typeLoader.send();

		typeLoader.addEventListener("load", (event) => {
			let types = JSON.parse(event.target.responseText);
			bombTypes.push(types);
			resolve(types);
		});
	});
};

bombLoader.loadProducts = () => {
	return new Promise(function(resolve, reject){
		let productLoader = new XMLHttpRequest();
		productLoader.open("GET", "json/products.json");
		productLoader.send();

		productLoader.addEventListener("load", (event) => {
			let products = JSON.parse(event.target.responseText);
			bombProducts.push(products);
			resolve(products);
		});
	});
};

module.exports = bombLoader;