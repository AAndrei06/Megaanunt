const url = new URL(document.location);
let id = url.searchParams.get("id");

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        currentLoggedInUser = user;
        adsDb.doc(id).get().then((doc) => {
            if (currentLoggedInUser.uid == doc.data().authorId) {
                function redirectToHome(){
                    window.location = "../home.html";
                }
                document.querySelector('.user-profile-image-delete').src = currentLoggedInUser.photoURL;
                document.body.style.display = "block";
                const deleteBtn = document.getElementById("final-delete");
                deleteBtn.onclick = () => {
                    let storageRef = storage.ref().child(`${doc.id}/`);
                    storageRef.listAll().then((res) => {
                        res.items.forEach((item) => {
                            item.delete();
                        })
                    }).then(() => {
                        doc.ref.delete().then(redirectToHome);
                    })
                }
            }
        })
    } else {
        window.location = "login.html";
    }
});