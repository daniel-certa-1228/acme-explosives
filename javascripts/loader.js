"use strict";


let bombLoader = {};

let bombCategories = [];
let bombTypes = [];
let bombProducts = [];

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
			resolve(categories);
		});
	});
};

module.exports = bombLoader;