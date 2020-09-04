import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCHgCQrZ6s_Eko9GPBGrAQ6yBhmT8C8ch4",
    authDomain: "facebook-messenger-clone-594a3.firebaseapp.com",
    databaseURL: "https://facebook-messenger-clone-594a3.firebaseio.com",
    projectId: "facebook-messenger-clone-594a3",
    storageBucket: "facebook-messenger-clone-594a3.appspot.com",
    messagingSenderId: "501135139146",
    appId: "1:501135139146:web:ba9685b97e18f58fb5e1b3",
    measurementId: "G-Y1R4DVP7YC"
});

const db = firebaseApp.firestore();

export default db;