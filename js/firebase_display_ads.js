let currentLoggedInUser = null;
const postsContainer = document.querySelector('.products-container-ads');
const adsRecContainer = document.querySelector('.container-for-inner-swipes');
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        currentLoggedInUser = user;
        document.querySelector('.user-profile-image-home').src = currentLoggedInUser.photoURL;
    } else {
        currentLoggedInUser = null;
        document.querySelector('.user-profile-image-home').style.display = "none";
    }
    mainActivity();
});

function mainActivity() {
    let recAdsHTML = "";


    adsDb.onSnapshot((snapshot) => {
        function compar(a, b) {
            return b.data().datePosted - a.data().datePosted;
        }
		postsContainer.innerHTML = "";

        let adObjects = snapshot.docs.sort(compar);
        for (let ad of adObjects) {
            if (ad.data().hasImageF == "TRUE") {
                let storageRefAdRec = storage.ref().child(ad.id + "/");// Referinta la folderul anuntului in storage
                storageRefAdRec.listAll().then((res) => {
                    storage.ref().child(res.items[0].fullPath).getDownloadURL().then((url) => {
                        postsContainer.innerHTML += `<a class = "link-for-product-detail" href = "pages/product_detail.html?id=${ad.id}">
                                                        <div class="product-object-home">
                                                            <div class="image-of-product">
                                                                <img width = "200" height="200" src="${url}">
                                                            </div>
                                                            <div class="title-of-product">
                                                                <h5 class="title-of-product-home">${ad.data().title.slice(0,25)}</h5>
                                                            </div>
                                                            <div class="price-of-product-home">
                                                                <h3>${ad.data().price} lei</h3>
                                                            </div>
                                                        </div>
                                                    </a>`;
const theme1 = localStorage.getItem("theme");

if (theme1 == "dark"){

		document.body.style.backgroundColor = "#18191a";
		document.querySelector('.recommended-users-block').style.backgroundColor = "#18191a";
		document.querySelector('.text-post-ask').style.color = "lightgray";
		document.querySelector('.container-swipe').style.backgroundColor = "#18191a";
		document.querySelectorAll('.swiper-slide').forEach((swiper) => {
			swiper.style.backgroundColor = "#242526";
			swiper.style.color = "whitesmoke";
		})

		document.querySelectorAll('.product-object-home').forEach((object) => {
			object.style.backgroundColor = "#242526";
			object.style.color = "whitesmoke";
			object.style.border = "none";
			object.style.boxShadow = "0px 0px 2px gray";
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
		document.querySelector('.recommended-users-block').style.backgroundColor = "whitesmoke";
		document.querySelector('.text-post-ask').style.color = "black";
		document.querySelector('.container-swipe').style.backgroundColor = "whitesmoke";
		document.querySelectorAll('.swiper-slide').forEach((swiper) => {
			swiper.style.backgroundColor = "white";
			swiper.style.color = "black";
		})

		document.querySelectorAll('.product-object-home').forEach((object) => {
			object.style.backgroundColor = "white";
			object.style.color = "black";
			object.style.border = "1px solid lightgray";
			object.style.boxShadow = "none";
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
                })
            } else {
                let storageRefAdRec = storage.ref().child("default_images/default_product.png").getDownloadURL()
                    .then((url) => {
                        postsContainer.innerHTML += `<a class = "link-for-product-detail" href = "pages/product_detail.html?id=${ad.id}">
                                                        <div class="product-object-home">
                                                            <div class="image-of-product">
                                                                <img width = "100%" height="70%" src="${url}">
                                                            </div>
                                                            <div class="title-of-product">
                                                                <h5 class="title-of-product-home">${ad.data().title.slice(0,25)}</h5>
                                                            </div>
                                                            <div class="price-of-product-home">
                                                                <h3>${ad.data().price} lei</h3>
                                                            </div>
                                                        </div>
                                                    </a>`;
                                                    const theme1 = localStorage.getItem("theme");

if (theme1 == "dark"){

		document.body.style.backgroundColor = "#18191a";
		document.querySelector('.recommended-users-block').style.backgroundColor = "#18191a";
		document.querySelector('.text-post-ask').style.color = "lightgray";
		document.querySelector('.container-swipe').style.backgroundColor = "#18191a";
		document.querySelectorAll('.swiper-slide').forEach((swiper) => {
			swiper.style.backgroundColor = "#242526";
			swiper.style.color = "whitesmoke";
		})

		document.querySelectorAll('.product-object-home').forEach((object) => {
			object.style.backgroundColor = "#242526";
			object.style.color = "whitesmoke";
			object.style.border = "none";
			object.style.boxShadow = "0px 0px 2px gray";
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
		document.querySelector('.recommended-users-block').style.backgroundColor = "whitesmoke";
		document.querySelector('.text-post-ask').style.color = "black";
		document.querySelector('.container-swipe').style.backgroundColor = "whitesmoke";
		document.querySelectorAll('.swiper-slide').forEach((swiper) => {
			swiper.style.backgroundColor = "white";
			swiper.style.color = "black";
		})

		document.querySelectorAll('.product-object-home').forEach((object) => {
			object.style.backgroundColor = "white";
			object.style.color = "black";
			object.style.border = "1px solid lightgray";
			object.style.boxShadow = "none";
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
                    });
            }    
        }
    })
}
