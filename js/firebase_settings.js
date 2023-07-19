firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        currentLoggedInUser = user;
        usersDb.where("ID", "==", currentLoggedInUser.uid).get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                document.querySelector(".profile-image-settings-user").src = currentLoggedInUser.photoURL;
                document.querySelector(".profile-image-settings-user-profile").src = currentLoggedInUser.photoURL;
                const photoProfile = document.getElementById("choose-file");
                const nameField = document.getElementById("name-field-user");
                const editBtn = document.getElementById("button-edit-settings");
                nameField.value = currentLoggedInUser.displayName;
                let newUrl = "";
                editBtn.onclick = function () {
                    if (photoProfile.files[0] != null){
                        let task = storage.ref().child(`${currentLoggedInUser.uid}/profileImage.png`).put(photoProfile.files[0]).then((image) => {
                            image.ref.getDownloadURL().then((url) => {
                                newUrl = url;
                                currentLoggedInUser.updateProfile({
                                    displayName:nameField.value,
                                    photoURL:url
                                }).then(() => {
                                    doc.ref.update({
                                        Name:nameField.value,
                                        ProfileImage:currentLoggedInUser.photoURL
                                    });
                                });
                            })
                        })
                    }else{
                        currentLoggedInUser.updateProfile({
                            displayName:nameField.value,
                        }).then(() => {
                            doc.ref.update({
                                Name:nameField.value,
                            });
                        });
                    }
                }
            })
        });

    }
    else {
        window.location = "login.html";
    }
});