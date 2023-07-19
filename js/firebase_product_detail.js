const url = new URL(document.location);
let id = url.searchParams.get("id");

const photosOfProduct1 = document.getElementById("photos1Product");
const photosOfProduct2 = document.getElementById("photos2Product");
const container2Detail = document.querySelector(".container-2-detail");


firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        document.querySelector('.detail-profile-picture').src = user.photoURL;
    } else {
        document.querySelector('.detail-profile-picture').style.display = "none";
    }
});


let listOfPhotos = [];
photosOfProduct1.innerHTML = "";
photosOfProduct2.innerHTML = "";


adsDb.doc(id).get().then((doc) => {

    if (doc.data().hasImageF == "TRUE") {
        storage.ref().child(`${doc.id}/`).listAll().then((res) => {
            photosOfProduct1.innerHTML = "";
            photosOfProduct2.innerHTML = "";
            res.items.forEach((item) => {
                storage.ref().child(item.fullPath + "/").getDownloadURL().then((url) => {
                    photosOfProduct1.innerHTML += `
                    <div class="swiper-slide">
                        <img width = "100%" height = "100%" src="${url}" />
                    </div>
                    `;
                    photosOfProduct2.innerHTML += `
                    <div class="swiper-slide">
                        <img width = "100%" height = "100%" src="${url}"/>
                    </div>
                    `;

                    var swiper = new Swiper(".mySwiper", {
                        loop: true,
                        spaceBetween: 10,
                        slidesPerView: 4,
                        freeMode: true,
                        watchSlidesProgress: true,
                    });
                    var swiper2 = new Swiper(".mySwiper2", {
                        loop: true,
                        spaceBetween: 10,
                        navigation: {
                            nextEl: ".swiper-button-next",
                            prevEl: ".swiper-button-prev",
                        },
                        thumbs: {
                            swiper: swiper,
                        },
                    });
                })
            })
        })
    } else {
        photosOfProduct1.innerHTML = "";
        photosOfProduct2.innerHTML = "";
        for (let i = 0; i < 4; i++) {
            let path = "../images/default_product.png";
            photosOfProduct1.innerHTML += `
                    <div class="swiper-slide">
                        <img width = "100%" height = "100%" src="${path}" />
                    </div>
                    `;
            photosOfProduct2.innerHTML += `
                    <div class="swiper-slide">
                        <img width = "100%" height = "100%" src="${path}"/>
                    </div>
                    `;
            var swiper = new Swiper(".mySwiper", {
                loop: true,
                spaceBetween: 10,
                slidesPerView: 4,
                freeMode: true,
                watchSlidesProgress: true,
            });
            var swiper2 = new Swiper(".mySwiper2", {
                loop: true,
                spaceBetween: 10,
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
                thumbs: {
                    swiper: swiper,
                },
            });
        }
    }

    let categoriesList = "";
    for (let category of doc.data().categories) {
        categoriesList += `#${category} `;
    }

    container2Detail.innerHTML = `<div class="info-product-detail title-of-product-detail">
                                    <h3>${doc.data().title}</h3>
                                </div>
                                <div class="info-product-detail price-of-product-detail">
                                    <h2>${doc.data().price} lei</h2>
                                </div>
                                <div class="info-product-detail description-of-product-detail">
                                    <h3>Descriere:</h3>
                                    <br>
                                    <p>${doc.data().description}</p>
                                </div>
                                <div class="info-product-detail category-product-detail" style="margin-bottom: 20px;margin-left: 40px;">
                                    <p>${categoriesList}</p>
                                </div>
                                <div class="info-product-detail contact-data-detail" style="margin-top: 5px;">
                                    <h3>Contacte:</h3>
                                    <br>
                                    <p>${doc.data().contacts}</p>
                                </div>
                                <div class="buttons-for-detail">
                                    <button id = "cart-btn-cart" class="cart-button">
                                        <span class="add-to-cart">Pune în coș</span>
                                        <span class="added">Adăugat în coș</span>
                                        <i class="fas fa-shopping-cart"></i>
                                        <i class="fas fa-box"></i>
                                    </button>

                                    <a href = "tel:${doc.data().numberTel}"><button class="call-user-btn">Sună proprietarul</button></a>
                                </div>`;

                                const theme1 = localStorage.getItem("theme");

if (theme1 == "dark"){

		document.body.style.backgroundColor = "#18191a";
		document.querySelector('.container-for-detail').style.backgroundColor = "#242526";
		document.querySelector('.copyright-msg').style.backgroundColor = "#18191a";
		document.querySelector('.container-1-detail').style.backgroundColor = "#242526";
		document.querySelector('.container-2-detail').style.backgroundColor = "#242526";
		document.querySelector('.container-2-detail').style.color = "whitesmoke";
		document.querySelector('.description-of-product-detail').style.backgroundColor = "#2f3031";
		document.querySelector('.contact-data-detail').style.backgroundColor = "#2f3031";
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
		document.querySelector('.container-for-detail').style.backgroundColor = "white";
		document.querySelector('.copyright-msg').style.backgroundColor = "whitesmoke";
		document.querySelector('.container-1-detail').style.backgroundColor = "white";
		document.querySelector('.container-2-detail').style.backgroundColor = "white";
		document.querySelector('.container-2-detail').style.color = "black";
		document.querySelector('.description-of-product-detail').style.backgroundColor = "#e3e3e3";
		document.querySelector('.contact-data-detail').style.backgroundColor = "#e3e3e3";
		
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

    function checkIfIn(listOb,element){
        for (let el of listOb){
            if (el === element){
                return true;
            }
        }
        return false;
    }



    document.getElementById("cart-btn-cart").onclick = function () {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                cartsDb.where("userID", "==", user.uid).get().then((querySnapshot) => {
                    querySnapshot.forEach((cart) => {
                        let newProducts = cart.data().products;
                    
                        if (checkIfIn(newProducts,doc.id) == true){
                            document.getElementById("cart-btn-cart").innerHTML = "DEJA INCLUS";
                        }else{
                            newProducts.push(doc.id);
                            cart.ref.update({
                                products:newProducts,
                            }).then(() => {
                                document.getElementById("cart-btn-cart").classList.add("clicked");
                            });
                        }

                    })
                });
            }
            else {
                window.location = "login.html";
            }
        });
    }

})




