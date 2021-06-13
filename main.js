let btnLogin = document.getElementById("login");
let btnSignUp = document.getElementById("signup");

let signin = document.querySelector(".signin");
let signup = document.querySelector(".signup");

btnLogin.onclick = function(){
 signin.classList.add("active");
 signup.classList.add("inActive");
}

btnSignUp.onclick = function(){
    signin.classList.remove("active");
    signup.classList.remove("inActive");
   }

