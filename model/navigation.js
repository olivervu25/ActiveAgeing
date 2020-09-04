// Du navigation page 
    // home page
    $('#home').on('click',function(){
        console.log('Change to home page');
        view.setActiveScreen('welcomeScreen');
    });
    
    //  univesity page
    $('#university').on('click',function(){
        console.log('Change to university page');
        view.setActiveScreen('universityScreen');
    });