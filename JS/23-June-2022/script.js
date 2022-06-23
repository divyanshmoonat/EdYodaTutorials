// Call an API :
// 1. End Point : https://jsonplaceholder.typicode.com/todos/
// 3. Method : GET

function createToDoList(list) {
  var ul = document.getElementById("todoList");
  for (var counter = 0; counter < list.length; counter++) {
    var currentTodo = list[counter];

    // Create Element li
    var li = document.createElement("li");
    li.innerText = currentTodo.title;

    ul.appendChild(li);
  }
}

function onClickHandler() {
  console.log("OnClick Handler Called");

  function readyStateChangeHandler(e) {
    console.log("Ready State Changed", e.target.readyState);
    if (e.target.readyState === 4) {
      if (e.target.status === 200) {
        console.log("Request completed successfully");
        var todos = JSON.parse(e.target.response);
        createToDoList(todos);
      } else if (e.target.status === 404) {
        console.log("Error in request, NOT FOUND");
      } else {
        console.log("Request failed");
      }
      console.log("Request completed", e.target);
    }
  }
  var request = new XMLHttpRequest();
  request.open("GET", "https://jsonplaceholder.typicode.com/todos/");
  request.send();
  request.addEventListener("readystatechange", readyStateChangeHandler);
}

var btn = document.getElementById("getToDos");
btn.addEventListener("click", onClickHandler);
