const view = {}
view.setActiveScreen = (screenName) => {
    switch (screenName){
        case 'welcomeScreen':
            document.getElementById('app').innerHTML = components.welcomeScreen
        break;
    }
}