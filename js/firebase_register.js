const userNameInput = document.getElementById("name-input");
const emailInput = document.getElementById("email-input");
const password1Input = document.getElementById("password1-input");
const password2Input = document.getElementById("password2-input");
const errorMessages = document.querySelectorAll(".error-message");
const inputFields = document.querySelectorAll(".input-field");
const checkBox = document.getElementById("check-box-policy");
const submitBtn = document.querySelector(".submit-button");
let invalidInputs = 0;

function checkEmail(email) {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};

function registerUser() {
    invalidInputs = 0;
    if (userNameInput.value.length < 5) {
        errorMessages[0].innerText = "Nume prea scurt";
        inputFields[0].style.borderColor = "red";
        invalidInputs++;
    }
    else {
        errorMessages[0].innerText = "";
        inputFields[0].style.borderColor = "gray";
    }

    if (checkEmail(emailInput.value) == null) {
        errorMessages[1].innerText = "Email greșit";
        inputFields[1].style.borderColor = "red";
        invalidInputs++;
    }
    else {
        errorMessages[1].innerText = "";
        inputFields[1].style.borderColor = "gray";
    }

    if (password1Input.value.length < 8) {
        errorMessages[2].innerText = "Parolă prea scurtă";
        inputFields[2].style.borderColor = "red";
        invalidInputs++;
    }
    else {
        errorMessages[2].innerText = "";
        inputFields[2].style.borderColor = "gray";
    }

    if (password1Input.value != password2Input.value) {
        errorMessages[3].innerText = "Parolele nu se potrivesc";
        inputFields[3].style.borderColor = "red";
        invalidInputs++;
    }
    else {
        errorMessages[3].innerText = "";
        inputFields[3].style.borderColor = "gray";
    }

    if (checkBox.checked == false) {
        document.querySelector(".link-policy").style.color = 'red';
    }
    else {
        document.querySelector(".link-policy").style.color = "black";
    }

    if (checkBox.checked == true && invalidInputs == 0) {
        let photoImageUrl = null;
        storage.ref().child("default_images/default-user-icon.jpg").getDownloadURL().then((url) => {
            photoImageUrl = url;
        });

        //Creates User
        auth.createUserWithEmailAndPassword(emailInput.value, password1Input.value)
            .then((userCredential) => {
                var userNow = userCredential.user;
                userNow.updateProfile({
                    displayName: userNameInput.value,
                    photoURL: photoImageUrl
                }).then(addUserCopy);

                // Copy User and redirect function
                function addUserCopy() {
                    usersDb.add({
                        ID: userNow.uid,
                        Name: userNow.displayName,
                        ProfileImage: userNow.photoURL
                    }).then(() => {
                        cartsDb.add({
                            userID:userNow.uid,
                            products:[],
                        });
                    })
                    .then((docRef) => {
                        auth.onAuthStateChanged(function (fb_user) {
                            if (fb_user != null) {
                                window.location = "profile.html?id=" + fb_user.uid;
                            }
                        });
                    })
                    .catch((error) => {
                        console.error("A apărut o eroare,încearcă mai târziu");
                    });
                }
            })
            .catch((error) => {
                alert("Deja există un cont cu aceste credențiale,încearcă să te autentifici");
            });
        document.querySelector(".link-policy").style.color = 'black';
    }
}
