firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        document.querySelector('.create-ad-profile-image').src = user.photoURL;
        let newURLID = "";
        createAd();
        function createAd() {
            usersDb.where("ID", "==", user.uid).get().then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    let userFromDb = doc.data();
                    const nameOfProduct = document.getElementById("name-of-product-input");
                    const descriptionOfProduct = document.getElementById("description-of-product-input");
                    const priceOfProduct = document.getElementById("price-of-product-input");
                    const phoneNumber = document.getElementById("phone-number-input");
                    const contactData = document.getElementById("contact-data-input");
                    const checkBoxes = document.querySelectorAll(".check-element");
                    const fileSelector = document.getElementById("choose-file");
                    const postAdBtn = document.querySelector(".post-btn-ad");
                    const listOfFields = document.querySelectorAll(".input-element-field");

                    postAdBtn.onclick = () => {
                        let checks = 0;
                        for (let input of listOfFields) {
                            if (input.value.length == 0) {
                                input.style.borderColor = "red";
                                checks++;
                            }
                        }

                        if (checks == 0) {
                            let date = new Date();
                            let checkList = [];
                            let hasImage = "";
                            if (fileSelector.files.length == 0) {
                                hasImage = "FALSE";
                            } else {
                                hasImage = "TRUE";
                            }
                            for (let index = 0; index < checkBoxes.length; index++) {
                                if (checkBoxes[index].checked) {
                                    checkList.push(checkBoxes[index].value);
                                }
                            }
                            adsDb.add({
                                datePosted: date.getTime(),
                                title: nameOfProduct.value || "null",
                                description: descriptionOfProduct.value || "null",
                                price: priceOfProduct.value || 0,
                                numberTel: phoneNumber.value || 0,
                                contacts: contactData.value || "null",
                                categories: checkList || [],
                                authorId: userFromDb.ID || "null",
                                authorImage: userFromDb.ProfileImage || "null",
                                authorName: userFromDb.Name || "null",
                                hasImageF: hasImage
                            }).then((doc) => {
                                newURLID = doc.id;
                                if (fileSelector.files.length != 0) {
                                    for (let i = 0; i < fileSelector.files.length; i++) {
                                        let currentImage = fileSelector.files[i];
                                        uploadImageAsPromise(currentImage);

                                        function uploadImageAsPromise(imageFile) {
                                            return new Promise(function (resolve, reject) {
                                                var storageRef = firebase.storage().ref().child(doc.id + "/" + String(i) + "fileImage.png");
                                                var task = storageRef.put(imageFile);

                                            });
                                        }
                                    }
                                }

                            }).then(() => {
                                for (let input of listOfFields) {
                                    input.value = null;
                                }
                                for (let index = 0; index < checkBoxes.length; index++) {
                                    checkBoxes[index].checked = false;
                                }
                            });
                        }
                    }
                });
            });
        }

    } else {
        window.location = "login.html";
    }
});