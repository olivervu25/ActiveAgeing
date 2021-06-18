$("#engsub").on('click',function(){

    console.log('Change to English');
    language = "english";
    changeToEnglish();
});

$("#vietsub").on('click',function(){

    console.log('Change to Vietnamese');
    language = "vietnamese";
    changeToVietnamese();
});




function changeToEnglish(){
    console.log("doing translate");
    var obj = document.getElementById("app");
    var inner = obj.innerHTML;
    
    for (var i = 0;i < diction.length;i++)
    {
        console.log(diction[i]);
        var word = diction[i];
        inner = inner.replace(word["Vietnamese"],word["English"]);
    }
    obj.innerHTML = inner;
    reCallJsFiles();
    $.getScript( "model/retirement_planing.js");
}
function changeToVietnamese(){
    var obj = document.getElementById("app");
    var inner = obj.innerHTML;
    for (var i = 0;i < diction.length;i++)
    {
        console.log(diction[i]);
        var word = diction[i];
        inner = inner.replace(word["English"]
        ,word["Vietnamese"]);
    }
    obj.innerHTML = inner;
    reCallJsFiles();
    $.getScript( "model/retirement_planing.js");
}

