console.log("login.js");
var logIn = (event)=>{
    event.preventDefault();
    console.log("clicked");
    var email = $("input[id='email']")[0].value;
    var password  = $("input[id='password']")[0].value;
    // var email = $("#email").value;
    // var password = $('#password').value;
    console.log(email);
    console.log(password);
    firebase.auth().signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                    console.log("signed in");
                    window.location.replace("./index.html");
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
$("#login").on("click",logIn);