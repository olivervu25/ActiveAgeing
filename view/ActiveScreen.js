// this code to rerun js file
const reCallJsFiles = (screenName)=>{
    //$.getScript( "model/navigation.js");
      if (screenName=="loginScreen"){
        $.getScript("model/log_in.js");
      }
    // $.getScript("lib/mobile-nav/mobile-nav.js");
    // $.getScript("contactform/contactform.js");
    //$.getScript("public/js/main.js");
    // $.getScript('lib/isotope/isotope.pkgd.min.js');
    // $.getScript("lib/counterup/counterup.min.js");
   
    
}
const view = {}
view.setActiveScreen = (screenName) => {
  console.log('change to ' + screenName);
  currentScreen = screenName;
  if (screenName == 'loginScreen')
  {
    document.querySelector('body').innerHTML = components[screenName];
  }
  else{
      document.getElementById('app').innerHTML = components[screenName];
    }
    // console.log(language);
  if (language == "english") changeToEnglish();
  //NavigationActive();
  reCallJsFiles(screenName);
    
}