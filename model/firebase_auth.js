    console.log("firebase_auth.js");


    var signOut = function (event) {
        event.preventDefault();
        firebase.auth().signOut().then(() => {
            location.reload();
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        });
      }

// var myVar = setInterval(myTimer, 1000);

function myTimer() {
  //console.log(firebase.auth().currentUser.emailVerified);
  var user  = firebase.auth().currentUser;
  console.log(user.email);
}

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      var uid = user.uid;
      var userLi = document.getElementById("user");
      if (userLi!= null) userLi.innerHTML = ` <div class="dropdown">
                                          <img style="height: 40px;width: 40px;" src="public/image/AvatarPic.jpeg" class="sdropdown-toggle rounded-circle" href="#" role="button" id="dropdownUser" data-bs-toggle="dropdown" aria-expanded="false">

                                          <ul class="dropdown-menu" aria-labelledby="dropdownUser">
                                            <li><a style="text-transform: lowercase;" id="email" class="dropdown-item" href="#"></a></li>
                                            <li><a style="text-transform: capitalize;" id="signout" class="dropdown-item" href="#">Đăng xuất</a></li>
                                          </ul>
                                        </div>`
      var email = document.getElementById("email");
      if (email != null) email.innerHTML = user.email.split("@")[0];
      $("#signout").on("click",signOut);
      // ...
    } else {
        console.log("signed out");
      var user = document.getElementById("user");
      if (user != null) user.innerHTML = `<a href="#" id='login'>ĐĂNG NHẬP</a>`;
      $('#login').on('click',function(){
        view.setActiveScreen('loginScreen');
    })

      // User is signed out
      // ...
    }
  });
//$("#signup").on("click",signUp);


