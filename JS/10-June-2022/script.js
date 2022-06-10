function checkEven(num) {
  if (num % 2 === 0) {
    console.log(num);
  } else {
    // console.log("Odd number ", num);
  }
}

var rangeStarting = 1;
var rangeEnding = 50;

// for (var counter = rangeStarting; counter <= rangeEnding; counter++) {
//   checkEven(counter);
// }

// for (var counter = 1; counter <= 50; counter++) {
//   if (counter % 2 === 0) {
//     console.log("Even number", counter);
//   }
// }

// console.log("Hello");

function printHello() {
  console.log("Hello");
}

// setTimeout(printHello, 10000);

for (var i = 0; i < 5; i++) {
  setTimeout(function printNum() {
    // SBI
    // console.log(i);
  }, 1000); // We're on lunch come after 1 second
}
// Let me go and finish other tasks, i'll come back here after 1 second and execute this code => THIS NATURE IN JS IS CALLED ASYNCHRONOUS BEHAVIOR.
/*100ms
i=1
200ms
i=2
300ms
i=3
400ms
i=4
500ms
i=5
600ms
-------------
700ms
-------------
800ms
-------------
900ms
-------------
1000ms
console.log(i); i=5
console.log(i); i=5
console.log(i); i=5
console.log(i); i=5
console.log(i); i=5
*/

var price = 100;
price = 200;
price = 300;
price = 400;
price = 500;

// console.log(price);

// var users = ['A','B','C','D','C'];

// users.push('E');

// console.log(users);

// users.pop();
// console.log(users);

// users.unshift('ZZ');
// console.log(users);

// users.shift();
// console.log(users);

// users.splice(1,1);
// console.log(users);

// users.splice(2,0,'Y');
// console.log(users);

// var isZPresent = users.includes('A');
// console.log(isZPresent);

// var indexOfC = users.indexOf('C');
// console.log(indexOfC);

// var lastIndexOfC = users.lastIndexOf('C');
// console.log(lastIndexOfC);

// var users = ['B','J','A','D','C','Z','M'];
// users.sort();

// console.log(users.reverse());

// A SORTER FN MUST RETURN 3 TYPES OF VALUES
// -1 => Negative Value,
// 0 => Return 0,
// 1 => Positive value
// function sorter(num1,num2) {
//     return num2-num1;
// }

// var prices = [450,300,150,200];
// prices.sort(sorter);
// console.log(prices);

// function sum(){

// }

// function subtract() {

// }

// for(var counter=0;counter<10;counter++) {
//     console.log(counter);
// }

var users = ["A", "B", "C", "D"];
console.log(users.indexOf("E"));

var numbers = [0, 1, 2];

/*
for(initialization;condition;increment/decrement)
*/

for (var counter = 0; counter <= 10; counter++) {
  // STEP 1
  //   if (numbers.indexOf(0) === -1) { // FALSY
  // STEP 2
  //   if (numbers.indexOf(1) === -1) { // FALSY
  // STEP 3
  //   if (numbers.indexOf(2) === -1) { // FALSY
  // STEP 4
  //   if (numbers.indexOf(3) === -1) { // TRUTHY
  if (numbers.indexOf(counter) === -1) {
    // No is not present
    console.log("Missing Number : ", counter);
  }
}
