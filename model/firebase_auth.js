 // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    var firebaseConfig = {
        apiKey: "AIzaSyBdkKahWYfLmiKJaJ28w7QktkSmFh36aOU",
        authDomain: "activeageingvietnam.firebaseapp.com",
        projectId: "activeageingvietnam",
        storageBucket: "activeageingvietnam.appspot.com",
        messagingSenderId: "976829296973",
        appId: "1:976829296973:web:55638ab820c923072dc704",
        measurementId: "G-YD9DZF3FG9"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
      firebase.analytics();

      var email = "nguyenchiemdu@gmail.com";
      var password = "nguchinoi";
    //   firebase.auth().signInWithEmailAndPassword(email, password)
    //     .then((userCredential) => {
    //             console.log("signed in");
    //             // Signed in
    //             var user = userCredential.user;
    //             // ...
    //     })
    //     .catch((error) => {
    //         var errorCode = error.code;
    //         var errorMessage = error.message;
    //     });

    
var signUp = function (event) {
    console.log("clicked");
    event.preventDefault();
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
        console.log("signed in!");
        // Signed in 
        var user = userCredential.user;
        user.sendEmailVerification()
        .then(() => {

            console.log("email sent!");
            console.log(firebase.auth().currentUser.emailVerified);
          // Email verification sent!
          // ...
        });
        // ...
    })
    .catch((error) => {
        console.log("error");
        var errorCode = error.code;
        var errorMessage = error.message;
        // ..
    });    
}

// var myVar = setInterval(myTimer, 1000);

// function myTimer() {
//   //console.log(firebase.auth().currentUser.emailVerified);
//   var user  = firebase.auth().currentUser;
//   console.log(user.email);
// }

$("#signup").on("click",signUp);


