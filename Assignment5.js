/*
    Task : Define a standard function and an arrow function that accept parameters(e.g., length and width) with default values to calculate the area of a rectangle. Demonstrate function and block scope limits.
*/

// Answer of the question 
// Standard function with default parameters
function rectangleArea(length = 5, width = 4) {
    return length * width;
}

console.log(
    "Standard Function Area (Default 5x4):",
    rectangleArea()
);

// Arrow function with default parameters
const calculateArea = (length = 5, width = 4) => length * width;

console.log(
    "Arrow Function Area (Custom 10x3):",
    calculateArea(10, 3)
);

// Demonstrating block scope
{
    let blockVar = "I am inside the block";
    console.log(blockVar);
}

// Accessing block-scoped variable outside the block
try {
    console.log(blockVar);
} catch (error) {
    console.log(`Scope Test Error: ${error}`);
}