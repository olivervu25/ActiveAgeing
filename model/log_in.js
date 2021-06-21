console.log("login.js");
var logIn = (event)=>{
    event.preventDefault();
    console.log("clicked");
    var email = $("input[name='email']")[0].value;
    var password  = $("input[name='pass']")[0].value;
    console.log(email);
    console.log(password);
    firebase.auth().signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                    console.log("signed in");
                    location.reload();
                    // Signed in
                    var user = userCredential.user;
                    // ...
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                swal({
                    title: "Failed!",
                    text: errorMessage,
                    icon: "error",
                    buttons: {
                        confirm : {text:'ok',className:'ok-btn'},
                    }
                });
            });
}

$(".login100-form-btn").on("click",logIn);
