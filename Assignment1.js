/*
    Task : Declare variables using var, let and const to store a user's name, age, employement status and a list of skills. Use typeof to check each variable's type and log them to the console.
*/

// Answer of the question

var name = "Alice";
let age = 25;
const isEmployed = true;
const skills = ["HTML", "CSS", "JavaScript"];

console.log("Name:", name, "(Type:", typeof name + ")");
console.log("Age:", age, "(Type:", typeof age + ")");
console.log("Is Employed:", isEmployed, "(Type:", typeof isEmployed + ")");
console.log("Skills:", JSON.stringify(skills), "(Type:", typeof skills + ")");
