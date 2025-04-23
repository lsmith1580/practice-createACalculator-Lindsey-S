/*
Scenario: 

You are building a calculator for an online math game. The
calculator must include functionality to perform the following:

● Absolute Value Calculation: Given any number, return its absolute
value.

● Power Calculation: Calculate and return the value of a base raised to
a specific power.

● Square Root Finder: Calculate the square root of a number.

● Maximum and Minimum Finder: From a given set of numbers,
determine the largest and smallest values.

● Random Number Generator: Generate a random integer within a
specified range.

● Custom Rounding: Round a number to a specified number of decimal
places.
*/

//Step-by-Step Tasks:
//1. Write a function for each operation listed above using the Math
//module.

function calculateAbsoluteValue(num) {
    return Math.abs(num);
}

function calculatePower(base, power) {
    return Math.pow(base, power);
}

function findSquareRoot(num) {
    return Math.sqrt(num);
}

function findMaxAndMin(numbers) {
    return {
        max: Math.max(...numbers),
        min: Math.min(...numbers)
    };
}

function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function roundToDecPlace(num, dec) {
    let factor = 10**dec
    return Math.round(num * factor) / factor
}



//2. Test each function with sample inputs to ensure it works as intended.
/*
console.log(calculateAbsoluteValue(-5));
console.log(calculateAbsoluteValue(10));
console.log(calculateAbsoluteValue(-27));

console.log(calculatePower(2, 2));
console.log(calculatePower(5, 1));
console.log(calculatePower(3, 3));

console.log(findSquareRoot(4));
console.log(findSquareRoot(36));
console.log(findSquareRoot(21));

console.log(findMaxAndMin([3, 14, 34, 22, 8]));
console.log(findMaxAndMin([56, 18, 2, 67, 10]));
console.log(findMaxAndMin([12, 7, 72, 29, 5]));

console.log(generateRandomNumber(0, 10));
console.log(generateRandomNumber(20, 100));
console.log(generateRandomNumber(7, 15));

console.log(roundToDecPlace(0.12345, 2));
console.log(roundToDecPlace(15.4789, 4));
console.log(roundToDecPlace(7.79723874, 3));
*/

//3. Combine the individual functions into a single "calculator" program
//where the user can select an operation and input the required values.
/*
const readline = require('readline-sync');

console.log("Welcome to your personal calculator program!");
const choice = readline.question("Choose a function you would like to perform: \n1. Calculate Absolute Value\n2. Calculate Power\n3. Find the Square Root\n4. Find the Maximum and Minimum Values\n5. Generate a Random Number\n6. Custom Rounding\nEnter number: ");

if (choice === "1") {
    let absValueNum = Number(readline.question("Enter a number: "));
    console.log("Absolute Value: " , calculateAbsoluteValue(absValueNum));
} else if (choice === "2") {
    let baseNum = Number(readline.question("Enter a base number: "));
    let powerNum = Number(readline.question("Enter a power: "));
    console.log("Result: ", calculatePower(baseNum, powerNum));
} else if (choice === "3") {
    let sqrtNum = Number(readline.question("Enter a number: "));
    console.log("Square Root: ", findSquareRoot(sqrtNum));
} else if (choice === "4") {
    let maxAndMinValues = readline.question("Provide at least two numbers separated by commas: ");
    let arr = maxAndMinValues.split(',').map(Number);
    console.log("Max and Min: ", findMaxAndMin(arr));
} else if (choice === "5") {
    let min = Number(readline.question("Provide a minimum value: "));
    let max = Number(readline.question("Provide a maximum value: "));
    console.log("Result: ", generateRandomNumber(min, max));
} else if (choice === "6") {
    let num = Number(readline.question("Enter a number: "));
    let dec = Number(readline.question("Enter the number of decimal places: "));
    console.log("Result: ", roundToDecPlace(num, dec));
}else {
    throw new Error("Invalid input, please try again.");
} 
*/
//4. Test the calculator by performing the following:
//● Find the absolute value of -45.67.
//● Raise 5 to the power of 3.
//● Calculate the square root of 144.
//● Determine the largest and smallest values from [3, 78, -12,
//0.5, 27].
//● Generate a random number between 1 and 50.
//1
//● Round 23.67891 to 2 decimal places.

console.log(calculateAbsoluteValue(-45.67));
console.log(calculatePower(5, 3));
console.log(findSquareRoot(144));
console.log(findMaxAndMin([3, 78, -12, 0.5, 27]));
console.log(generateRandomNumber(1, 50));
console.log(roundToDecPlace(23.67891, 2));
