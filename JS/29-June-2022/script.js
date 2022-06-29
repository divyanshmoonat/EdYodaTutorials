$(document).ready(function () {
  // console.log("jQuery Session");

  // var div = document.getElementById("container");
  // console.log(div);

  // var jDiv = $("#container");
  // console.log(jDiv);

  // var pByClassName = document.getElementsByClassName("description");
  // console.log(pByClassName);

  var jpByClassName = $(".description");
  console.log(jpByClassName);

  console.log(jpByClassName.first());
  console.log(jpByClassName.last());
  console.log(jpByClassName.eq(0));
  console.log(jpByClassName.first().remove());
  console.log(jpByClassName.last().remove());

  // var pByTagName = document.getElementsByTagName("p");
  // console.log(pByTagName);

  // var jpByTagName = $("p");
  // console.log(jpByTagName);

  // Change the color of all the paragraphs having class description to red using Vanilla JS and jQuery

  /* ----VANILLA JS IMPLEMENTAION---- */
  // var pByClassName = document.getElementsByClassName("description");
  // // // pByClassName.style.color = 'red'; // WRONG WAY
  // for (var counter = 0; counter < pByClassName.length; counter++) {
  //   pByClassName[counter].style.color = "red";
  // }

  /* ----jQuery IMPLEMENTAION---- */
  // var jpByClassName = $('.description');
  // jpByClassName.css('color','red');

  // $('.description').css('color','red');

  // $('.description').css({
  //     color: '#0000ff',
  //     background: '#11aa3f'
  // });

  // CREATE A TODO LIST USING JQUERY
  {
    /* <li>Go to market</li>
<li>Take classes</li> */
  }

  // Register a onkeyup listener on input field
  // Register a submit listener on form to prevent the deafult submission

  var vform = document.getElementById("toDoForm");
  console.log(vform);
  var jform = $("#toDoForm");

  var vinput = document.getElementById("toDoInput");
  var jinput = $("#toDoInput");

  var vul = document.getElementById("toDoList");
  var jul = $("#toDoList");

  var toDoText = "";
  function onKeyUpHandler(e) {
    console.log(e.target.value);
    toDoText = e.target.value;
  }
  // vinput.addEventListener('keyup',onKeyUpHandler);

  jinput.on("keyup", onKeyUpHandler);

  function vonFormSubmitHandler(e) {
    // console.log('submit fn called');
    e.preventDefault();
    var li = document.createElement("li");
    li.innerText = toDoText;
    vul.appendChild(li);
    vinput.value = "";
  }

  // vform.addEventListener("submit", vonFormSubmitHandler);

  function jonFormSubmit(e) {
    //   console.log(e);
    e.preventDefault();
    var jli = $("<li>");
    jli.text(toDoText);
    jul.append(jli);
    jinput.val("");
  }

  jform.on("submit", jonFormSubmit);

  // console.log($('#heading').text())
  // $('#heading').text('new title')

  jul.append("<li>Lorem Ipsum</li>");

  // var heading = document.getElementById('heading');
  // heading.classList.add('session-heading');
  // heading.classList.add('active');
  // heading.classList.remove('title');

  var heading = $("#heading");
  heading.addClass("session-heading active");
  heading.removeClass("title");
});
