var userName;
// SYNTAX :
/*
    function functionName(parameters) {
        function body/ set of code lines
        function definition
    }
*/

// function greetUser() {
//   var userName = prompt("Enter your name");
//   alert(`Welcome, ${userName}`);
// }

// greetUser();
// greetUser();

function sum() {
  var num1 = prompt("Enter Number 1");
  var num2 = prompt("Enter Number 2");

  num1 = parseInt(num1);
  num2 = parseInt(num2);
  if (num1 >= 0) {
    console.log(num1 + num2);
  } else {
    console.log("Please enter a valid number");
  }
}

// for (var counter = 0; counter < 5; counter++) {
//   sum();
// }

function difference() {
  var num1 = prompt("Enter Number 1");
  var num2 = prompt("Enter Number 2");

  num1 = parseInt(num1);
  num2 = parseInt(num2);

  console.log(num1 - num2);
}

// difference();
// sum();

// function getPrompt() {
//     prompt('Enter your name');
// }

// getPrompt();

function calculate() {
  var operation = prompt("Enter the operation");
  switch (operation) {
    case "+":
      sum();
      break;
    case "-":
      difference();
      break;
  }
}

// calculate();

function greetUser(userName = "There") {
  console.log(`Hi, ${userName}`);
}

// var user = prompt('Enter your name');
// var user = 'John';
// greetUser();
// greetUser('Abraham');
// greetUser("Krishna");
// greetUser('ABC');

function addNumbers(num1, num2, num3 = 0) {
  // num1 and num2 are called PARAMETERS here
  console.log(num1);
  console.log(num2);
  console.log(num3);
  console.log(num1 + num2 + num3);
}

// addNumbers(5, 6); // 5 and 6 are called as ARGUMENTS
// addNumbers(10,4); // 10 and 4 are called as ARGUMENTS
// addNumbers(100,200); // 100 and 200 are called as ARGUMENTS

// console.log('Hello');
// console.log('Hi');

// WE ARE TAKING A FUNCTION AS A PARAMETER TO ANOTHER FUNCTION
function printLog(message, logger) {
  logger(message);
}

// printLog('Welcome to JavaScript course',console.log);

var price = 100; // Global scope

function caluclateDiscount() {
  var discount = 20; // Local scope
//   console.log("Discount inside the fn ", discount);
//   console.log("Price Inside the Fn ", price);
}

// console.log("Discount outside the fn ", discount);
// console.log("Price outside the fn ", price);
// caluclateDiscount();


// HOISTING

// 1. Variable Declaration
// 3. Variable Definition/ Value

// var userName; // Declaring a variable
// userName = 'John' // Defining a value

// console.log(userName);

// console.log(userName);



// var userName;
// console.log(userName);


// welcomeUser();

function welcomeUser() {
    console.log('Welcome ', uName);
    console.log('hello');
    console.log('hello');
    console.log('hello');
    console.log('hello');
    console.log('hello');
    console.log('hello');
    var uName;
}

// console.log(personName);
// var personName;


var productName = 'Mobile';
function getProductDetails() {
    console.log(productName);
    var productName;
}

getProductDetails();