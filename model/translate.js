$("#engsub").on('click',function(){

    // console.log('Change to English');
    language = "english";
    changeToEnglish();
});

$("#vietsub").on('click',function(){

    // console.log('Change to Vietnamese');
    language = "vietnamese";
    changeToVietnamese();
});
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
    document.getElementById('translate').onclick = translate;
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
    $.getScript( "model/navigation.js");
    $.getScript( "model/retirement_planing.js");
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
    $.getScript( "model/navigation.js");
    $.getScript( "model/retirement_planing.js");
}
var innerTranslate = document.getElementById('status');
if (language == "english" && innerTranslate != null) innerTranslate.innerHTML = "Vietnamese";
