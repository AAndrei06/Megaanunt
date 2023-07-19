let currentLoggedInUser = null;

const postsContainer = document.querySelector('.container-for-posts');
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        currentLoggedInUser = user;
        document.querySelector('.user-profile-image-blog').src = currentLoggedInUser.photoURL;
    }else{
        currentLoggedInUser = null;
        document.querySelector('.user-profile-image-blog').style.display = "none";
    }
    mainActivity();
});


function mainActivity() {
    let postsHTML = "";
    let buttonsForAuthor = "";

    function formatDate(stamp) {
        let data = new Date(stamp);
        let an = data.getFullYear();
        let luna = data.getMonth() + 1;
        let zi = data.getDate();
        let result = zi + "." + luna + "." + an;

        return result;
    }

    postsDb.onSnapshot((snapshot) => {
        function compar(a, b) {
            return b.data().datePosted - a.data().datePosted;
        }
        postsContainer.innerHTML = "";
        let postUser = null;
        let posts = snapshot.docs.sort(compar);
        for (let post of posts) {
            usersDb.where('ID',"==",post.data().authorID).get().then((querySnapshot) => {
                console.log("ok");
                querySnapshot.forEach((item) => {
                    if (currentLoggedInUser != null){
                        if (currentLoggedInUser.uid == post.data().authorID) {
                            buttonsForAuthor = `<div class="bottom-bar-post-blog">
                                                <div class="btns-for-post">
                                                    <a href = "edit_post.html?id=${post.id}"><button class="btn-object btn-edit-post">Editează</button></a>
                                                    <a href = "confirm_delete_post.html?id=${post.id}"><button class="btn-object btn-delete-post">Șterge</button></a>
                                                </div>
                                            </div>`;
                        }
                    }
                    postsContainer.innerHTML += `<div class="post-object-blog">
                                <div class="top-post-bar">
                                    <div class="image-user-blog">
                                        <img src="${item.data().ProfileImage}">
                                    </div>
                                    <div class="user-info-blog">
                                        <div class="user-name-blog">
                                            <p><a style="color:#006cbf;" href="">${item.data().Name}&nbsp&nbsp </a><span class="span-user">${formatDate(post.data().datePosted)}</span></p>
                                        </div>
                                    </div>
                                </div>
                                <div class="post-content-blog">
                                    <h3>${post.data().title}</h3>
                                    <p>${post.data().content}</p>
                                </div>
                                ${buttonsForAuthor}
                            </div>`;

                            const theme1 = localStorage.getItem("theme");

if (theme1 == "dark"){

		document.body.style.backgroundColor = "#18191a";
		document.querySelector('.container-for-posts').style.backgroundColor = "#18191a";
		document.querySelectorAll('.post-object-blog').forEach((post_object) =>{
			post_object.style.backgroundColor = "#242526";
		})

		document.querySelectorAll('.post-object-blog').forEach((post_object) =>{
			post_object.style.boxShadow = "none";
		})
		document.querySelectorAll('.span-user').forEach((span) => {
			span.style.color = "whitesmoke";
		})
		document.querySelectorAll('.post-content-blog').forEach((post_content) => {
			post_content.style.color = "whitesmoke";
		})

		document.querySelectorAll('.top-post-bar').forEach((top_bar) => {
			top_bar.style.backgroundColor = "#242526";
		})
		document.querySelectorAll('.bottom-bar-post-blog').forEach((bottom_bar) => {
			bottom_bar.style.backgroundColor = "#242526";
		})

		document.querySelectorAll('.btn-edit-post').forEach((bottom_bar) => {
			bottom_bar.style.backgroundColor = "#2f3031";
		})

		document.querySelectorAll('.btn-delete-post').forEach((bottom_bar) => {
			bottom_bar.style.backgroundColor = "#2f3031";
		})

		/* Common */

		document.querySelector('.banner-object').style.backgroundColor = "#242526";
		document.querySelector('.banner-object').style.color = "whitesmoke";
		document.querySelectorAll('.about-contact').forEach((element) => {
			element.style.color = "whitesmoke";
		})

		document.querySelector('.input-search-cls').style.backgroundColor = "#444546";
		document.querySelector('.input-search-cls').style.color = "whitesmoke";
		document.querySelector('.search-results-banner').style.backgroundColor = "#444546";
		document.querySelector('.input-search-cls').style.border = "none";
		document.querySelector('.search-results-banner').style.border = "none";
		document.querySelector('.fa-cart-shopping').style.color = "whitesmoke";
		document.querySelector('.button-category').style.backgroundColor = "#47494b";
		document.querySelectorAll('.category-option').forEach((element) => {
			element.style.backgroundColor = "#47494b";
			element.style.color = "whitesmoke";
			element.style.borderColor = "gray";
		})

		document.querySelector('.menu-slide-area-banner').style.backgroundColor = "#242526";
		document.querySelector('.menu-slide-area-banner').style.color = "whitesmoke";
		document.querySelectorAll('.link-menu-option').forEach((link) => {
			link.style.color = "whitesmoke";

		});

		document.querySelectorAll('.category-menu-option').forEach((category) => {
			category.style.color = "whitesmoke";
		})

		document.querySelector(".category-slide-title").style.color = "whitesmoke";
		document.querySelector('.fa-arrow-left').style.color = "whitesmoke";
		/* Common */
	}
else{

		document.body.style.backgroundColor = "whitesmoke";
		document.querySelector('.container-for-posts').style.backgroundColor = "whitesmoke";
		document.querySelectorAll('.post-object-blog').forEach((post_object) =>{
			post_object.style.backgroundColor = "white";
		})

		document.querySelectorAll('.post-object-blog').forEach((post_object) =>{
			post_object.style.boxShadow = "0px 0px 5px lightgray";
		})
		document.querySelectorAll('.span-user').forEach((span) => {
			span.style.color = "black";
		})
		document.querySelectorAll('.post-content-blog').forEach((post_content) => {
			post_content.style.color = "black";
		})

		document.querySelectorAll('.top-post-bar').forEach((top_bar) => {
			top_bar.style.backgroundColor = "white";
		})
		document.querySelectorAll('.bottom-bar-post-blog').forEach((bottom_bar) => {
			bottom_bar.style.backgroundColor = "white";
		})

		document.querySelectorAll('.btn-edit-post').forEach((bottom_bar) => {
			bottom_bar.style.backgroundColor = "white";
		})

		document.querySelectorAll('.btn-delete-post').forEach((bottom_bar) => {
			bottom_bar.style.backgroundColor = "white";
		})
		/* Common */

		document.querySelector('.banner-object').style.backgroundColor = "white";
		document.querySelector('.banner-object').style.color = "#1b263f";
		document.querySelectorAll('.about-contact').forEach((element) => {
			element.style.color = "#1b263f";
		})

		document.querySelector('.input-search-cls').style.backgroundColor = "whitesmoke";
		document.querySelector('.input-search-cls').style.color = "black";
		document.querySelector('.search-results-banner').style.backgroundColor = "whitesmoke";
		document.querySelector('.input-search-cls').style.border = "1px solid gray";
		document.querySelector('.search-results-banner').style.border = "1px solid gray";
		document.querySelector('.fa-cart-shopping').style.color = "#1b263f";
		document.querySelector('.button-category').style.backgroundColor = "white";
		document.querySelectorAll('.category-option').forEach((element) => {
			element.style.backgroundColor = "white";
			element.style.color = "black";
			element.style.borderColor = "lightgray";
		})

		document.querySelector('.menu-slide-area-banner').style.backgroundColor = "white";
		document.querySelector('.menu-slide-area-banner').style.color = "black";
		document.querySelectorAll('.link-menu-option').forEach((link) => {
			link.style.color = "black";

		});

		document.querySelectorAll('.category-menu-option').forEach((category) => {
			category.style.color = "#1b263f";
		})

		document.querySelector('.fa-arrow-left').style.color = "black";

		/* Common */
}
                })
            });
        }
        postsContainer.innerHTML = postsHTML;
    })
}