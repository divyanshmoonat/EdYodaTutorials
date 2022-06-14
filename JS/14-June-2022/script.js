var heading = document.getElementById("heading");

// console.log(heading);

var description = document.getElementsByClassName("description");
// console.log(description);

var divs = document.getElementsByTagName("h1");
// console.log(divs);

// var spanInSample = document.querySelector('.sample h3');
// console.log(spanInSample);

var divInMiscSection = document.querySelector(".misc .sample div");

console.log(divInMiscSection);

var headingFromQS = document.querySelector("h1");

// console.log(headingFromQS);

var divsInMiscSection = document.querySelectorAll(".misc div");
// console.log(divsInMiscSection);

// CHANGE THE TEXT OF HEADING ON PAGE AFTER 5 SECONDS

// var person = {
//     name: 'John'
// };

// person.name = 'Jane';

// setTimeout(function () {
//   var pageHeading = document.getElementById("heading");
//   pageHeading;
//   pageHeading.innerText = "New JS Topic - AFTER 5 SECONDS";
// }, 5000);

// setTimeout(function () {
//   var pageHeading = document.getElementById("heading");
//   pageHeading;
//   pageHeading.innerText = "Another JS Topic - AFTER 10 SECONDS";
// }, 10000);

// setTimeout(function() {
//     var miscSection = document.getElementsByClassName('misc');
//     miscSection[0].style.color = 'red';
//     miscSection[0].style.fontSize = '40px';
//     console.log(miscSection[0].style);
// },5000);

setTimeout(function () {
  var image = document.getElementById("myImage");
  image.src = "https://via.placeholder.com/300.png/096/ff0";
  // console.log(image.src);
}, 5000);
clearTimeout

var counter = 1;
var interval = setInterval(function () {
  if (counter != 0) {
    clearInterval(interval);
  }
  var image = document.getElementById("myImage");
  if (counter % 2 === 0) {
    image.src = "https://via.placeholder.com/300.png/096/ff0";
  } else {
    image.src = "https://via.placeholder.com/300.png/09f/fff";
  }
  counter++;
  console.log("URL Changed ", counter);
}, 3000);

// https://via.placeholder.com/300.png/096/ff0
