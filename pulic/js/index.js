document.getElementById("btn-logout").onclick = function (){
    firebase.auth().signOut();

    firebase.auth().onAuthStateChanged(function (user) {
        if (!user) {
            window.location.href = "login";
        }
    });
}