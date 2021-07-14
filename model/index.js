console.log('index.js');
const init = async () => {
    // console.log('Window loaded')
    await view.setActiveScreen(currentScreen);
    //$.getScript("model/navigation.js");
}
// code like this not worked: window.onload = init // Du : component must be rendered before js file has run
init();
$(window).resize(function() {
    console.log(window.innerWidth);
  });