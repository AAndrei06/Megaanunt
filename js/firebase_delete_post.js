const url = new URL(document.location);
let id = url.searchParams.get("id");

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        currentLoggedInUser = user;
        postsDb.doc(id).get().then((doc) => {
            if (currentLoggedInUser.uid == doc.data().authorID) {
                function redirectToBlog(){
                    window.location = "blog.html";
                }
                document.querySelector('.user-profile-image-delete').src = currentLoggedInUser.photoURL;
                document.body.style.display = "block";
                const deleteBtn = document.getElementById("delete-btn-post");
                deleteBtn.onclick = () => {
                    doc.ref.delete().then(redirectToBlog);
                }
            }
        })
    } else {
        window.location = "login.html";
    }
});