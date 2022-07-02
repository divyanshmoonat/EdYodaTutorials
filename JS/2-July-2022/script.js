// console.log("Revision class");

var userName = "John";
var userName = "Jane"; // Re declaration of a variable
userName = "Jane"; // Value assignment

// console.log(userName);


// let email = "john@example.com";
// let email = 'abraham@example.com';
// // email = 'abraham@example.com'; // Value assignment
// console.log(email);

// const price = 100;
// // const price = 200; // Re declaration
// price = 200; // Value assignment

// console.log(price);


// var let and const are different in scope as well

// console.log(age);

// if(true) {
//     var age = 20;
//     console.log(age);
// }

// console.log(age);

// console.log(age);

// if(true) {
//     let age = 20;
//     console.log(age);
// }

// console.log(age);


// console.log(age);

// if(true) {
//     const age = 20;
//     console.log(age);
// }

// console.log(age);


// let users = ["John", "Jane"];
// // users = ["Abraham", "Jack"];
// users.push("Abraham");
// users.push("Jack");

// console.log(users);

// const users = ["John", "Jane"];
// // users = ["Abraham", "Jack"];
// users.push("Abraham");
// users.push("Jack");

// console.log(users);


// let welcomeMsg = function () {
//     console.log("Welcome to let variable");
// }; // 0ffx2

// welcomeMsg = function () {
//     console.log("New Welcome to let variable");
// } // 0aa1x

// welcomeMsg();

// const welcomeMsg = function () {
//     console.log("Welcome to let variable");
// }; // 0ffx2

// welcomeMsg = function () {
//     console.log("New Welcome to let variable");
// } // 0aa1x

// welcomeMsg();


// const age = 20; //00xf
// age = 25; //0aax1


// function understandingVariables () {
//     var fName = "John";
//     let lName = "Doe";
//     const email = "john@example.com";

//     console.log(fName);
//     console.log(lName);
//     console.log(email);
// }

// understandingVariables();


// console.log(fName);
// console.log(lName);



// var age = 10;
// console.log(age);
// if(true) {
//     age = 15;
//     console.log(age);
// }
// console.log(age);



// let age = 10;
// console.log(age);
// if(true) {
//     age = 15;
//     console.log(age);
// }
// console.log(age);


// const age = 10;
// console.log(age);
// if(true) {
//     age = 15;
//     console.log(age);
// }
// console.log(age);


// var age = 10;
// console.log(age);
// if(true) {
//     var age = 15;
//     console.log(age);
// }
// console.log(age);


// let age = 10;
// console.log(age);

// if(true) {
//     let age = 15;
//     console.log(age);
// }

// console.log(age);


// for(var counter = 1;counter<=5;counter++) {
//     setTimeout(function(){
//         console.log(counter);
//         // console.log("Hello");
//     },5000);
// }


// for(let counter = 1;counter<=5;counter++) {
//     setTimeout(function(){
//         console.log(counter);
//         // console.log("Hello");
//     },5000);
// }


// for(let counter = 0;counter<=5;counter++) {
//     // setTimeout(function(){
//     //     console.log(counter);
//     //     // console.log("Hello");
//     // },5000);
//     console.log("Hello");
//     // counter++;
// }

let user = {
    name: "John"
};
console.log(user);
console.log(user.hasOwnProperty('address'));
// Object.prototype.

Array.prototype.sum = function (num1,num2) {
    // console.log(num1+num2);
    return num1+num2;
}

const users = ['John',"Jack"];
console.log(users.sum(2,2));
console.log(users);

const msg = "Hello, welcome to Prototypes";
console.log(msg);
console.log(String.prototype);