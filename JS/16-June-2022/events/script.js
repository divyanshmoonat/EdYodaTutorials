var div = document.getElementById("expDiv");
var p = document.getElementsByTagName("p");
// console.log(p[0]);
// console.log(div);

function mouseDownHandler() {
  console.log("Mouse Down event triggered");
}

function mouseUpHandler() {
  console.log("Mouse Up event triggered");
}

function mouseEnterHandler(event) {
  console.log("Mouse enter event triggered");
  // event.target.style.transform = 'scale(1.2)';
  console.log(event);
}

function mouseLeaveHandler(e) {
  console.log("Mouse leave event triggered");
  e.target.style.transform = "";
}

function mouseMoveHandler() {
  console.log("Mouse move event triggered");
}

div.addEventListener("mousedown", mouseDownHandler);

div.addEventListener("mouseup", mouseUpHandler);

div.addEventListener("mouseenter", mouseEnterHandler);

div.addEventListener("mouseleave", mouseLeaveHandler);

div.addEventListener("mousemove", mouseMoveHandler);

function paraEventListener(e) {
  console.log(e.target);
}
p[0].addEventListener("mouseenter", paraEventListener);

// CREATING HTML ELEMENTS USING JS

// 1. Create element
var span = document.createElement("span");

// 2. Set its attributes/properties
span.innerText = "A dynamically added span";
// span.textContent = 'New text content';
span.style.color = "#ff0000";

// 3. Append it to the container/parent
div.appendChild(span);

function clickHandler() {
  var heading = document.getElementById("heading");

  // var spanInDiv = document.querySelector('div span');

  // spanInDiv.remove();
  // console.log(spanInDiv);

  // Delete the heading
  heading.remove();
}

var btn = document.getElementById("delBtn");
btn.addEventListener("click", clickHandler);
