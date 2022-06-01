/* To convert one data type into another
 2 ways
  1. Implicit type coersion => Automaitc
  2. Explicit type coersion => Manually
*/

// toString() => this method converts data into string type
// parseInt() => This method converts string into numbers
// EXPLICIT TYPE CONERSION
// var price = 100;

// console.log(typeof(price));
// console.log(typeof(price.toString()));


// var newPrice = '200';
// console.log(typeof(newPrice));
// console.log(typeof(parseInt(newPrice)));


// IMPLICIT TYPE COERSION

// var userName = 'John';
var userName = '100';
var price = 100;

// Here JS automatically converted a number into a string, this is called as implicit type coersion
// var result = userName + price;

// console.log(result);
// console.log(typeof(result));
// console.log(parseInt(result));

var newUserName = parseInt(userName);
console.log(newUserName + price);
