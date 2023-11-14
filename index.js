// Question:-Solve the problem with Javascript  to find the maximum between two numbers. (Hint: take 2 variables and find the maximum number between them)

// Answer:-

// function maxvalue(num1,num2){
//     return Math.max(num1,num2)
// };

// const number1 = 15;
// const number2 = 27;

// const MaximumValue = maxvalue(number1,number2)

// console.log("The Maximum Value is :", MaximumValue);

// --------------------------------------------------------------------------------------


// Question:-Solve the problem with Javascript  to check whether a number is negative, positive or zero.

// Answer:-

// function checkNumber(number) {
//     if (number > 0) {
//         console.log(`${number} is a positive number.`);
//     } else if (number < 0) {
//         console.log(`${number} is a negative number.`);
//     } else {
//         console.log(`${number} is zero.`);
//     }
// }

// const num = 7;
// checkNumber(num);

// --------------------------------------------------------------------------------------
// Question:-Solve the problem with Javascript  to check whether a number is divisible by 10 or not. (take single variable and check using if esle condition)

// Answer:-
// function checkDivisibilityByTen(number) {
//     if (number % 10 === 0) {
//         console.log(`${number} is divisible by 10.`);
//     } else {
//         console.log(`${number} is not divisible by 10.`);
//     }
// }

// const num = 50;
// checkDivisibilityByTen(num);

// --------------------------------------------------------------------------------------
// Question:-Solve the problem with Javascript  to check whether a number is even or odd.
// Answer:-

// function checkEvenOrOdd(number) {
//     if (number % 2 === 0) {
//         console.log(`${number} is an even number.`);
//     } else {
//         console.log(`${number} is an odd number.`);
//     }
// }


// const num = 7;
// checkEvenOrOdd(num);
// --------------------------------------------------------------------------------------

// Question:-Solve the problem with Javascript  to check whether a character is in the alphabet or not
// Answer:-
// function checkAlphabet(character) {
//     if ((character >= 'a' && character <= 'z') || (character >= 'A' && character <= 'Z')) {
//         console.log(`'${character}' is a character in the alphabet.`);
//     } else {
//         console.log(`'${character}' is not a character in the alphabet.`);
//     }
// }


// const char = '25';
// checkAlphabet(char);
// --------------------------------------------------------------------------------------
// Question:-Solve the problem with Javascript  to check whether the temperature is hot, cold or normal. (30 <=  is hot, 25 >= is cold , anyother value is normal)

// Answer:-

// function checkTemperature(temperature) {
//     if (temperature >= 30) {
//         return "Hot";
//     } else if (temperature <= 25) {
//         return "Cold";
//     } else {
//         return "Normal";
//     }
// }

// let temperature1 = 32; 
// let temperature2 = 20; 
// let temperature3 = 28; 

// console.log("Temperature 1 is:", checkTemperature(temperature1));
// console.log("Temperature 2 is:", checkTemperature(temperature2));
// console.log("Temperature 3 is:", checkTemperature(temperature3));

// --------------------------------------------------------------------------------------
// Question:-Solve the problem with Javascript  to find a maximum between three numbers. (Hint: take 3 variables and find the maximum number between them use logical and operator for that)

// Answer:-
// function findMaximum(num1, num2, num3) {
//     if (num1 >= num2 && num1 >= num3) {
//         return num1;
//     }
//     else if (num2 >= num1 && num2 >= num3) {
//         return num2;
//     }
//     else {
//         return num3;
//     }
// }

// let num1 = 10;
// let num2 = 25;
// let num3 = 15;

// console.log("Maximum number is:", findMaximum(num1, num2, num3));

// --------------------------------------------------------------------------------------

// Question:-Write a JavaScript expression using the ternary operator that checks if a number x is even or odd. Store the result in a variable and print “Even Number” or “Odd Number”.

// Answer:-
// let x = 7; 

// let result = (x % 2 === 0) ? "Even Number" : "Odd Number";

// console.log(result);
// --------------------------------------------------------------------------------------
// Question:-Use the logical AND operator to determine if two variables, numOne and numTwo, are both greater than 30. Print a message to the console reflecting the result

// Answer:-

// let numOne = 35;
// let numTwo = 40; 

// if (numOne > 30 && numTwo > 30) {
//     console.log("Both numOne and numTwo are greater than 30");
// } else {
//     console.log("At least one of numOne or numTwo is not greater than 30");
// }
// --------------------------------------------------------------------------------------
// Question:-Write a JavaScript program that uses if-else statements combined with logical operators. The program should check if a person’s age is between 13 and 19. If so, print “Teenager”. Otherwise, print “Not a teenager”.

// Answer:-

// let age = 16;

// if (age >= 13 && age <= 19) {
//     console.log("Teenager");
// } else {
//     console.log("Not a teenager");
// }
