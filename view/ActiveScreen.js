// this code to rerun js file
const reCallJsFiles = ()=>{
      $.getScript( "model/navigation.js");
    // $.getScript("lib/mobile-nav/mobile-nav.js");
    // $.getScript("contactform/contactform.js");
    //$.getScript("public/js/main.js");
    // $.getScript('lib/isotope/isotope.pkgd.min.js');
    // $.getScript("lib/counterup/counterup.min.js");
   
    
}

const view = {}
view.setActiveScreen = (screenName) => {
    document.getElementById('app').innerHTML = components[screenName];
    reCallJsFiles();
}