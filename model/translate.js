console.log("translate.js");
var translate = function(){
    var text = document.getElementById("status");
    if (text.innerHTML == "Vietnamese") {
        text.innerHTML = "English";
        language = "vietnamese";
        changeToVietnamese();
    }
    else {
        text.innerHTML = "Vietnamese";
        language = "english";
        changeToEnglish();
    }
    if (currentScreen =="findScreen") retirementRecall();
    if (currentScreen == "welcomeScreen") 
        $('#learn_more_about').on('click',function(){
            view.setActiveScreen('aboutScreen');
            NavigationActive(`.about-nav`);
        })
}
$("#translate").on('click',translate);




function changeToEnglish(){
    var innerTranslate = document.getElementById('status');
    if (innerTranslate != null) innerTranslate.innerHTML = "Vietnamese";
    var obj = document.getElementById("app");
    var inner = obj.innerHTML;
    for (var i = 0;i < diction.length;i++)
    {
        var word = diction[i];
        while(inner.includes(word["Vietnamese"])){
            inner = inner.replace(word["Vietnamese"],word["English"]);
        }
    }
    obj.innerHTML = inner;
    document.getElementById("home").innerHTML = "Home";
    document.getElementById("about").innerHTML = "About Us";
    document.getElementById("university").innerHTML = "Social Issues";
    document.getElementById("find-uni").innerHTML = "Make Retirement Plan";
    document.getElementById("scholarship").innerHTML = "Information";
    document.getElementById("life").innerHTML = "Sign up";
    var user = document.getElementById("login");
    if (user != null) user.innerHTML = "Sign In";

}
function changeToVietnamese(){
    var obj = document.getElementById("app");
    var inner = obj.innerHTML;
    for (var i = 0;i < diction.length;i++)
    {
        var word = diction[i];
        inner = inner.replace(word["English"]
        ,word["Vietnamese"]);
    }
    obj.innerHTML = inner;
    document.getElementById("home").innerHTML = "Trang Chủ";
    document.getElementById("about").innerHTML = "Về chúng tôi";
    document.getElementById("university").innerHTML = "Vấn đề xã hội";
    document.getElementById("find-uni").innerHTML = "Lập kế hoạch về hưu";
    document.getElementById("scholarship").innerHTML = "Thông tin";
    document.getElementById("life").innerHTML = "Đăng ký thành viên";
    var user = document.getElementById("login");
    if (user != null) user.innerHTML = "ĐĂNG NHẬP";
}
var innerTranslate = document.getElementById('status');
if (language == "english" && innerTranslate != null) innerTranslate.innerHTML = "Vietnamese";
