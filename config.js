import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    apiKey: "AIzaSyBjXxYXadzASJT-cGBOiTsG3VzMFujxspw",
    authDomain: "voting-app-12d35.firebaseapp.com",
    databaseURL: "https://voting-app-12d35-default-rtdb.firebaseio.com",
    projectId: "voting-app-12d35",
    storageBucket: "voting-app-12d35.appspot.com",
    messagingSenderId: "48794101666",
    appId: "1:48794101666:web:0ccca382221149708c74fb",
    measurementId: "G-12XBHYP6BB"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();