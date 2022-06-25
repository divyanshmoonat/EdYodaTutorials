console.log("Hello from revision session");
var span = document.getElementById("authBtn");
var userName = "John";
var user = {
  fName: "John",
  lName: "Doe",
};
// localStorage.setItem("name", userName);
// localStorage.setItem("isLoggedIn", true);
// localStorage.setItem("evenNumbers", [2, 4, 6, 8, 10]);
// localStorage.setItem("user", JSON.stringify(user));

var dataFromLocalStorage = localStorage.getItem("name");
console.log(dataFromLocalStorage);

var arrFromLocalStorage = localStorage.getItem("evenNumbers");
console.log(typeof arrFromLocalStorage);

var boolFromLocalStorage = localStorage.getItem("isLoggedIn");
console.log(typeof boolFromLocalStorage);

var objFromLocalStorage = localStorage.getItem("user");
console.log(typeof JSON.parse(objFromLocalStorage));

function checkLogInStatus(loginText) {
  if (loginText === "LogIn") {
    localStorage.setItem("isLoggedIn", true);
    span.innerText = "LogOut";
  } else if (loginText === "LogOut") {
    localStorage.removeItem("isLoggedIn");
    span.innerText = "LogIn";
  }
}

var isLoggedIn = Boolean(localStorage.getItem("isLoggedIn"));
if (isLoggedIn) {
  span.innerText = "LogOut";
} else {
  span.innerText = "LogIn";
}

function onClickHandler(e) {
  // Logic for matching username and password
  var loginText = e.target.innerText;
  checkLogInStatus(loginText);
}
span.addEventListener("click", onClickHandler);

// try {
//     var a = document.createElement('a');
//     var div = document.getElementById("contentDiv");
//     div.appendChild(a);
// } catch (error) {
//     // console.log("ERROR IN HTML OPERATION",error);
// }

function add(num1, num2) {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    throw new Error("num1 and num2 should be of type number");
  }
  console.log(num1 + num2);
}

// add(5, { fname: "John" });
// add(10,10);
console.log("Hello from line 66");
console.log(2+2);


var a = document.createElement('a');
var div = document.createElement('div');
a.appendChild(div);

document.body.appendChild(a);