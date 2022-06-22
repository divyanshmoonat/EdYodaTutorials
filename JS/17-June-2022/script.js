var form = document.getElementById("loginForm");

// console.log(form);

// var email = "";
// var password = "";

// function onChangeHandler(e) {
//   console.log("onChange event triggered", e.target.name);
//   if (e.target.name === "email") {
//     email = e.target.value;
//   } else if (e.target.name === "password") {
//     password = e.target.value;
//   }

//   console.log('EMAIL => ',email);
//   console.log('PASSWORD => ',password);
// }

// Write a validation on login form to alert the user if he enters a non gmail account

// I have assigned the name of input field as the key of the object and assigned a value to it
// loginData[e.target.name] = e.target.value;

var loginData = {};

function onChangeHandler(e) {
  console.log(e);

  if (e.target.name === "email") {
    // if (e.target.value.endsWith("@gmail.com")) {
    // } else {
    //   alert("Non Gmail addresses are not allowed.");
    // }

    // if (!e.target.value.endsWith("@gmail.com")) {
    //   alert("Non Gmail addresses are not allowed.");
    // }

    loginData.email = e.target.value;
  } else if (e.target.name === "password") {
    loginData.password = e.target.value;
  }

  //   loginData[e.target.name] = e.target.value;

  console.log(loginData);
}

var email = 'john@gmail.com';
var password = '123456';

function onSubmitHandler(e) {
    e.preventDefault();
    console.log("onSubmit event trigerred");
    // if(!loginData.email.endsWith('@gmail.com')) {
    //     alert("Invalid email");
    //     console.log("Invalid email");
    // } else {
    //     alert("LogIn successful.");
    // }

    if(loginData.email === email && loginData.password === password) {
        // CALL AN API VIA AJAX
        alert("Login successfully.");
    } else {
        alert("Email or password incorrect");
    }
}

form.addEventListener("change", onChangeHandler);
form.addEventListener("submit",onSubmitHandler);

// Exercise, home work below
// form.addEventListener('focus');
// form.addEventListener('blur');


document.addEventListener('resize',)