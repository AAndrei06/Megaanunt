firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        function formatDateCart(stamp) {
            let data = new Date(stamp);
            let an = data.getFullYear();
            let luna = data.getMonth() + 1;
            let zi = data.getDate();
            let result = zi + "." + luna + "." + an;

            return result;
        }

        document.querySelector(".image-profile-cart").src = user.photoURL;
        let cartContainer = document.querySelector(".container-content-cart");
        let nrOfProducts = document.getElementById("number-of-products-in-cart");
        cartsDb.where("userID", "==", user.uid).get().then((querySnapshot) => {
            querySnapshot.forEach((cart) => {
                cart.data().products.forEach((product) => {
                    adsDb.doc(product).get().then((doc) => {
                        usersDb.where("ID", "==", doc.data().authorId).get().then((querySnapshot) => {
                            querySnapshot.forEach((authorUser) => {
                                if (doc.data().hasImageF == "TRUE") {
                                    let storageRefCart = storage.ref().child(`${doc.id}/`);
                                    storageRefCart.listAll().then((res) => {
                                        storage.ref().child(res.items[0].fullPath).getDownloadURL().then((url) => {
                                            cartContainer.innerHTML += `
                                            <div class="cart-product">
                                                <div class="user-info-cart">
                                                    <div class="user-image-cart">
                                                        <img height = "30" width="30" src="${authorUser.data().ProfileImage}">
                                                    </div>
                                                    <div class="user-name-cart">
                                                        <p>${authorUser.data().Name}</p>
                                                    </div>
                                                    <div class="date-posted-product-cart">
                                                        <p>${formatDateCart(doc.data().datePosted)}</p>
                                                    </div>
                                                </div>
                                                <div class="product-info-section">
                                                    <div class="product-image-cart">
                                                        <img src="${url}">
                                                    </div>
                                                    <div class="product-info-words">
                                                        <div class="title-of-product-cart">
                                                            <p>${doc.data().title}</p>
                                                        </div>
                                                        <div class="description-of-product-cart">
                                                            <p>${doc.data().description}</p>
                                                        </div>
                                                        <div class="price-of-product-cart">
                                                            <p>${doc.data().price} lei</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                                    `;

                                            nrOfProducts.innerHTML++;
                                            const theme1 = localStorage.getItem("theme");

if (theme1 == "dark"){

		document.body.style.backgroundColor = "#18191a";
		document.querySelector('.container-content-main-content').style.backgroundColor = "#18191a";
		document.querySelector('.container-content-cart').style.backgroundColor = "#18191a";
		document.querySelector('.cart-products-count').style.color = "whitesmoke";
		document.querySelectorAll('.cart-product').forEach((cart_product) =>{
			cart_product.style.backgroundColor = "#242526";
			cart_product.style.color = "whitesmoke";
			cart_product.style.boxShadow = "none";
		})

		document.querySelectorAll('.description-of-product-cart').forEach((description) =>{
			description.style.color = "lightgray";
		})

		document.querySelectorAll('.remove-all-products').forEach((remove) =>{
			remove.style.backgroundColor = "#3a3b3c";
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
		document.querySelector('.container-content-main-content').style.backgroundColor = "whitesmoke";
		document.querySelector('.container-content-cart').style.backgroundColor = "whitesmoke";
		document.querySelector('.cart-products-count').style.color = "black";
		document.querySelectorAll('.cart-product').forEach((cart_product) =>{
			cart_product.style.backgroundColor = "white";
			cart_product.style.color = "black";
			cart_product.style.boxShadow = "0px 0px 5px lightgray";
		})
		document.querySelectorAll('.remove-all-products').forEach((remove) =>{
			remove.style.backgroundColor = "#6b777c";
		})
		document.querySelectorAll('.description-of-product-cart').forEach((description) =>{
			description.style.color = "black";
		})

		document.querySelectorAll('.remove-all-products').forEach((remove) =>{
			remove.style.backgroundColor = "white";
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
                                    })
                                } else {
                                    let imagePath = "../images/default_product.png";
                                    cartContainer.innerHTML += `
                                    <div class="cart-product">
                                        <div class="user-info-cart">
                                            <div class="user-image-cart">
                                                <img height = "30" width="30" src="${authorUser.data().ProfileImage}">
                                            </div>
                                            <div class="user-name-cart">
                                                <p>${authorUser.data().Name}</p>
                                            </div>
                                            <div class="date-posted-product-cart">
                                                <p>${formatDateCart(doc.data().datePosted)}</p>
                                            </div>
                                        </div>
                                        <div class="product-info-section">
                                            <div class="product-image-cart">
                                                <img src="${imagePath}">
                                            </div>
                                            <div class="product-info-words">
                                                <div class="title-of-product-cart">
                                                    <p>${doc.data().title}</p>
                                                </div>
                                                <div class="description-of-product-cart">
                                                    <p>${doc.data().description}</p>
                                                </div>
                                                <div class="price-of-product-cart">
                                                    <p>${doc.data().price} lei</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                            `;
                                    nrOfProducts.innerHTML++;

                                    const theme1 = localStorage.getItem("theme");

if (theme1 == "dark"){

		document.body.style.backgroundColor = "#18191a";
		document.querySelector('.container-content-main-content').style.backgroundColor = "#18191a";
		document.querySelector('.container-content-cart').style.backgroundColor = "#18191a";
		document.querySelector('.cart-products-count').style.color = "whitesmoke";
		document.querySelectorAll('.cart-product').forEach((cart_product) =>{
			cart_product.style.backgroundColor = "#242526";
			cart_product.style.color = "whitesmoke";
			cart_product.style.boxShadow = "none";
		})

		document.querySelectorAll('.description-of-product-cart').forEach((description) =>{
			description.style.color = "lightgray";
		})

		document.querySelectorAll('.remove-all-products').forEach((remove) =>{
			remove.style.backgroundColor = "#3a3b3c";
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
		document.querySelector('.container-content-main-content').style.backgroundColor = "whitesmoke";
		document.querySelector('.container-content-cart').style.backgroundColor = "whitesmoke";
		document.querySelector('.cart-products-count').style.color = "black";
		document.querySelectorAll('.cart-product').forEach((cart_product) =>{
			cart_product.style.backgroundColor = "white";
			cart_product.style.color = "black";
			cart_product.style.boxShadow = "0px 0px 5px lightgray";
		})
		document.querySelectorAll('.remove-all-products').forEach((remove) =>{
			remove.style.backgroundColor = "#6b777c";
		})
		document.querySelectorAll('.description-of-product-cart').forEach((description) =>{
			description.style.color = "black";
		})

		document.querySelectorAll('.remove-all-products').forEach((remove) =>{
			remove.style.backgroundColor = "white";
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
                        });
                    })
                })
            })
        })
        

    } else {
        window.location = "login.html";

    }
});