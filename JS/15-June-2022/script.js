var button = document.getElementById("btn");
var heading = document.getElementById("heading");
var containerDiv = document.getElementById("container");
var inputField = document.getElementById("userName");
var calulatorOutput = document.getElementById("calulatorOutput");

var initialHeadingInnerText = heading.innerText;
var initialHeadingColor = heading.style.color;

// console.log(initialHeadingColor,initialHeadingInnerText);
// console.log(button.onclick);
// console.log(containerDiv);
// Registering a onclick event on button
//1
var clickCounter = 0;

function onBtnClickHandler() {
  clickCounter++;
  // alert("Hello from JS Events");
  console.log(`Button is clicked ${clickCounter} times`);
  if (clickCounter % 2 === 0) {
    heading.style.color = initialHeadingColor;
    heading.innerText = initialHeadingInnerText;
  } else {
    heading.style.color = "yellow";
    heading.innerText = "Odd with Yellow";
  }
}

function onBtnClickHandler2() {
  alert("New click listener");
}
// button.onclick = onBtnClickHandler;
// button.onclick = onBtnClickHandler2;

// SYNTAX :
// ELEMENT.addEventListener(EVENT_NAME,CALLBACK_FUNCTION);

button.addEventListener("click", onBtnClickHandler);
// button.addEventListener("dblclick", onBtnClickHandler2);

var person = {
  name: "John",
};

person.name = "ABC";
person.name = "XYZ";

// Keyboard Events :
// 1. keydown 2.keypress 3.keyup

function keyDownHandler(event) {
  //   console.log("KeyDown event triggered", event.keyCode, event.key,event);
  // console.log(event);

  if (event.keyCode === 13) {
    console.log("You have pressed Enter");
  } else if (event.keyCode >= 65 && event.keyCode <= 90) {
    console.log("You have pressed an alphabet");
  } else if (event.keyCode >= 48 && event.keyCode <= 57) {
    console.log("You have pressed a number");
  } else {
    console.log("You have pressed a special key");
  }
}

function keyUpHandler() {
  console.log("KeyUp event triggered");
}

function keyPressHandler() {
  console.log("KeyPress event triggered");
}

// document.addEventListener("keydown", keyDownHandler);
// document.addEventListener('keyup',keyUpHandler);
// document.addEventListener('keypsress',keyPressHandler);

function validateInput(event) {
  // console.log('KeyDown event worked');
  console.log(typeof event.target.value);
  //   event.target.value = event.target.value.toLowerCase();
  var numericalInput = parseInt(event.target.value);
  var percentageValue = (numericalInput / 100) * 20;
  calulatorOutput.innerText = percentageValue;
  //   numericalInput += 10;
  //   event.target.value = numericalInput;
  //   if (event.keyCode >= 48 && event.keyCode <= 57) {
  //     alert("Numbers are not allowed in name field");

  //   }
}

inputField.addEventListener("keyup", validateInput);
