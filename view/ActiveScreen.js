const view = {}
view.setActiveScreen = (screenName) => {
    document.getElementById('app').innerHTML = components[screenName];
}