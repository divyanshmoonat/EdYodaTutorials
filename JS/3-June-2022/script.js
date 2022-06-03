// console.log("Hello from Revision class");

// Ternary Operator  ?
// expression ? <truthy-block> : <falsy-block>

var age = 25;

// if(age >= 18) {
//     console.log("You can give a vote");
// } else {
//     console.log("You can not give a vote");
// }

// age > 18
//   ? console.log("You can give a vote")
//   : console.log("You can not give a vote");

// ONLY IF PART IS A VALID PEICE OF CODE
// if (age > 18) {
//   console.log("Welcome to the club");
// }

// ONLY ELSE PART WILL GIVE ERROR
// else {

// }

// console.log("" ? true : false);

// 0 => false
// 1 => true

// var price = "12 3John";
// var price = "321false";

// var priceNum = Number(price); // Number() converts strings as well as booleans into number

// var priceNum2 = parseInt(price); // parseInt() only converts strings into number

// console.log(priceNum, priceNum2);

// var value = Boolean(undefined);
// // var value = Boolean(231);

// console.log(value, typeof(value));

// console.log(null === null);
// console.log(undefined === undefined);

// console.log(null == undefined);
// console.log(null === undefined);

// ! => NOT Operator (Negation)

// var isValid = false; // Boolean
// var isValid = "false"; // String , truthy

// var isValid = 0;
// console.log(!!isValid);

// Q. Given the values of x, y and z, find the value of expression.
// var x = true;
// var y = 20;
// var z = "John";

// var expression = z || (!x && y);

// // SOLUTION STARTS HERE
// // Step 1
// var exprssion = "John" || (!true && 20);

// // Step 2
// var expression = "John" || (false && 20);

// // Step 3
// var expression = "John" || (false && true);

// // Step 4
// var expression = "John" || false;

// // Step 5
// var expression = true || false;

// // Step 6
// var expression = true;
// // FINAL ANSWER


var x = "John";
var y = 10;
var z = false;

// Order of precedence of logical operator : 
// 1. ! => Not
// 2. && => And
// 3. || => Or

var expression = !x || y && !z;

// Step 1
expression = !"John" || 10 && !false;

// Step 2
expression = !true || 10 && !false;


// Step 3
expression = false || true && true;

// Step 4
expression = false || true;

// Step 5
expression = true;



// String methods

// var message = "    There are a million of features that can be developed with the help of JavaScript, and JavaScript runs on frontend as well as on backed.     ";

// console.log(message,"Hello")
// console.log(message.trimEnd(), "Hello");
// console.log(message.trimStart(), "Hello");
// console.log(message.trim(), "Hello");


// console.log(message.replace('JavaScript','HELLO'));
// console.log(message.replaceAll('JavaScript','HELLO'));
// console.log(message.replaceAll('JavaScript',''));

// console.log(message.toLowerCase().includes('javascript'));


// var email = 'john@gmail.com';
// if(email.endsWith('@gmail.com')) {
//     console.log("You are welcome");
// } else {
//     console.log("We accept only Gmail Email IDs");
// }
// startsWithd() => It matches if the string starts with a particular word

// var price = 100121.12727423234;
// // console.log(typeof(price.toFixed(2)));
// console.log(price.toPrecision(4));

// 1.001e+5 => 1.001 x 10 ^5 => 100100



var num1 = prompt("Enter first number");
var num2 = prompt("Enter second number");

alert(parseInt(num1) + parseInt(num2));


// console.log(parseInt(num1) + parseInt(num2));
