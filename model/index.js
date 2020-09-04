const init = () => {
    console.log('Window loaded')
    view.setActiveScreen('welcomeScreen')
}
// code like this not worked: window.onload = init // Du : component must be render before js file has run
init();
