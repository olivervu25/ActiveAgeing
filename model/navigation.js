console.log('navigation.js');
//alert("ahihi");
// Du navigation page 
    // home page
    $('.home-nav').on('click',function(){
        view.setActiveScreen('welcomeScreen');
        NavigationActive(`.${this.className}`);
    });
    
    //  univesity page
    $('.scholarship-nav').on('click',function(){
        view.setActiveScreen('scholarshipScreen');
        // renderInformationData('events')
        JsScholarship();
        // $.getScript('public/js/FAQs.js');
        NavigationActive(`.${this.className}`);
    });

    $('.university-nav').on('click',function(event){
        event.preventDefault();
        view.setActiveScreen('universityScreen');
         JsPorfolio();
         document.getElementById('app').scrollIntoView();
         NavigationActive(`.${this.className}`);
    });

    // student life page
    $('.life-nav').on('click',function(event){
        event.preventDefault();
        view.setActiveScreen('studentLifeScreen');
        JsPorfolio();
        document.getElementById('app').scrollIntoView();
        $.getScript( "model/sign_up.js");
        NavigationActive(`.${this.className}`);
    })
    
    $('.about-nav').on('click',function(event){
        event.preventDefault();
        view.setActiveScreen('aboutScreen');
        NavigationActive(`.${this.className}`);
    })
    $('.solution-nav').on('click',function(event){
        event.preventDefault();
        view.setActiveScreen('solutionScreen');
        NavigationActive(`.${this.className}`);
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

    //find page
    $('.find-uni-nav').on('click',function(event){
        event.preventDefault();
        view.setActiveScreen('findScreen');
        document.getElementById('intro').scrollIntoView()
        //$.getScript( "public/js/findPage.js");
        $.getScript( "model/retirement_planing.js");
        NavigationActive(`.${this.className}`);
    });
    
    $('#find-btn').on('click',function(event){
        event.preventDefault();
        view.setActiveScreen('findScreen');
        document.getElementById('intro').scrollIntoView()
        $.getScript( "public/js/findPage.js");
    })

    // new code for active ageing
    
    $('.prepare-retire').on('click',function (e) {
        e.preventDefault();
        view.setActiveScreen('prepareRetire');
        renderInformationData('prepare-retire');
    })
    
    $('.prosperous-retire').on('click',function (e) {
        e.preventDefault();
        view.setActiveScreen('prosperousRetire');
        renderInformationData('prosperous-retire');
    })
    
    $('.healthy-retire').on('click',function (e) {
        e.preventDefault();
        view.setActiveScreen('healthyRetire');
        renderInformationData('healthy-retire');
    })
    $('.happy-retire').on('click',function (e) {
        e.preventDefault();
        view.setActiveScreen('happyRetire');
        renderInformationData('happy-retire');
    })
    $('.events').on('click', function (e) {
        e.preventDefault();
        view.setActiveScreen('events');
        renderInformationData('events');
    })
    const  NavigationActive = (className)=>{
        // this code to fix hover problem
        // Navigation active state on scroll
            var nav_sections = $('section');
            var main_nav = $('.main-nav, .mobile-nav');
            main_nav.find('li').removeClass('active');
            var main_nav_height = $('#header').outerHeight();
            //main_nav.find(className).parentElement.className += "active";
            main_nav.find(className).parent('li').addClass('active');
            // $(window).on('scroll', function () {
            //     var cur_pos = $(this).scrollTop();
            
            //     nav_sections.each(function() {
            //     var top = $(this).offset().top - main_nav_height,
            //         bottom = top + $(this).outerHeight();
            
            //     if (cur_pos >= top && cur_pos <= bottom) {
            //         main_nav.find('a[href="#'+$(this).attr('id')+'"]').parent('li').addClass('active');
            //     }
            //     });
            // });
    }
