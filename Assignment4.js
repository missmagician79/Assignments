/*
    Task : Write a for loop to print a multiplication table up to 5. Use a while loop with a break statement to find the first number greater than 10 that is divisible by 6, and do...while loop that skips numbers using continue.
*/

// Answer of the question
// Multiplication Table of 5
console.log("-- Multiplication Table of 5 --");

for (let i = 1; i <= 5; i++) {
    console.log(`5 x ${i} = ${5 * i}`);
}

// First number > 10 divisible by 6
console.log("\n-- First number > 10 divisible by 6 --");

let num = 11;

while (true) {
    if (num > 10 && num % 6 === 0) {
        console.log(`Found: ${num}`);
        break;
    }
    num++;
}

// do...while loop using continue
let count = 0;

do {
    count++;

    if (count === 3) {
        continue;
    }

    console.log(count);

} while (count < 5);