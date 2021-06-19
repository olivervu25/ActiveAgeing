
// Du navigation page 
    // home page
    $('#home').on('click',function(){
        console.log('Change to home page');
        view.setActiveScreen('welcomeScreen');
    });
    
    //  univesity page
    $('#scholarship').on('click',function(){
        view.setActiveScreen('scholarshipScreen');
        JsScholarship();
        $.getScript('public/js/FAQs.js');
    });

    $('#university').on('click',function(event){
        event.preventDefault();
        console.log('Change to university page');
        view.setActiveScreen('universityScreen');
         JsPorfolio();
         document.getElementById('app').scrollIntoView()
    });

    // student life page
    $('#life').on('click',function(event){
        event.preventDefault();
        view.setActiveScreen('studentLifeScreen');
        JsPorfolio();
        document.getElementById('app').scrollIntoView();
        $.getScript( "model/sign_up.js");
    })
    $('#student-life').on('click',function(){
        view.setActiveScreen('studentLifeScreen');
        event.preventDefault();
        JsPorfolio();
        document.getElementById('portfolio').scrollIntoView();
        
        
    })
    $('#student-life-1').on('click',function(){
        view.setActiveScreen('studentLifeScreen');
        event.preventDefault()
        document.getElementById('portfolio').scrollIntoView()
    })
    $('#student-life-2').on('click',function(){
        view.setActiveScreen('studentLifeScreen');
        event.preventDefault()
        document.getElementById('portfolio').scrollIntoView()
    })
    $('#student-life-3').on('click',function(){
        view.setActiveScreen('studentLifeScreen');
        event.preventDefault()
        document.getElementById('portfolio').scrollIntoView()
    })
    $('#student-life-4').on('click',function(){
        view.setActiveScreen('studentLifeScreen');
        event.preventDefault()
        document.getElementById('portfolio').scrollIntoView()
    })
    $('#student-life-5').on('click',function(){
        view.setActiveScreen('studentLifeScreen');
        event.preventDefault()
        document.getElementById('portfolio').scrollIntoView()
    })


//These lines of code below help us to commute from another page to div in home page
    $('#about-us').on('click',function(event){
        view.setActiveScreen('welcomeScreen');
        event.preventDefault()
        document.getElementById('about').scrollIntoView()
    })
    $('#contact-us').on('click',function(event){
        view.setActiveScreen('welcomeScreen');
        event.preventDefault()
        document.getElementById('footer').scrollIntoView()
    })
    //find page
    $('#find-uni').on('click',function(event){
        event.preventDefault();
        view.setActiveScreen('findScreen');
        document.getElementById('intro').scrollIntoView()
        //$.getScript( "public/js/findPage.js");
        $.getScript( "model/retirement_planing.js");
    });
    
    $('#find-btn').on('click',function(event){
        event.preventDefault();
        view.setActiveScreen('findScreen');
        document.getElementById('intro').scrollIntoView()
        $.getScript( "public/js/findPage.js");
    })

    // new code for active ageing
    
    $('#learn_more_about').on('click',function(){
        view.setActiveScreen('aboutScreen');
    })

    $('#callToAction').on('click', function(){
        view.setActiveScreen('studentLifeScreen');
    })
