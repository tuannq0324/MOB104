document.getElementById("btn-login").onclick = function () {
    console.log("clicked");
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value

    if (email !== "" && password !== "") {
        if (email === "admin@gmail.com" || email === "tuan51002@gmail.com"
            || email === "tuan051002@gmail.com" || email === "bao1234@gmail.com") {
            const result = firebase.auth().signInWithEmailAndPassword(email, password);
            result.catch(function (error) {
                const errorCode = error.code;
                const errorMessage = error.message;

                console.log(errorCode);
                console.log(errorMessage);

                window.alert("Message: " + errorMessage)
            })
            firebase.auth().onAuthStateChanged(function (user) {
                if (user) {
                    window.location.href = "home";
                    window.alert("Login successfully")
                }
            });
        }
        else {
            window.alert("You don't have permission to login.")
        }
    }
    else {
        window.alert('Form is incomplete. Please fill out all filed.')
    }
};