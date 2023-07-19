
function logoutUser(){
    firebase.auth().signOut().then(() => {
    }).catch((error) => {
        alert("Trebuie să fii logat ca să poți ieși din cont");
    });
}