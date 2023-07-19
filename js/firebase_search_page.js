const searchInputField = document.querySelector(".search-field-input");
const searchContainer = document.querySelector(".only-search-ads");
const searchButton = document.querySelector(".input-search-element");

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        document.querySelector('.image-profile-user').src = user.photoURL;
    }
});

function formatDate(stamp) {
    let data = new Date(stamp);
    let an = data.getFullYear();
    let luna = data.getMonth() + 1;
    let zi = data.getDate();
    let result = zi + "." + luna + "." + an;

    return result;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function getSearchResults() {

    if (searchInputField.value != "") {
        searchContainer.innerHTML = "";
        adsDb.get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                if (doc.data().title.startsWith(searchInputField.value)) {
                    usersDb.where("ID", "==", doc.data().authorId).get().then((querySnapshot) => {
                        if (doc.data().hasImageF == "TRUE") {
                            storage.ref().child(`${doc.id}/`).listAll().then((res) => {
                                storage.ref().child(res.items[0].fullPath).getDownloadURL().then((url) => {

                                    searchContainer.innerHTML += `
                                            <div class="result-search-page">
                                                <div class="top-user-bar-search">
                                                    <div class="image-of-user-search">
                                                        <img src="${querySnapshot.docs[0].data().ProfileImage}">
                                                    </div>
                                                    <div class="name-of-user-search">
                                                        <p>${querySnapshot.docs[0].data().Name}</p>
                                                    </div>
                                                    <div class="date-posted-search">
                                                        <p>${formatDate(doc.data().datePosted)}</p>
                                                    </div>
                                                </div>
                                                <a href = "product_detail.html?id=${doc.id}"><div class="content-of-product">
                                                    <div class="product-image-search">
                                                        <img src="${url}">
                                                    </div>
                                                    <div class="description-of-product-search">
                                                        <div class="title-of-product-search">
                                                            <p>${doc.data().title.slice(0, 50)}</p>
                                                        </div>
                                                        <div class="text-of-product-search">
                                                            <p>${doc.data().description.slice(0, 100)}</p>
                                                        </div>
                                                    </div>
                                                </div></a>
                            
                                            </div>
                                            `;

                                    const theme1 = localStorage.getItem("theme");

                                    if (theme1 == "dark") {

                                        document.querySelectorAll('.title-of-product-search').forEach((result) => {
                                            result.style.color = "whitesmoke";
                                        })
                                        document.querySelectorAll('.text-of-product-search').forEach((result) => {
                                            result.style.color = "whitesmoke";
                                        })

                                        document.body.style.backgroundColor = "#18191a";
                                        document.querySelector('.rezultate-word').style.color = "whitesmoke";
                                        document.querySelectorAll('.result-search-page').forEach((result) => {
                                            result.style.color = "whitesmoke";
                                            result.style.backgroundColor = "#242526";
                                            result.style.border = "1px solid gray";
                                        })

                                        document.getElementsByClassName('search-field-input')[0].style.backgroundColor = "#3a3b3c";
                                        document.getElementsByClassName('search-field-input')[0].style.border = "1px solid gray";
                                        document.getElementsByClassName('search-field-input')[0].style.color = "whitesmoke";
                                        document.querySelectorAll('.fa-magnifying-glass')[2].style.color = "whitesmoke";

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
                                    else {

                                        document.querySelectorAll('.title-of-product-search').forEach((result) => {
                                            result.style.color = "black";
                                        })
                                        document.querySelectorAll('.text-of-product-search').forEach((result) => {
                                            result.style.color = "black";
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
                            });

                        } else {
                            let pathImage = "../images/default_product.png";
                            searchContainer.innerHTML += `
                                            <div class="result-search-page">
                                                <div class="top-user-bar-search">
                                                    <div class="image-of-user-search">
                                                        <img src="${querySnapshot.docs[0].data().ProfileImage}">
                                                    </div>
                                                    <div class="name-of-user-search">
                                                        <p>${querySnapshot.docs[0].data().Name}</p>
                                                    </div>
                                                    <div class="date-posted-search">
                                                        <p>${formatDate(doc.data().datePosted)}</p>
                                                    </div>
                                                </div>
                                                <a href = "product_detail.html?id=${doc.id}"><div class="content-of-product">
                                                    <div class="product-image-search">
                                                        <img src="${pathImage}">
                                                    </div>
                                                    <div class="description-of-product-search">
                                                        <div class="title-of-product-search">
                                                            <p>${doc.data().title.slice(0, 50)}</p>
                                                        </div>
                                                        <div class="text-of-product-search">
                                                            <p>${doc.data().description.slice(0, 100)}</p>
                                                        </div>
                                                    </div>
                                                </div></a>
                            
                                            </div>
                                            `;

                            const theme1 = localStorage.getItem("theme");

                            if (theme1 == "dark") {

                                document.querySelectorAll('.title-of-product-search').forEach((result) => {
                                    result.style.color = "whitesmoke";
                                })
                                document.querySelectorAll('.text-of-product-search').forEach((result) => {
                                    result.style.color = "whitesmoke";
                                })

                                document.body.style.backgroundColor = "#18191a";
                                document.querySelector('.rezultate-word').style.color = "whitesmoke";
                                document.querySelectorAll('.result-search-page').forEach((result) => {
                                    result.style.color = "whitesmoke";
                                    result.style.backgroundColor = "#242526";
                                    result.style.border = "1px solid gray";
                                })

                                document.querySelectorAll('.title-of-product-search').forEach((result) => {
                                    result.style.color = "whitesmoke";
                                })
                                document.querySelectorAll('.text-of-product-search').forEach((result) => {
                                    result.style.color = "whitesmoke";
                                })

                               

                                document.getElementsByClassName('search-field-input')[0].style.backgroundColor = "#3a3b3c";
                                document.getElementsByClassName('search-field-input')[0].style.border = "1px solid gray";
                                document.getElementsByClassName('search-field-input')[0].style.color = "whitesmoke";
                                
                                document.querySelectorAll('.fa-magnifying-glass')[2].style.color = "whitesmoke";

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
                            else {

                                document.querySelectorAll('.title-of-product-search').forEach((result) => {
                                    result.style.color = "black";
                                })
                                document.querySelectorAll('.text-of-product-search').forEach((result) => {
                                    result.style.color = "black";
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

                        }

                    })
                }
            })
        })
    }

}


searchButton.addEventListener("click",getSearchResults);
searchButton.addEventListener("keypress",(event) => {
    if (event.code == "Enter"){
        getSearchResults();
    }
})
