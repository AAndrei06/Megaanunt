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
                document.querySelector('.user-profile-image-edit').src = currentLoggedInUser.photoURL;
                const titleFieldEdit = document.getElementById("input-text-title-post");
                const contentFieldEdit = document.getElementById("input-content-post-edit");
                const editBtn = document.getElementById("edit-post-btn");
                titleFieldEdit.value = doc.data().title;
                contentFieldEdit.value = doc.data().content;
                document.body.style.display = "block";
                editBtn.onclick = () => {
                    doc.ref.update({
                        title:titleFieldEdit.value,
                        content:contentFieldEdit.value
                    }).then(redirectToBlog);
                }
            }
        })
    } else {
        window.location = "login.html";
    }
});