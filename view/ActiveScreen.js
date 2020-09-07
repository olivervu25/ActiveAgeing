// this code to rerun js file
const reCallJsFiles = ()=>{
      $.getScript( "model/navigation.js");
    // $.getScript("lib/mobile-nav/mobile-nav.js");
    // $.getScript("contactform/contactform.js");
      //$.getScript("public/js/main.js");
    // $.getScript('lib/isotope/isotope.pkgd.min.js');
    // $.getScript("lib/counterup/counterup.min.js");
   
    
}
const  NavigationActive = ()=>{
    // this code to fix hover problem
    // Navigation active state on scroll
        var nav_sections = $('section');
        var main_nav = $('.main-nav, .mobile-nav');
        var main_nav_height = $('#header').outerHeight();

        $(window).on('scroll', function () {
            var cur_pos = $(this).scrollTop();
        
            nav_sections.each(function() {
            var top = $(this).offset().top - main_nav_height,
                bottom = top + $(this).outerHeight();
        
            if (cur_pos >= top && cur_pos <= bottom) {
                main_nav.find('li').removeClass('active');
                main_nav.find('a[href="#'+$(this).attr('id')+'"]').parent('li').addClass('active');
            }
            });
        });
        $(window).scroll(function() {
            if ($(this).scrollTop() > 100) {
              $('.back-to-top').fadeIn('slow');
            } else {
              $('.back-to-top').fadeOut('slow');
            }
          });7
        $('.back-to-top').click(function(){
            $('html, body').animate({scrollTop : 0},1500, 'easeInOutExpo');
            return false;
          });
}
const view = {}
view.setActiveScreen = (screenName) => {
    document.getElementById('app').innerHTML = components[screenName];
    NavigationActive();
    reCallJsFiles();
    
}