console.log('homepage.js');
$('#learn_more_about').on('click',function(){
    view.setActiveScreen('aboutScreen');
    NavigationActive(`.about-nav`);
})

$('#callToAction').on('click', function(){
    view.setActiveScreen('studentLifeScreen');
})
$('.register-webinar').on('click', function (event) {
    event.preventDefault();
    view.setActiveScreen('studentLifeScreen');
    JsPorfolio();
    document.getElementById('app').scrollIntoView();
    $.getScript( "model/sign_up.js");
    NavigationActive(`.${this.className}`);
  })

  
    $(window).on('load', function () {
      if ($('#preloader').length) {
        $('#preloader').delay(100).fadeOut('slow', function () {
          $(this).remove();
        });
      }
    });
  
    // Back to top button
    $(window).scroll(function() {
      if ($(this).scrollTop() > 100) {
        $('.back-to-top').fadeIn('slow');
      } else {
        $('.back-to-top').fadeOut('slow');
      }
    });
    $('.back-to-top').click(function(){
      $('html, body').animate({scrollTop : 0},1500, 'easeInOutExpo');
      return false;
    });
  
    // Initiate the wowjs animation library
    new WOW().init();
  
    // Header scroll class
    $(window).scroll(function() {
      if ($(this).scrollTop() > 100) {
        $('#header').addClass('header-scrolled');
      } else {
        $('#header').removeClass('header-scrolled');
      }
    });
  
    if ($(window).scrollTop() > 100) {
      $('#header').addClass('header-scrolled');
    }
  
  
  
  
    // jQuery counterUp (used in Whu Us section)
    $('[data-toggle="counter-up"]').counterUp({
      delay: 10,
      time: 1000
    });
  
    // Porfolio isotope and filter
    $(window).on('load', function () {
      var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item'
      });
      $('#portfolio-flters li').on( 'click', function() {
        $("#portfolio-flters li").removeClass('filter-active');
        $(this).addClass('filter-active');
    
        portfolioIsotope.isotope({ filter: $(this).data('filter') });
      });
    });
  
    // Testimonials carousel (uses the Owl Carousel library)
    $(".testimonials-carousel").owlCarousel({
      autoplay: true,
      dots: true,
      loop: true,
      items: 1
    });
  
    // Clients carousel (uses the Owl Carousel library)
    $(".clients-carousel").owlCarousel({
      autoplay: true,
      dots: true,
      loop: true,
      responsive: { 0: { items: 2 }, 768: { items: 4 }, 900: { items: 6 }
      }
    });