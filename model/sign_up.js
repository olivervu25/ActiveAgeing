
var submitUserInfor = function (event){
    event.preventDefault();
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
       if (response.status == 201)  swal({
            title: "Success!",
            text: "Your information has been recorded, thank you very much!",
            icon: "success",
            buttons: {
                confirm : {text:'ok',className:'ok-btn'},
            }
        });
       //swal("Success!", "Your information has been recorded, thank you very much!", "success");
    }).catch(error => {
        console.log(error);
        swal({
            title: "Failed!",
            text: "Request failed with status code 400",
            icon: "error",
            buttons: {
                confirm : {text:'ok',className:'ok-btn'},
            }
        });
        //swal("Failed", "Request failed with status code 400", "error");
    })
}
$("#submit_btn button").on('click',submitUserInfor);
