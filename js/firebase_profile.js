function formatDate(stamp) {
    let data = new Date(stamp);
    let an = data.getFullYear();
    let luna = data.getMonth() + 1;
    let zi = data.getDate();
    let result = zi + "." + luna + "." + an;

    return result;
}

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        document.querySelector('.profile-image-user-profile').src = user.photoURL;
        let profileContainer = document.querySelector('.profile-info-container');
        const adsContainer = document.querySelector(".ads-profile");
        profileContainer.innerHTML = `
                                <div class="image-of-user">
                                <img src = "${user.photoURL}" width="180" height="180">
                                </div>
                                <div class="user-name-info">
                                    <p>${user.displayName}</p>
                                </div>
                                <div class="user-email-info">
                                    <p>${user.email}</p>
                                </div>  
                                <div class="profile-btns-func">
                                    <a href = "create_ad.html"><button class="btn-for-profile">Creează un anunț<i class="fa-solid fa-plus" style = "position:relative;left:5px;top:2px"></i></button></a>
                                    <a href = "create_post.html"><button class="btn-for-profile">Creează o postare<i class="fa-solid fa-plus" style = "position:relative;left:5px;top:2px"></i></button></a>
                                    <a href = "cart_delete.html"><button class="btn-for-profile" style = "background-color:#f34642">Golește coșul<i class="fa-solid fa-cart-arrow-down" style = "color:white;position:relative;left:5px;top:2px"></i></button></a>
                                    <button onclick = "logoutUser()" class="btn-for-profile" style = "margin-top:60px;">Ieși din cont<i class="fa-solid fa-arrow-right-from-bracket" style = "position:relative;top:2px;left:7px;"></i></button>
                                    </div>
                                    `;
        
        adsDb.where("authorId", "==", user.uid).get().then((querySnapshot) => {
            adsContainer.innerHTML = "<h3>Anunțurile mele:</h3>";
            querySnapshot.forEach((ad) => {
                newUrl = "";
                if (ad.data().hasImageF == "TRUE") {
                    let storageRefAdRec = storage.ref().child(ad.id + "/");// Referinta la folderul anuntului in storage
                    storageRefAdRec.listAll().then((res) => {
                        storage.ref().child(res.items[0].fullPath).getDownloadURL().then((url) => {
                            adsContainer.innerHTML += `<div class="cart-product">
                                                            <div class="user-info-cart">
                                                                <div class="user-image-cart">
                                                                    <img width = "30" height = "30" src="${user.photoURL}">
                                                                </div>
                                                                <div class="user-name-cart">
                                                                    <p>${user.displayName}</p>
                                                                </div>
                                                                <div class="date-posted-product-cart">
                                                                    <p>${formatDate(ad.data().datePosted)}</p>
                                                                </div>
                                                            </div>
                                                            <div class="product-info-section">
                                                                <div class="product-image-cart">
                                                                    <img src="${url}">
                                                                </div>
                                                                <div class="product-info-words">
                                                                    <div class="title-of-product-cart">
                                                                        <p>${ad.data().title}</p>
                                                                    </div>
                                                                    <div class="description-of-product-cart">
                                                                        <p>${ad.data().description}</p>
                                                                    </div>
                                                                    <div class="price-of-product-cart">
                                                                        <p>${ad.data().price} lei</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="bottom-bar-profile">
                                                                <div class="functional-buttons">
                                                                    <a href = "edit_ad.html?id=${ad.id}"><button class="edit-btn-ad">Editează</button></a>
                                                                    <a href = "confirm_delete_ad.html?id=${ad.id}"><button class="delete-btn-ad">Șterge</button></a>
                                                                </div>
                                                            </div>
                                                        </div>`;

                            const theme1 = localStorage.getItem("theme");

                            if (theme1 == "dark") {

                                document.body.style.backgroundColor = "#18191a";
                                document.querySelector('.profile-container').style.backgroundColor = "#18191a";
                                document.querySelector('.profile-info-container').style.backgroundColor = "#242526";
                                document.querySelector('.profile-info-container').style.border = "none";
                                document.querySelector('.user-name-info').children[0].style.color = "lightgray";
                                document.querySelector('.user-email-info').children[0].style.color = "lightgray";
                                document.querySelector('.ads-profile').style.color = "whitesmoke";
                                document.querySelectorAll('.cart-product').forEach((cart) => {
                                    cart.style.backgroundColor = "#242526";
                                    cart.style.boxShadow = "none";
                                })

                                document.querySelectorAll('.description-of-product-cart').forEach((cart) => {
                                    cart.style.color = "whitesmoke";
                                })
                                document.querySelector('.user-name-cart').style.backgorundColor = "#242526";
                                document.querySelectorAll('.edit-btn-ad').forEach((btn) => {
                                    btn.style.backgroundColor = "#2f3031";
                                })
                                document.querySelectorAll('.delete-btn-ad').forEach((button) => {
                                    button.style.backgroundColor = "#2f3031";
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
                            else {

                                document.body.style.backgroundColor = "whitesmoke";
                                document.querySelector('.profile-container').style.backgroundColor = "whitesmoke";
                                document.querySelector('.profile-info-container').style.backgroundColor = "whitesmoke";
                                document.querySelector('.profile-info-container').style.border = "1px solid lightgray";
                                document.querySelector('.user-name-info').children[0].style.color = "#3c505f";
                                document.querySelector('.user-email-info').children[0].style.color = "#3c505f";
                                document.querySelector('.ads-profile').style.color = "black";
                                document.querySelectorAll('.cart-product').forEach((cart) => {
                                    cart.style.backgroundColor = "white";
                                    cart.style.boxShadow = "0px 0px 10px lightgray";
                                })

                                document.querySelectorAll('.description-of-product-cart').forEach((cart) => {
                                    cart.style.color = "gray";
                                })
                                document.querySelector('.user-name-cart').style.backgorundColor = "whitesmoke";
                                document.querySelector('.functional-buttons').children[0].style.backgorundColor = "white";
                                document.querySelector('.functional-buttons').children[1].style.backgorundColor = "white";
                                document.querySelectorAll('.edit-btn-ad').forEach((btn) => {
                                    btn.style.backgorundColor = "black";
                                })
                                document.querySelectorAll('.delete-btn-ad').forEach((button) => {
                                    button.style.backgorundColor = "white";
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
                    let storageRefAdRec = storage.ref().child("default_images/default_product.png");
                    storageRefAdRec.getDownloadURL()
                        .then((url) => {
                            adsContainer.innerHTML += `<div class="cart-product">
                                                            <div class="user-info-cart">
                                                                <div class="user-image-cart">
                                                                    <img width = "30" height = "30"  src="${user.photoURL}">
                                                                </div>
                                                                <div class="user-name-cart">
                                                                    <p>${user.displayName}</p>
                                                                </div>
                                                                <div class="date-posted-product-cart">
                                                                    <p>${formatDate(ad.data().datePosted)}</p>
                                                                </div>
                                                            </div>
                                                            <div class="product-info-section">
                                                                <div class="product-image-cart">
                                                                    <img src="${url}">
                                                                </div>
                                                                <div class="product-info-words">
                                                                    <div class="title-of-product-cart">
                                                                        <p>${ad.data().title}</p>
                                                                    </div>
                                                                    <div class="description-of-product-cart">
                                                                        <p>${ad.data().description}</p>
                                                                    </div>
                                                                    <div class="price-of-product-cart">
                                                                        <p>${ad.data().price} lei</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="bottom-bar-profile">
                                                                <div class="functional-buttons">
                                                                <a href = "edit_ad.html?id=${ad.id}"><button class="edit-btn-ad">Editează</button></a>
                                                                <a href = "confirm_delete_ad.html?id=${ad.id}"><button class="delete-btn-ad">Șterge</button></a>
                                                                </div>
                                                            </div>
                                                        </div>`;

                            const theme1 = localStorage.getItem("theme");

                            if (theme1 == "dark") {

                                document.body.style.backgroundColor = "#18191a";
                                document.querySelector('.profile-container').style.backgroundColor = "#18191a";
                                document.querySelector('.profile-info-container').style.backgroundColor = "#242526";
                                document.querySelector('.profile-info-container').style.border = "none";
                                document.querySelector('.user-name-info').children[0].style.color = "lightgray";
                                document.querySelector('.user-email-info').children[0].style.color = "lightgray";
                                document.querySelector('.ads-profile').style.color = "whitesmoke";
                                document.querySelectorAll('.cart-product').forEach((cart) => {
                                    cart.style.backgroundColor = "#242526";
                                    cart.style.boxShadow = "none";
                                })

                                document.querySelectorAll('.description-of-product-cart').forEach((cart) => {
                                    cart.style.color = "whitesmoke";
                                })
                                document.querySelector('.user-name-cart').style.backgorundColor = "#242526";
                                document.querySelectorAll('.edit-btn-ad').forEach((btn) => {
                                    btn.style.backgroundColor = "#2f3031";
                                })
                                document.querySelectorAll('.delete-btn-ad').forEach((button) => {
                                    button.style.backgroundColor = "#2f3031";
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
                            else {

                                document.body.style.backgroundColor = "whitesmoke";
                                document.querySelector('.profile-container').style.backgroundColor = "whitesmoke";
                                document.querySelector('.profile-info-container').style.backgroundColor = "whitesmoke";
                                document.querySelector('.profile-info-container').style.border = "1px solid lightgray";
                                document.querySelector('.user-name-info').children[0].style.color = "#3c505f";
                                document.querySelector('.user-email-info').children[0].style.color = "#3c505f";
                                document.querySelector('.ads-profile').style.color = "black";
                                document.querySelectorAll('.cart-product').forEach((cart) => {
                                    cart.style.backgroundColor = "white";
                                    cart.style.boxShadow = "0px 0px 10px lightgray";
                                })

                                document.querySelectorAll('.description-of-product-cart').forEach((cart) => {
                                    cart.style.color = "gray";
                                })
                                document.querySelector('.user-name-cart').style.backgorundColor = "whitesmoke";
                                document.querySelector('.functional-buttons').children[0].style.backgorundColor = "white";
                                document.querySelector('.functional-buttons').children[1].style.backgorundColor = "white";
                                document.querySelectorAll('.edit-btn-ad').forEach((btn) => {
                                    btn.style.backgorundColor = "black";
                                })
                                document.querySelectorAll('.delete-btn-ad').forEach((button) => {
                                    button.style.backgorundColor = "white";
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
            });
        }).then(() =>{
            document.body.style.display = "block";
        });


    } else {
        window.location = "login.html";
    }
});