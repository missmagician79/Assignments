/*
    Task : Create an array of product objects(with name and price properties). use forEach() to print each product, filter() to find items under a certain piece, and map() to create an array of formatted name-price strings. 
*/

// Answer of the question 
const products = [
    { name: "Laptop", price: 800 },
    { name: "Mouse", price: 25 },
    { name: "Keyboard", price: 45 }
];

// Using forEach() to print all products
console.log("-- All Products (forEach) --");

products.forEach(product => {
    console.log(`Item: ${product.name} - Price: $${product.price}`);
});

// Using filter() to find products under $50
console.log("\n-- Filtered Products (Price < $50) --");

const filteredProducts = products.filter(product => product.price < 50);

console.log(filteredProducts);

// Using map() to create formatted product strings
console.log("\n-- Mapped Product Tags (map) --");

const mappedProducts = products.map(
    product => `${product.name.toUpperCase()} costs $${product.price}`
);

console.log(mappedProducts);