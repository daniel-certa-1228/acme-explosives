"use strict";

let sort = require("./sort.js");

var output = {};

let outputDiv = document.getElementById("product-div");
let mainSelect = document.getElementById("category-select");

mainSelect.addEventListener("change", (event) => {
	outputDiv.innerHTML = "";
	outputDiv.classList.remove('hidden');
	let categoryValue = parseInt(mainSelect.value);
	let displayedCategory = sort.categoryArray[categoryValue].name;

	let output = `
	<header class="text-center" id="product-header">
		<h2>ACME ${displayedCategory}</h2>
	</header>
	`;

	sort.productArray.forEach((product) => {
		let product_name = product.name;
		let description = product.description;
		let type = product.type_name;
		let category = product.category_name;
		if (categoryValue === product.category) {
			output += `
			<div class="col-sm-4 card">
			<h4 class="card-header">${product_name}</h4>
			<p>${description}</p>
			<p class="subscript">Procuct Type-${type}</p>
			<p class="subscript">Product Category-${category}</p>
			</div>`;
		}
	});
	outputDiv.innerHTML += output;
});
