
var submitUserInfor = function (event){
    event.preventDefault();
    if (firebase.auth().currentUser != null){
        swal({
            title: "Failed!",
            text: "You already signed in. To sign up, please sign out first! ",
            icon: "error",
            buttons: {
                confirm : {text:'ok',className:'ok-btn'},
            }
        });
        return;
    }
    
    var user = {};
    var form = document.querySelector(".contactForm");
    var listInput  = form.querySelectorAll("input");
    for (var i = 0;i< listInput.length;i++){
        user[listInput[i].id] = listInput[i].value;
    }
    //console.log(user);
    axios.post('https://sheetdb.io/api/v1/r8cqosz0yw8m0',{
        "data": user
    }).then( response => {
       if (response.status == 201)  ;
       //swal("Success!", "Your information has been recorded, thank you very much!", "success");
    }).catch(error => {
        console.log(error);
        //swal("Failed", "Request failed with status code 400", "error");
    });

    signUp(user.email,user.password);
}
var signUp = function (email,password) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
        // Signed in 
        var user = userCredential.user;
        user.sendEmailVerification()
        .then(() => {

            console.log("email sent!");
            swal({
                title: "Success!",
                text: `You have successfully registered, email has been sent to ${email}, click on the link to complete the verification process.`,
                icon: "success",
                buttons: {
                    confirm : {text:'ok',className:'ok-btn'},
                }
            }).then(()=>{location.reload();})
          // Email verification sent!
          // ...
        });
        // ...
    })
    .catch((error) => {
        
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        swal({
            title: "Failed!",
            text: errorMessage,
            icon: "error",
            buttons: {
                confirm : {text:'ok',className:'ok-btn'},
            }
        });
        // ..
    });    
}

$("#submit_btn button").on('click',submitUserInfor);
