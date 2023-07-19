firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        document.querySelector('.user-profile-image-create').src = user.photoURL;
        document.body.style.display = "block";
        usersDb.where("ID", "==", user.uid).get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                let userFromDb = doc.data();
                const titleField = document.getElementById("input-text-title-post");
                const contentField = document.getElementById("input-content-post");
                const createBtn = document.querySelector(".create-post-btn");
                let listOfInputs = document.querySelectorAll(".input-post-el");
                createBtn.onclick = () => {
                    let checks = 0;

                    for (let input of listOfInputs) {
                        if (input.value.length == 0) {
                            input.style.borderColor = "red";
                            checks++;
                        }
                    }

                    if (checks == 0) {
                        console.log("postat");
                        let date = new Date();
                        postsDb.add({
                            title: titleField.value || null,
                            content: contentField.value || null,
                            image: userFromDb.ProfileImage || null,
                            authorName: userFromDb.Name || null,
                            authorID: userFromDb.ID || null,
                            datePosted: date.getTime()
                        }).then(() => {
                            titleField.value = "";
                            contentField.value = "";
                            window.location = "blog.html";
                        });
                    }
                }
            });
        });
    } else {
        window.location = "login.html";
    }
});






