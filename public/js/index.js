
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDPJUs2or3u-TIzsksHiNCFzaHLlW8iQW0",
    authDomain: "fir-4d080.firebaseapp.com",
    databaseURL: "https://fir-4d080-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "fir-4d080",
    storageBucket: "fir-4d080.appspot.com",
    messagingSenderId: "66142859629",
    appId: "1:66142859629:web:dcbf7a4303e9ea46afea64",
    measurementId: "G-WT1SW6G7LZ"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.auth.Auth.Persistence.LOCAl;

document.getElementById("btn-logout").onclick = function () {
    firebase.auth().signOut();
}
firebase.auth().onAuthStateChanged(function (user) {
    if (!user) {
        window.location.href = "login";
    }
});