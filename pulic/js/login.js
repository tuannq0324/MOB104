document.getElementById("btn-login").onclick = function () {
    console.log("clicked");
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value

    if (email !== "" && password !== "") {
        if (email === "admin@gmail.com" || email === "tuan51002@gmail.com"
            || email === "tuan051002@gmail.com") {
            var result = firebase.auth().signInWithEmailAndPassword(email, password);
            result.catch(function (error) {
                var errorCode = error.code;
                var errorMessage = error.message;

                console.log(errorCode);
                console.log(errorMessage);

                window.alert("Message: " + errorMessage)
            })
            firebase.auth().onAuthStateChanged(function (user) {
                if (user) {
                    window.location.href = "home";
                    window.alert("Login succesfully")
                }
            });
        }
        else {
            window.alert("You don't have permistion to login.")
        }
    }
    else {
        window.alert('Form is incomplete. Please fill out all fileds.')
    }
};