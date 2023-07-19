const firebaseConfig = {
	apiKey: "AIzaSyAPqKa2MSQEt-G0kEly-HeY2YEjFbnFpNM",
	authDomain: "megaanunt.firebaseapp.com",
	projectId: "megaanunt",
	storageBucket: "megaanunt.appspot.com",
	messagingSenderId: "1091398450368",
	appId: "1:1091398450368:web:e5cad303c33be121068125",
	measurementId: "G-8TE0GCLPKL"
};


firebase.initializeApp(firebaseConfig);

const auth = firebase.auth(); // Referinta la serviciul de autentificare
const db = firebase.firestore(); // Referinta la baza de date
const storage = firebase.storage(); // Referinta la storage
const usersDb = db.collection("users");
const postsDb = db.collection("posts");
const adsDb = db.collection("anunturi");
const cartsDb = db.collection("carts");

