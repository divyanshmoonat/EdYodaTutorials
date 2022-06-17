// Get all the HTML Element
var addItemBtn = document.getElementById("addItemBtn");
var toDoList = document.getElementById("toDoList");
var inputField = document.getElementById("inputBox");

// Event listener functions
function addItemToList() {
  //   console.log("Click event triggered");
  // 1. Create a li
  var li = document.createElement("li");
  li.innerText = inputField.value;

  //2. Append the li to ul
  toDoList.appendChild(li);

  inputField.value = "";
}

function keyPressHandler(e) {
  if (e.keyCode === 13) {
    addItemToList();
  }
  // console.log(e.keyCode, e.key);
  // console.log("Keypress event triggered");
}

// Event registrations
addItemBtn.addEventListener("click", addItemToList);

inputField.addEventListener("keypress", keyPressHandler);
