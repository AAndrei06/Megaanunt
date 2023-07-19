const url = new URL(document.location);
let id = url.searchParams.get("id");

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        currentLoggedInUser = user;
        adsDb.doc(id).get().then((doc) => {
            if (currentLoggedInUser.uid == doc.data().authorId) {
                function redirectToHome(){
                    window.location = "product_detail.html?id="+doc.id;
                }
                document.querySelector('.user-profile-image-edit').src = currentLoggedInUser.photoURL;
                const titleFieldEdit = document.getElementById("title-of-ad-edit");
                const contentFieldEdit = document.getElementById("product-description-edit-ad");
                const priceFieldEdit = document.getElementById("price-of-ad-edit");
                const phoneNumberAd = document.getElementById("phone-number-edit-ad");
                const contactData = document.getElementById("contact-data-edit-ad");
                const checkBoxes = document.querySelectorAll("#check-element-box-edit");
                const editBtn = document.getElementById("edit-ad-btn");
                titleFieldEdit.value = doc.data().title;
                contentFieldEdit.value = doc.data().description;
                priceFieldEdit.value = doc.data().price;
                phoneNumberAd.value = doc.data().numberTel;
                contactData.value = doc.data().contacts;
                for (let i = 0;i < doc.data().categories.length;i++){
                    document.querySelector(`input[value=${doc.data().categories[i]}]`).checked = true;
                }
                let newCheckBox = [];
                document.body.style.display = "block";
                editBtn.onclick = () => {
                    for (let i = 0;i < checkBoxes.length;i++)
                    {
                        if (checkBoxes[i].checked){
                            newCheckBox.push(checkBoxes[i].value);
                        }
                    }
                    doc.ref.update({
                        title:titleFieldEdit.value,
                        description:contentFieldEdit.value,
                        price:priceFieldEdit.value,
                        numberTel:phoneNumberAd.value,
                        contacts:contactData.value,
                        categories:newCheckBox
                    }).then(redirectToHome);
                }
            }
        })
    } else {
        window.location = "login.html";
    }
});