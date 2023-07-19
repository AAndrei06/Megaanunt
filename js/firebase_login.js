const emailInput = document.getElementById("email-input");
const passwordInput = document.getElementById("password-input");
const errorMessages = document.querySelectorAll(".error-message");

function checkEmail(email){
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
}

function loginUser(){
    
    auth.signInWithEmailAndPassword(emailInput.value, passwordInput.value)
    .then((userCredential) => {
        window.location = "profile.html?id="+userCredential.user.uid;
    })
    .catch((error) => {
        if (error.code == "auth/invalid-email" || checkEmail(emailInput.value) == null){
            errorMessages[0].innerHTML = "Email invalid";
        }else{
            errorMessages[0].innerHTML = "";
        }

        if (error.code == "auth/wrong-password")
        {
            errorMessages[1].innerHTML = "Parola incorectă";
        }else{
            errorMessages[1].innerHTML = "";
        }
        if (error.code == "auth/user-not-found"){
            document.querySelector(".title-of-form").innerHTML = "Contul nu există";
        }else{
            document.querySelector(".title-of-form").innerHTML = "Autentifică-te";
        }
    });
}


