firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        cartsDb.where("userID","==",user.uid).get().then((querySnapshot) => {
            querySnapshot.forEach((cart) =>{
                let allCartProducts = [];

                cart.ref.update({
                    products:allCartProducts,
                }).then(() => {
                    window.location = "cart.html";
                });
            })
        });
    }else{
        window.location = "login.html";
    }
});
