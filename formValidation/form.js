let username = document.getElementById("userName");
let email = document.getElementById("email");
let password = document.getElementById("password");
let num = document.getElementById("num");
let err1 = document.getElementById("error1");
let err2 = document.getElementById("error2");
let err3 = document.getElementById("error3");
let err4 = document.getElementById("error4");


   let regularExpression =
     /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

function handleForm() {
  if (username.value == "") {
    err1.innerHTML = "This field is required.";
  } else if (username.value.length < 10 || username.value.length > 10) {
    err1.innerHTML = "Ensure your username is not less than 10 digit.";
    err1.style.color = "red";
  } else {
    err1.innerHTML = "👍";
  }
  if (email.value == "") {
    err2.innerHTML = "This field is required.";
  } else if (!(email.value.includes("@") && email.value.includes("."))) {
    err2.innerHTML = "Input a valid email";
  } else {
    err2.innerHTML = "Nice";
  }


  if (num.value == "") {
    err3.innerHTML = "This field is required.";
  }else if ((num.value).length >= 12 || (num.value).length <=10) {
    err3.innerHTML = 'Input a valid phone number'
  } else if (!(num.value).startsWith('080') || (num.value).startsWith('070')  || (num.value).startsWith('090') ) {
    err3.innerHTML = "Ensure you input a valid phone number."
  } else {
    err3.innerHTML = '👍'
  }

  if(regularExpression.test(password.value)){
    err4.innerHTML = 'Strong password'
  } else {
    err4.innerHTML = "Password not good enough."
  }
}