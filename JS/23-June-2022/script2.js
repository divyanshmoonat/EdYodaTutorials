var ul = document.getElementById("todoList");

function createToDoList(list) {
  for (var counter = 0; counter < list.length; counter++) {
    var currentTodo = list[counter];

    // Create Element li
    var li = document.createElement("li");
    li.innerText = currentTodo.title;

    ul.appendChild(li);
  }
}

function onClickHandler() {
  ul.innerHTML = ''; 
  function onRequestCompleteHandler(e) {
    console.log("Data received by API");
    if (e.target.readyState === 4) {
      if (e.target.status === 200) {
        console.log("Request completed successfully");
        var todoResponse = JSON.parse(e.target.response);
        // console.log(todoResponse.todos);
        createToDoList(todoResponse.todos);
      } else if (e.target.status === 404) {
        console.log("Error in request, NOT FOUND");
      } else {
        console.log("Request failed");
      }
    }
  }

  console.log("Before calling API");
  var request = new XMLHttpRequest();
  request.open("GET", "http://localhost:5000/todo");
  request.send();
  request.addEventListener("readystatechange", onRequestCompleteHandler);
}

var btn = document.getElementById("getToDos");
btn.addEventListener("click", onClickHandler);

// GET API => http://localhost:5000/todo => To get the list of todo items
// POST API => http://localhost:5000/todo => To save a todo item on server

// Create a todo list which saves items in your DB

// 1. Create a form using HTML
// 2. Get the todo item title using input field
// 3. Stop the default behavior of form submission
// 4. Call a post api to send the data on server(DB).

var todoItem = "";
function onInputKeyUpHandler(e) {
  console.log(e.target.value);
  todoItem = e.target.value;
  // console.log("OnKeyUp trigerred");
}
var input = document.getElementById("todoInput");
input.addEventListener("keyup", onInputKeyUpHandler);

function readyStateChangeHandler(e) {
  if(e.target.readyState === 4) {
    if(e.target.status === 201) {
      alert("ToDo Item added successfully");
      input.value = '';
      // Remove all the existing items from the list
      onClickHandler();
    }
  }
}

function onFormSubmitHandler(e) {
  e.preventDefault();
  var apiInput = {
    title: todoItem,
    completed: false
  };
  var httpRequest =  new XMLHttpRequest();
  httpRequest.open('POST','http://localhost:5000/todo');
  httpRequest.setRequestHeader('Content-Type','application/json');
  httpRequest.send(JSON.stringify(apiInput));
  httpRequest.addEventListener('readystatechange',readyStateChangeHandler);
}
var form = document.getElementById("todoForm");
form.addEventListener("submit", onFormSubmitHandler);


// CRUD : Create Read Update Delete