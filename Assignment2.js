/*
    Task : Use prompt() to capture a user's bill amount and tip percentage. perform explicit type conversion (e.g. using Number()), compute the total using arithmetic and assignment operators, and log a formatted string.
*/

// Answer of the question
let billAmount = Number(prompt("Enter the bill amount:"));
let tipPercentage = Number(prompt("Enter the tip percentage:"));

let tip = billAmount * (tipPercentage / 100);
let totalAmount = billAmount;

totalAmount += tip;

console.log(`Subtotal: $${billAmount}`);
console.log(`Tip Percentage: ${tipPercentage}%`);
console.log(`Calculated Tip: $${tip}`);
console.log(`Total Amount to Pay: $${totalAmount}`);