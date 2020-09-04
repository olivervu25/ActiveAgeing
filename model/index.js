console.log('index.js');
const init = () => {
    console.log('Window loaded')
    view.setActiveScreen('welcomeScreen')
}
// code like this not worked: window.onload = init // Du : component must be render before js file has run
init();
// Du navigation page 
    //  univesity page
    $('#university').on('click',function(){
        console.log('Chang to univesity page');
        view.setActiveScreen('univesityScreen');
    });