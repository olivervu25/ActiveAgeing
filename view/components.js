const components = {}
components.welcomeScreen = `
<!--==========================
Header
============================-->
<header id="header">

  <div id="topbar">
    <div class="container">
      <div class="social-links">
        <a href="#" class="twitter"><i class="fa fa-twitter"></i></a>
        <a href="#" class="facebook"><i class="fa fa-facebook"></i></a>
        <a href="#" class="linkedin"><i class="fa fa-linkedin"></i></a>
        <a href="#" class="instagram"><i class="fa fa-instagram"></i></a>
      </div>
    </div>
  </div>

  <div class="container">

    <div class="logo float-left">
      <!-- Uncomment below if you prefer to use an image logo -->
      <h1 class="text-light"><a href="#intro" class="scrollto"><span>Russia</span></a></h1>
      <!-- <a href="#header" class="scrollto"><img src="public/image/logo.png" alt="" class="img-fluid"></a> -->
    </div>

    <nav class="main-nav float-right d-none d-lg-block">
      <ul>
        <li class="active"><a id='home' href="#intro">Home</a></li>
        <li><a href="#about">About Us</a></li>
        <li><a id='university' href="#">Universities</a></li>
        <li><a id='find-uni' href="#">Find</a></li>
        <li><a id='scholarship' href="#">Scholarship</a></li>
        <li><a href="#" id='life'>Student Life</a></li>
        <li><a href="#footer">Contact Us</a></li>
      </ul>
    </nav><!-- .main-nav -->
    
  </div>
</header><!-- #header -->

<!--==========================
  Intro Section
============================-->
<section id="intro" class="clearfix">
  <div class="container d-flex h-100">
    <div class="row justify-content-center align-self-center">
      <div class="col-md-6 intro-info order-md-first order-last">
        <h2>Rapid Solutions<br>for Your <span>Business!</span></h2>
        <div>
          <a href="#about" class="btn-get-started scrollto">Get Started</a>
        </div>
      </div>

      <div class="col-md-6 intro-img order-md-last order-first">
        <img src="public/image/intro-img.svg" alt="" class="img-fluid">
      </div>
    </div>

  </div>
</section><!-- #intro -->

<main id="main">

  <!--==========================
    About Us Section
  ============================-->
  <section id="about">

    <div class="container">
      <div class="row">

        <div class="col-lg-5 col-md-6">
          <div class="about-img">
            <img src="public/image/about-img.jpg" alt="">
          </div>
        </div>

        <div class="col-lg-7 col-md-6">
          <div class="about-content">
            <h2>About Us</h2>
            <h3>Odio sed id eos et laboriosam consequatur eos earum soluta.</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <p>Aut dolor id. Sint aliquam consequatur ex ex labore. Et quis qui dolor nulla dolores neque. Aspernatur consectetur omnis numquam quaerat. Sed fugiat nisi. Officiis veniam molestiae. Et vel ut quidem alias veritatis repudiandae ut fugit. Est ut eligendi aspernatur nulla voluptates veniam iusto vel quisquam. Fugit ut maxime incidunt accusantium totam repellendus eum error. Et repudiandae eum iste qui et ut ab alias.</p>
            <ul>
              <li><i class="ion-android-checkmark-circle"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
              <li><i class="ion-android-checkmark-circle"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
              <li><i class="ion-android-checkmark-circle"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

  </section><!-- #about -->

  <!--==========================
    Team Section
  ============================-->
  <section id="team" class="section-bg">
    <div class="container">
      <div class="section-header">
        <h3>Team</h3>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>
      </div>

      <div class="row">

        <div class="col-lg-3 col-md-6 wow fadeInUp">
          <div class="member">
            <img src="public/image/team-1.jpg" class="img-fluid" alt="">
            <div class="member-info">
              <div class="member-info-content">
                <h4>Walter White</h4>
                <span>Chief Executive Officer</span>
                <div class="social">
                  <a href="#"><i class="fa fa-twitter"></i></a>
                  <a href="#"><i class="fa fa-facebook"></i></a>
                  <a href="#"><i class="fa fa-google-plus"></i></a>
                  <a href="#"><i class="fa fa-linkedin"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
          <div class="member">
            <img src="public/image/team-2.jpg" class="img-fluid" alt="">
            <div class="member-info">
              <div class="member-info-content">
                <h4>Sarah Jhonson</h4>
                <span>Product Manager</span>
                <div class="social">
                  <a href="#"><i class="fa fa-twitter"></i></a>
                  <a href="#"><i class="fa fa-facebook"></i></a>
                  <a href="#"><i class="fa fa-google-plus"></i></a>
                  <a href="#"><i class="fa fa-linkedin"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
          <div class="member">
            <img src="public/image/team-3.jpg" class="img-fluid" alt="">
            <div class="member-info">
              <div class="member-info-content">
                <h4>William Anderson</h4>
                <span>CTO</span>
                <div class="social">
                  <a href="#"><i class="fa fa-twitter"></i></a>
                  <a href="#"><i class="fa fa-facebook"></i></a>
                  <a href="#"><i class="fa fa-google-plus"></i></a>
                  <a href="#"><i class="fa fa-linkedin"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
          <div class="member">
            <img src="public/image/team-4.jpg" class="img-fluid" alt="">
            <div class="member-info">
              <div class="member-info-content">
                <h4>Amanda Jepson</h4>
                <span>Accountant</span>
                <div class="social">
                  <a href="#"><i class="fa fa-twitter"></i></a>
                  <a href="#"><i class="fa fa-facebook"></i></a>
                  <a href="#"><i class="fa fa-google-plus"></i></a>
                  <a href="#"><i class="fa fa-linkedin"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  </section><!-- #team -->

  <!--==========================
    Find Section
  ============================-->
  <section id="find" class="section-bg">
    <div class="container">
      <div class="row feature-item mt-5 pt-5">
        <div class="col-lg-6 wow fadeInUp order-1 order-lg-2">
          <img src="public/image/features-2.svg" class="img-fluid" alt="">
        </div>
        
        
         
        <div class="col-lg-6 wow fadeInUp pt-4 pt-lg-0 order-2 order-lg-1 find-university">
          <h2>Find University</h2>
          <h3>Type your University here for more information</h3>
          <!-- Du Search box and Find Button -->
          <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="University's name">
            <div class="input-group-append">
              <button id='find-btn' class="btn blue-btn" type="submit">Find</button>
            </div>
          </div>
        </div>
        
      </div>

    </div>

    <!--==========================
    Footer
  ============================-->
  <footer id="footer" class="section-bg">
    <div class="footer-top">
      <div class="container">
  
        <div class="row">
  
          <div class="col-lg-6">
  
            <div class="row">
  
                <div class="col-sm-6">
  
                  <div class="footer-info">
                    <h3>Rapid</h3>
                    <p>Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra videa magna derita valies darta donna mare fermentum iaculis eu non diam phasellus. Scelerisque felis imperdiet proin fermentum leo. Amet volutpat consequat mauris nunc congue.</p>
                  </div>
  
                  <div class="footer-newsletter">
                    <h4>Our Newsletter</h4>
                    <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna veniam enim veniam illum dolore legam minim quorum culpa amet magna export quem.</p>
                    <form action="" method="post">
                      <input type="email" name="email"><input type="submit"  value="Subscribe">
                    </form>
                  </div>
  
                </div>
  
                <div class="col-sm-6">
                  <div class="footer-links">
                    <h4>Useful Links</h4>
                    <ul>
                      <li><a href="#">Home</a></li>
                      <li><a href="#">About us</a></li>
                      <li><a href="#">Services</a></li>
                      <li><a href="#">Terms of service</a></li>
                      <li><a href="#">Privacy policy</a></li>
                    </ul>
                  </div>
  
                  <div class="footer-links">
                    <h4>Contact Us</h4>
                    <p>
                      A108 Adam Street <br>
                      New York, NY 535022<br>
                      United States <br>
                      <strong>Phone:</strong> +1 5589 55488 55<br>
                      <strong>Email:</strong> info@example.com<br>
                    </p>
                  </div>
  
                  <div class="social-links">
                    <a href="#" class="twitter"><i class="fa fa-twitter"></i></a>
                    <a href="#" class="facebook"><i class="fa fa-facebook"></i></a>
                    <a href="#" class="instagram"><i class="fa fa-instagram"></i></a>
                    <a href="#" class="linkedin"><i class="fa fa-linkedin"></i></a>
                  </div>
  
                </div>
  
            </div>
  
          </div>
  
          <div class="col-lg-6">
  
            <div class="form">
              
              <h4>Send us a message</h4>
              <p>Eos ipsa est voluptates. Nostrum nam libero ipsa vero. Debitis quasi sit eaque numquam similique commodi harum aut temporibus.</p>
              <form action="" method="post" role="form" class="contactForm">
                <div class="form-group">
                  <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                  <div class="validation"></div>
                </div>
                <div class="form-group">
                  <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                  <div class="validation"></div>
                </div>
                <div class="form-group">
                  <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                  <div class="validation"></div>
                </div>
                <div class="form-group">
                  <textarea class="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
                  <div class="validation"></div>
                </div>
  
                <div id="sendmessage">Your message has been sent. Thank you!</div>
                <div id="errormessage"></div>
  
                <div class="text-center"><button type="submit" title="Send Message">Send Message</button></div>
              </form>
            </div>
  
          </div>
  
          
  
        </div>
  
      </div>
    </div>
  
    <div class="container">
      <div class="copyright">
        &copy; Copyright <strong>Rapid</strong>. All Rights Reserved
      </div>
      <div class="credits">
        <!--
          All the links in the footer should remain intact.
          You can delete the links only if you purchased the pro version.
          Licensing information: https://bootstrapmade.com/license/
          Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/buy/?theme=Rapid
        -->
        Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
      </div>
    </div>
  </footer><!-- #footer -->
  

</main>



<a href="#" class="back-to-top"><i class="fa fa-chevron-up"></i></a>
<!-- Uncomment below i you want to use a preloader -->
<!-- <div id="preloader"></div> -->
`;
components.universityScreen = `
<!--==========================
Header
============================-->
<header id="header">

  <div id="topbar">
    <div class="container">
      <div class="social-links">
        <a href="#" class="twitter"><i class="fa fa-twitter"></i></a>
        <a href="#" class="facebook"><i class="fa fa-facebook"></i></a>
        <a href="#" class="linkedin"><i class="fa fa-linkedin"></i></a>
        <a href="#" class="instagram"><i class="fa fa-instagram"></i></a>
      </div>
    </div>
  </div>

  <div class="container">

    <div class="logo float-left">
      <!-- Uncomment below if you prefer to use an image logo -->
      <h1 class="text-light"><a href="#intro" class="scrollto"><span>Russia</span></a></h1>
      <!-- <a href="#header" class="scrollto"><img src="public/image/logo.png" alt="" class="img-fluid"></a> -->
    </div>

    <nav class="main-nav float-right d-none d-lg-block">
      <ul>
        <li class="active"><a id='home' href="#">Home</a></li>
        <li><a href="#" id='about-us'>About Us</a></li>
        <li><a href="#portfolio" id="university">Universities</a></li>
        <li><a href="#" id='find-uni'>Find</a></li>
        <li><a href="#" id='scholarship'>Scholarship</a></li>
        <li><a href="#" id='life'>Student Life</a></li>
        <li><a href="#" id= 'contact-us'>Contact Us</a></li>
      </ul>
    </nav><!-- .main-nav -->
    
  </div>
</header><!-- #header -->

<!--==========================
  Intro Section
============================-->
<section id="intro" class="clearfix">
  <div class="container d-flex h-100">
    <div class="row justify-content-center align-self-center">
      <div class="col-md-6 intro-info order-md-first order-last">
        <h2>Rapid Solutions<br>for Your <span>Business!</span></h2>
        <div>
          <a href="#about" class="btn-get-started scrollto">Get Started</a>
        </div>
      </div>

      <div class="col-md-6 intro-img order-md-last order-first">
        <img src="public/image/intro-img.svg" alt="" class="img-fluid">
      </div>
    </div>

  </div>
</section><!-- #intro -->

<main id='main'>
  <!--==========================
    University Section
  ============================-->
  <section id="portfolio" class="section-bg">
    <div class="container">

      <header class="section-header">
        <h3 class="section-title">Our Portfolio</h3>
      </header>

      <div class="row">
        <div class="col-lg-12">
          <ul id="portfolio-flters">
            <li data-filter="*" class="filter-active">All</li>
            <li data-filter=".filter-app">App</li>
            <li data-filter=".filter-card">Card</li>
            <li data-filter=".filter-web">Web</li>
          </ul>
        </div>
      </div>

      <div class="row portfolio-container">

        <div class="col-lg-4 col-md-6 portfolio-item filter-app">
          <div class="portfolio-wrap">
            <img src="public/image/portfolio/app1.jpg" class="img-fluid" alt="">
            <div class="portfolio-info">
              <h4><a href="#">App 1</a></h4>
              <p>App</p>
              <div>
                <a href="public/image/portfolio/app1.jpg" data-lightbox="portfolio" data-title="App 1" class="link-preview" title="Preview"><i class="ion ion-eye"></i></a>
                <a href="#" class="link-details" title="More Details"><i class="ion ion-android-open"></i></a>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 portfolio-item filter-web" data-wow-delay="0.1s">
          <div class="portfolio-wrap">
            <img src="public/image/portfolio/web3.jpg" class="img-fluid" alt="">
            <div class="portfolio-info">
              <h4><a href="#">Web 3</a></h4>
              <p>Web</p>
              <div>
                <a href="public/image/portfolio/web3.jpg" class="link-preview" data-lightbox="portfolio" data-title="Web 3" title="Preview"><i class="ion ion-eye"></i></a>
                <a href="#" class="link-details" title="More Details"><i class="ion ion-android-open"></i></a>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 portfolio-item filter-app" data-wow-delay="0.2s">
          <div class="portfolio-wrap">
            <img src="public/image/portfolio/app2.jpg" class="img-fluid" alt="">
            <div class="portfolio-info">
              <h4><a href="#">App 2</a></h4>
              <p>App</p>
              <div>
                <a href="public/image/portfolio/app2.jpg" class="link-preview" data-lightbox="portfolio" data-title="App 2" title="Preview"><i class="ion ion-eye"></i></a>
                <a href="#" class="link-details" title="More Details"><i class="ion ion-android-open"></i></a>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 portfolio-item filter-card">
          <div class="portfolio-wrap">
            <img src="public/image/portfolio/card2.jpg" class="img-fluid" alt="">
            <div class="portfolio-info">
              <h4><a href="#">Card 2</a></h4>
              <p>Card</p>
              <div>
                <a href="public/image/portfolio/card2.jpg" class="link-preview" data-lightbox="portfolio" data-title="Card 2" title="Preview"><i class="ion ion-eye"></i></a>
                <a href="#" class="link-details" title="More Details"><i class="ion ion-android-open"></i></a>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 portfolio-item filter-web" data-wow-delay="0.1s">
          <div class="portfolio-wrap">
            <img src="public/image/portfolio/web2.jpg" class="img-fluid" alt="">
            <div class="portfolio-info">
              <h4><a href="#">Web 2</a></h4>
              <p>Web</p>
              <div>
                <a href="public/image/portfolio/web2.jpg" class="link-preview" data-lightbox="portfolio" data-title="Web 2" title="Preview"><i class="ion ion-eye"></i></a>
                <a href="#" class="link-details" title="More Details"><i class="ion ion-android-open"></i></a>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 portfolio-item filter-app" data-wow-delay="0.2s">
          <div class="portfolio-wrap">
            <img src="public/image/portfolio/app3.jpg" class="img-fluid" alt="">
            <div class="portfolio-info">
              <h4><a href="#">App 3</a></h4>
              <p>App</p>
              <div>
                <a href="public/image/portfolio/app3.jpg" class="link-preview" data-lightbox="portfolio" data-title="App 3" title="Preview"><i class="ion ion-eye"></i></a>
                <a href="#" class="link-details" title="More Details"><i class="ion ion-android-open"></i></a>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 portfolio-item filter-card">
          <div class="portfolio-wrap">
            <img src="public/image/portfolio/card1.jpg" class="img-fluid" alt="">
            <div class="portfolio-info">
              <h4><a href="#">Card 1</a></h4>
              <p>Card</p>
              <div>
                <a href="public/image/portfolio/card1.jpg" class="link-preview" data-lightbox="portfolio" data-title="Card 1" title="Preview"><i class="ion ion-eye"></i></a>
                <a href="#" class="link-details" title="More Details"><i class="ion ion-android-open"></i></a>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 portfolio-item filter-card" data-wow-delay="0.1s">
          <div class="portfolio-wrap">
            <img src="public/image/portfolio/card3.jpg" class="img-fluid" alt="">
            <div class="portfolio-info">
              <h4><a href="#">Card 3</a></h4>
              <p>Card</p>
              <div>
                <a href="public/image/portfolio/card3.jpg" class="link-preview" data-lightbox="portfolio" data-title="Card 3" title="Preview"><i class="ion ion-eye"></i></a>
                <a href="#" class="link-details" title="More Details"><i class="ion ion-android-open"></i></a>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 portfolio-item filter-web" data-wow-delay="0.2s">
          <div class="portfolio-wrap">
            <img src="public/image/portfolio/web1.jpg" class="img-fluid" alt="">
            <div class="portfolio-info">
              <h4><a href="#">Web 1</a></h4>
              <p>Web</p>
              <div>
                <a href="public/image/portfolio/web1.jpg" class="link-preview" data-lightbox="portfolio" data-title="Web 1" title="Preview"><i class="ion ion-eye"></i></a>
                <a href="#" class="link-details" title="More Details"><i class="ion ion-android-open"></i></a>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  </section><!-- #portfolio -->

   <!--==========================
    Footer
  ============================-->
  <footer id="footer" class="section-bg">
    
    <div class="container">
      <div class="copyright">
        &copy; Copyright <strong>Rapid</strong>. All Rights Reserved
      </div>
      <div class="credits">
        <!--
          All the links in the footer should remain intact.
          You can delete the links only if you purchased the pro version.
          Licensing information: https://bootstrapmade.com/license/
          Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/buy/?theme=Rapid
        -->
        Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
      </div>
    </div>
  </footer><!-- #footer -->
</main>



<a href="#" class="back-to-top"><i class="fa fa-chevron-up"></i></a>
<!-- Uncomment below i you want to use a preloader -->
<!-- <div id="preloader"></div> -->
`
components.scholarshipScreen = `
      <!--==========================
      Header
      ============================-->
      <header id="header">

        <div id="topbar">
          <div class="container">
            <div class="social-links">
              <a href="#" class="twitter"><i class="fa fa-twitter"></i></a>
              <a href="#" class="facebook"><i class="fa fa-facebook"></i></a>
              <a href="#" class="linkedin"><i class="fa fa-linkedin"></i></a>
              <a href="#" class="instagram"><i class="fa fa-instagram"></i></a>
            </div>
          </div>
        </div>

        <div class="container">

          <div class="logo float-left">
            <!-- Uncomment below if you prefer to use an image logo -->
            <h1 class="text-light"><a href="#intro" class="scrollto"><span>Russia</span></a></h1>
            <!-- <a href="#header" class="scrollto"><img src="public/image/logo.png" alt="" class="img-fluid"></a> -->
          </div>

          <nav class="main-nav float-right d-none d-lg-block">
            <ul>
              <li class="active"><a id='home' href="#intro">Home</a></li>
              <li><a href="#" id='about-us'>About Us</a></li>
              <li><a href='#' id='university'>Universities</a></li>
              <li><a href="#" id='find-uni'>Find</a></li>
              <li><a href='#intro'>Scholarship</a></li>
              <li><a href="#" id='life'>Student Life</a></li>
              <li><a href="#" id='contact-us'>Contact Us</a></li>
            </ul>
          </nav><!-- .main-nav -->
          
        </div>
        
      </header><!-- #header -->
      <!--==========================
        Intro Section
      ============================-->
      <section id="intro" class="clearfix">
        <div class="container d-flex h-100">
          <div class="row justify-content-center align-self-center">
            <div class="col-md-6 intro-info order-md-first order-last">
              <h2>Rapid Solutions<br>for Your <span>Business!</span></h2>
              <div>
                <a href="#about" class="btn-get-started scrollto">Get Started</a>
              </div>
            </div>

            <div class="col-md-6 intro-img order-md-last order-first">
              <img src="public/image/intro-img.svg" alt="" class="img-fluid">
            </div>
          </div>

        </div>
      </section><!-- #intro -->
       
        <main>
            <!--==========================
      Why Us Section
    ============================-->
    <section id="why-us" class="wow fadeIn">
        <div class="container-fluid">
          
          <header class="section-header">
            <h3>Học bổng</h3>
            <p>Học bổng toàn phần, bán phần học tập tại các trường đại học hàng đầu thế giới,<br>tại sao không?</p>
          </header>
          <div class="row">
  
            <div class="col-lg-6">
              <div class="scholarship-img">
                <img src="./public/image/scholarship.jpg" alt="" class="img-fluid">
              </div>
            </div>
  
            <div class="col-lg-6">
              <div class="why-us-content">
                <p>Học bổng Nga là những loại hình học bổng được tài trợ bởi ngân sách của Chính phủ Việt Nam và Chính phủ Liên bang Nga hoặc từ các trường Đại học Nga. Trong giai đoạn 2016-2020 dự kiến hằng năm sẽ có khoảng 1,000-1,500 suất học bổng du học Nga dành cho học sinh, sinh viên Việt Nam với hơn 400 mã ngành khác nhau tại 460 Trường Đại học công lập thuộc Liên bang Nga.

                </p>
  
                <div class="features wow bounceInUp clearfix">
                  <i class="fa fa-diamond" style="color: #f058dc;"></i>
                  <h4>Học bổng toàn phần</h4>
                  <p>Commodi quia voluptatum. Est cupiditate voluptas quaerat officiis ex alias dignissimos et ipsum. Soluta at enim modi ut incidunt dolor et.</p>
                  <p><a href="#full-scholarship">Xem thêm</a></p>
                </div>
  
                <div class="features wow bounceInUp clearfix">
                    <i class="fa fa-diamond" style="color: #f058dc;"></i>
                    <h4>Học bổng bán phần</h4>
                  <p>Molestias eius rerum iusto voluptas et ab cupiditate aut enim. Assumenda animi occaecati. Quo dolore fuga quasi autem aliquid ipsum odit. Perferendis doloremque iure nulla aut.</p>
                  <p><a href="#partial-scholarship">Xem thêm</a></p>
                </div>
                
                <div class="features wow bounceInUp clearfix">
                    <i class="fa fa-diamond" style="color: #f058dc;"></i>
                    <h4>Học bổng trao đổi ngắn hạn</h4>
                  <p>Voluptates nihil et quis omnis et eaque omnis sint aut. Ducimus dolorum aspernatur. Totam dolores ut enim ullam voluptas distinctio aut.</p>
                  <p><a href="#full-scholarship">Xem thêm</a></p>
                </div>
                
              </div>
  
            </div>
  
          </div>
  
        </div>
  
        <div class="container">
          <div class="row counters">
  
            <div class="col-lg-3 col-6 text-center">
              <span data-toggle="counter-up">1000</span>
              <p>Trường đại học</p>
            </div>
  
            <div class="col-lg-3 col-6 text-center">
              <span data-toggle="counter-up">994</span>
              <p>Suất học bổng</p>
            </div>
  
            <div class="col-lg-3 col-6 text-center">
              <span data-toggle="counter-up">420</span>
              <p>USD</p>
            </div>
  
            <div class="col-lg-3 col-6 text-center">
              <span data-toggle="counter-up">100</span>
              <p>Chất lượng</p>
            </div>
    
          </div>
  
        </div>
      </section>
      <!--==========================
      Call To Action Section
    ============================-->
    <section id="call-to-action" class="wow fadeInUp">
        <div class="container">
          <div class="row">
            <div class="col-lg-9 text-center text-lg-left">
              <h3 class="cta-title">Tìm ngay ngôi trường phù hợp với bản thân bạn</h3>
              <p class="cta-text"> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div class="col-lg-3 cta-btn-container text-center">
              <a class="cta-btn align-middle" >Tìm hiểu ngay</a>
            </div>
          </div>
  
        </div>
      </section><!-- #call-to-action -->
    <!--==========================
      Features Section
    ============================-->
    <br>
        <section id="full-scholarship">
         <div class="container">
  
          <div class="row feature-item">
            <div class="col-lg-6 wow fadeInUp">
              <img src="./public/image/full-scholarship.jpg" class="img-fluid" alt="">
            </div>
            <div class="col-lg-6 wow fadeInUp pt-5 pt-lg-0">
              <h4>Học bổng toàn phần - Học bổng Hiệp Định</h4>
              <p>
                Ipsum in aspernatur ut possimus sint. Quia omnis est occaecati possimus ea. Quas molestiae perspiciatis occaecati qui rerum. Deleniti quod porro sed quisquam saepe. Numquam mollitia recusandae non ad at et a.
              </p>
              <p>
                Ad vitae recusandae odit possimus. Quaerat cum ipsum corrupti. Odit qui asperiores ea corporis deserunt veritatis quidem expedita perferendis. Qui rerum eligendi ex doloribus quia sit. Porro rerum eum eum.
              </p>
            </div>
          </div>
  
          <div class="row feature-item mt-5 pt-5">
  
            <div class="col-lg-12 wow fadeInUp pt-4 pt-lg-0 order-2 order-lg-1">
              <h4>Neque saepe temporibus repellat ea ipsum et. Id vel et quia tempora facere reprehenderit.</h4>
              <p>
               Delectus alias ut incidunt delectus nam placeat in consequatur. Sed cupiditate quia ea quis. Voluptas nemo qui aut distinctio. Cumque fugit earum est quam officiis numquam. Ducimus corporis autem at blanditiis beatae incidunt sunt. 
              </p>
              <p>
                Voluptas saepe natus quidem blanditiis. Non sunt impedit voluptas mollitia beatae. Qui esse molestias. Laudantium libero nisi vitae debitis. Dolorem cupiditate est perferendis iusto.
              </p>
              <p>
                Eum quia in. Magni quas ipsum a. Quis ex voluptatem inventore sint quia modi. Numquam est aut fuga mollitia exercitationem nam accusantium provident quia.
              </p>
            </div>
            
          </div>
  
        </div>
      </section><!-- #about -->
      <!--==========================
      See more Section
    ============================-->
    <section id="call-to-action" class="wow fadeInUp">
        <div class="container">
          <div class="row">
            <div class="col-lg-9 text-center text-lg-left">
              <h3 class="cta-title">Thắc mắc về học bổng toàn phần?</h3>
              <p class="cta-text">Nếu còn các thắc mắc về học bổng toàn phần, xem phần các câu hỏi thường gặp tại đây</p>
            </div>
            <div class="col-lg-3 cta-btn-container text-center">
              <a class="cta-btn align-middle" href="#faq">Xem thêm</a>
            </div>
          </div>
  
        </div>
      </section><!-- #call-to-action -->
      <br>
      <br>
    <!--==========================
      Partial Scholarship Section
    ============================-->
    <section id="partial-scholarship">
        <div class="container">
 
         <div class="row feature-item">
           
           <div class="col-lg-6 wow fadeInUp pt-5 pt-lg-0">
             <h4>Học bổng bán phần - Học bổng một phía</h4>
             <p>
               Ipsum in aspernatur ut possimus sint. Quia omnis est occaecati possimus ea. Quas molestiae perspiciatis occaecati qui rerum. Deleniti quod porro sed quisquam saepe. Numquam mollitia recusandae non ad at et a.
             </p>
             <p>
               Ad vitae recusandae odit possimus. Quaerat cum ipsum corrupti. Odit qui asperiores ea corporis deserunt veritatis quidem expedita perferendis. Qui rerum eligendi ex doloribus quia sit. Porro rerum eum eum.
             </p>
           </div>
           <div class="col-lg-6 wow fadeInUp">
             <img src="./public/image/full-scholarship.jpg" class="img-fluid" alt="">
           </div>
         </div>
 
         <div class="row feature-item mt-5 pt-5">
 
           <div class="col-lg-12 wow fadeInUp pt-4 pt-lg-0 order-2 order-lg-1">
             <h4>Neque saepe temporibus repellat ea ipsum et. Id vel et quia tempora facere reprehenderit.</h4>
             <p>
              Delectus alias ut incidunt delectus nam placeat in consequatur. Sed cupiditate quia ea quis. Voluptas nemo qui aut distinctio. Cumque fugit earum est quam officiis numquam. Ducimus corporis autem at blanditiis beatae incidunt sunt. 
             </p>
             <p>
               Voluptas saepe natus quidem blanditiis. Non sunt impedit voluptas mollitia beatae. Qui esse molestias. Laudantium libero nisi vitae debitis. Dolorem cupiditate est perferendis iusto.
             </p>
             <p>
               Eum quia in. Magni quas ipsum a. Quis ex voluptatem inventore sint quia modi. Numquam est aut fuga mollitia exercitationem nam accusantium provident quia.
             </p>
           </div>
           
         </div>
 
       </div>
     </section><!-- #about -->
     <!--==========================
     Success Story Section
   ============================-->
   <section id="testimonials">
       <div class="container">
 
         <header class="section-header">
           <h3>Câu chuyện thành công</h3>
         </header>
 
         <div class="row justify-content-center">
           <div class="col-lg-8">
 
             <div class="owl-carousel testimonials-carousel wow fadeInUp">
     
               <div class="testimonial-item">
                 <img src="./public/image/vu thanh long.jpg" class="testimonial-img" alt="">
                 <h3>Vũ Thành Long</h3>
                 <h4>NUST MISIS</h4>
                 <p>
                   Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                 </p>
               </div>
     
               <div class="testimonial-item">
                 <img src="public/image/testimonial-2.jpg" class="testimonial-img" alt="">
                 <h3>Nguyễn Chiếm Dự</h3>
                 <h4>NUST MISIS</h4>
                 <p>
                   Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                 </p>
               </div>
     
               <div class="testimonial-item">
                 <img src="public/image/testimonial-3.jpg" class="testimonial-img" alt="">
                 <h3>Jena Karlis</h3>
                 <h4>Store Owner</h4>
                 <p>
                   Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
                 </p>
               </div>
     
               <div class="testimonial-item">
                 <img src="public/image/testimonial-4.jpg" class="testimonial-img" alt="">
                 <h3>Matt Brandon</h3>
                 <h4>Freelancer</h4>
                 <p>
                   Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.
                 </p>
               </div>
 
             </div>
 
           </div>
         </div>
 
 
       </div>
     </section><!-- #testimonials -->
     <br>
     <br>
      <!--==========================
      Frequently Asked Questions Section
    ============================-->
    <section id="faq">
        <div class="container">
          <header class="section-header">
            <h3>Những câu hỏi thường gặp</h3>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>
          </header>
  
          
            <div id='faq-list' class="list-group">
            </div>
  
        
      </section><!-- #faq -->
    </main>
   <!--==========================
          Footer
        ============================-->
        <footer id="footer" class="section-bg">
          
            <div class="container">
              <div class="copyright">
                &copy; Copyright <strong>Rapid</strong>. All Rights Reserved
              </div>
              <div class="credits">
                <!--
                  All the links in the footer should remain intact.
                  You can delete the links only if you purchased the pro version.
                  Licensing information: https://bootstrapmade.com/license/
                  Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/buy/?theme=Rapid
                -->
                Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
              </div>
            </div>
          </footer><!-- #footer -->
  
  
        <a href="#" class="back-to-top"><i class="fa fa-chevron-up"></i></a>
        <!-- Uncomment below i you want to use a preloader -->
        <!-- <div id="preloader"></div> -->
  
    </div>
`
components.studentLifeScreen = `

        <!--==========================
        Header
        ============================-->
        <header id="header">
  
          <div id="topbar">
            <div class="container">
              <div class="social-links">
                <a href="#" class="twitter"><i class="fa fa-twitter"></i></a>
                <a href="#" class="facebook"><i class="fa fa-facebook"></i></a>
                <a href="#" class="linkedin"><i class="fa fa-linkedin"></i></a>
                <a href="#" class="instagram"><i class="fa fa-instagram"></i></a>
              </div>
            </div>
          </div>
  
          <div class="container">
  
            <div class="logo float-left">
              <!-- Uncomment below if you prefer to use an image logo -->
              <h1 class="text-light"><a href="#intro" class="scrollto"><span>Russia</span></a></h1>
              <!-- <a href="#header" class="scrollto"><img src="public/image/logo.png" alt="" class="img-fluid"></a> -->
            </div>
  
            <nav class="main-nav float-right d-none d-lg-block">
              <ul>
                <li class="active"><a id='home' href="#">Home</a></li>
                <li><a href="#" id='about-us'>About Us</a></li>
                <li><a href="#" id='university'>Universities</a></li>
                <li><a href="#" id='find-uni'>Find</a></li>
                <li><a href="#" id='scholarship'>Scholarship</a></li>
                <li><a href='#portfolio' id="life">Student Life</a>
                </li>
                <li><a href="#" id='contact-us'>Contact Us</a></li>
              </ul>
            </nav><!-- .main-nav -->
            
          </div>
          
        </header><!-- #header -->
     <!--==========================
        Intro Section
      ============================-->
      <section id="intro" class="clearfix intro">
        <div class="container d-flex h-100">
          <div class="row justify-content-center align-self-center">
            <div class="col-md-6 intro-info order-md-first order-last">
              <h2>Rapid Solutions<br>for Your <span>Business!</span></h2>
              <div>
                <a href="#about" class="btn-get-started scrollto">Get Started</a>
              </div>
            </div>

            <div class="col-md-6 intro-img order-md-last order-first">
              <img src="public/image/intro-img.svg" alt="" class="img-fluid">
            </div>
          </div>

        </div>
      </section><!-- #intro -->
        <main>
            <!--==========================
          University Section
        ============================-->
        <section id="portfolio" class="section-bg">
            <div class="container">
  
              <header class="section-header">
                <h3 class="section-title">Student Life</h3>
              </header>
  
              <div class="row">
                <div class="col-lg-12">
                  <ul id="portfolio-flters">
                    <li data-filter="*" class="filter-active">All</li>
                    <li data-filter=".filter-accommodation" id='accommodation'>Accommodation</li>
                    <li data-filter=".filter-friendship">International Friendship</li>
                    <li data-filter=".filter-sport">Sport Activities</li>
                    <li data-filter=".filter-expenses">Living Expenses</li>
                    <li data-filter=".filter-opportunities">Opportunities</li>
                    <li data-filter=".filter-handbook">Handbook</li>
                  </ul>
                </div>
              </div>
              <div class="row portfolio-container">
  
                <div class="col-lg-4 col-md-6 portfolio-item filter-accommodation">
                  <div class="portfolio-wrap">
                    <img src="public/image/accommodation.jpg" class="img-fluid" alt="">
                    <div class="portfolio-info">
                      <h4><a href="#">Accommodation</a></h4>
                      <p>Accommodation in Moscow</p>
                      <div>
                        <a href="public/image/accommodation.jpg" data-lightbox="portfolio" data-title="App 1" class="link-preview" title="Preview"><i class="ion ion-eye"></i></a>
                        <a href="#" class="link-details" title="More Details"><i class="ion ion-android-open"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
  
                <div class="col-lg-4 col-md-6 portfolio-item filter-friendship" data-wow-delay="0.1s">
                  <div class="portfolio-wrap">
                    <img src="public/image/friendship.jpg" class="img-fluid" alt="">
                    <div class="portfolio-info">
                      <h4><a href="#">International Friendship</a></h4>
                      <p>Friendship</p>
                      <div>
                        <a href="public/image/friendship.jpg" class="link-preview" data-lightbox="portfolio" data-title="Web 3" title="Preview"><i class="ion ion-eye"></i></a>
                        <a href="#" class="link-details" title="More Details"><i class="ion ion-android-open"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
  
                <div class="col-lg-4 col-md-6 portfolio-item filter-accommodation" data-wow-delay="0.2s">
                  <div class="portfolio-wrap">
                    <img src="public/image/accommodation-1.jpg" class="img-fluid" alt="">
                    <div class="portfolio-info">
                      <h4><a href="#">Accommodation</a></h4>
                      <p>Accommodation in Saint Petersburg</p>
                      <div>
                        <a href="public/image/accommodation-1.jpg" class="link-preview" data-lightbox="portfolio" data-title="App 2" title="Preview"><i class="ion ion-eye"></i></a>
                        <a href="#" class="link-details" title="More Details"><i class="ion ion-android-open"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
  
                <div class="col-lg-4 col-md-6 portfolio-item filter-expenses">
                  <div class="portfolio-wrap">
                    <img src="public/image/rub-1.jpg" class="img-fluid" alt="">
                    <div class="portfolio-info">
                      <h4><a href="#">Living expenses</a></h4>
                      <p>Prices in the rural area</p>
                      <div>
                        <a href="public/image/rub-1.jpg" class="link-preview" data-lightbox="portfolio" data-title="Card 2" title="Preview"><i class="ion ion-eye"></i></a>
                        <a href="#" class="link-details" title="More Details"><i class="ion ion-android-open"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
  
                <div class="col-lg-4 col-md-6 portfolio-item filter-expenses" data-wow-delay="0.1s">
                  <div class="portfolio-wrap">
                    <img src="public/image/rub.jpg" class="img-fluid" alt="">
                    <div class="portfolio-info">
                      <h4><a href="#">Living Expenses</a></h4>
                      <p>Prices in the urban area</p>
                      <div>
                        <a href="public/image/rub.jpg" class="link-preview" data-lightbox="portfolio" data-title="Web 2" title="Preview"><i class="ion ion-eye"></i></a>
                        <a href="#" class="link-details" title="More Details"><i class="ion ion-android-open"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
  
                <div class="col-lg-4 col-md-6 portfolio-item filter-opportunities" data-wow-delay="0.2s">
                  <div class="portfolio-wrap">
                    <img src="public/image/activities.jpg" class="img-fluid" alt="">
                    <div class="portfolio-info">
                      <h4><a href="#">Opportunities</a></h4>
                      <p>Opportunities for students</p>
                      <div>
                        <a href="public/image/activities.jpg" class="link-preview" data-lightbox="portfolio" data-title="App 3" title="Preview"><i class="ion ion-eye"></i></a>
                        <a href="#" class="link-details" title="More Details"><i class="ion ion-android-open"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
  
                <div class="col-lg-4 col-md-6 portfolio-item filter-opportunities">
                  <div class="portfolio-wrap">
                    <img src="public/image/graduate.jpg" class="img-fluid" alt="">
                    <div class="portfolio-info">
                      <h4><a href="#">Opportunities</a></h4>
                      <p>Opportunities for graduates</p>
                      <div>
                        <a href="public/image/graduate.jpg" class="link-preview" data-lightbox="portfolio" data-title="Card 1" title="Preview"><i class="ion ion-eye"></i></a>
                        <a href="#" class="link-details" title="More Details"><i class="ion ion-android-open"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
  
                <div class="col-lg-4 col-md-6 portfolio-item filter-accommodation" data-wow-delay="0.1s">
                  <div class="portfolio-wrap">
                    <img src="public/image/accommodation-2.jpg" class="img-fluid" alt="">
                    <div class="portfolio-info">
                      <h4><a href="#">Accommodation</a></h4>
                      <p>Accommodation in another cities</p>
                      <div>
                        <a href="public/image/accommodation-2.jpg" class="link-preview" data-lightbox="portfolio" data-title="Card 3" title="Preview"><i class="ion ion-eye"></i></a>
                        <a href="#" class="link-details" title="More Details"><i class="ion ion-android-open"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
  
                <div class="col-lg-4 col-md-6 portfolio-item filter-sport" data-wow-delay="0.2s">
                  <div class="portfolio-wrap">
                    <img src="public/image/sport.jpg" class="img-fluid" alt="">
                    <div class="portfolio-info">
                      <h4><a href="#">Sport</a></h4>
                      <p>Sport Activities</p>
                      <div>
                        <a href="public/image/sport.jpg" class="link-preview" data-lightbox="portfolio" data-title="Web 1" title="Preview"><i class="ion ion-eye"></i></a>
                        <a href="#" class="link-details" title="More Details"><i class="ion ion-android-open"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
  
              </div>
  
            </div>
          </section><!-- #portfolio -->
   
        </main>

   
      <!--==========================
          Footer
        ============================-->
        <footer id="footer" class="section-bg">
          
            <div class="container">
              <div class="copyright">
                &copy; Copyright <strong>Rapid</strong>. All Rights Reserved
              </div>
              <div class="credits">
                <!--
                  All the links in the footer should remain intact.
                  You can delete the links only if you purchased the pro version.
                  Licensing information: https://bootstrapmade.com/license/
                  Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/buy/?theme=Rapid
                -->
                Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
              </div>
            </div>
          </footer><!-- #footer -->
  
  
        <a href="#" class="back-to-top"><i class="fa fa-chevron-up"></i></a>
        <!-- Uncomment below i you want to use a preloader -->
        <!-- <div id="preloader"></div> -->`
components.findScreen = `
      <!-- Header
      ============================-->
      <header id="header">

      <div id="topbar">
        <div class="container">
          <div class="social-links">
            <a href="#" class="twitter"><i class="fa fa-twitter"></i></a>
            <a href="#" class="facebook"><i class="fa fa-facebook"></i></a>
            <a href="#" class="linkedin"><i class="fa fa-linkedin"></i></a>
            <a href="#" class="instagram"><i class="fa fa-instagram"></i></a>
          </div>
        </div>
      </div>

      <div class="container">

        <div class="logo float-left">
          <!-- Uncomment below if you prefer to use an image logo -->
          <h1 class="text-light"><a href="#intro" class="scrollto"><span>Russia</span></a></h1>
          <!-- <a href="#header" class="scrollto"><img src="public/image/logo.png" alt="" class="img-fluid"></a> -->
        </div>

        <nav class="main-nav float-right d-none d-lg-block">
          <ul>
              <li class="active"><a id='home' href="#intro">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a id='university' href="#">Universities</a></li>
              <li><a id='find-uni'href="#find">Find</a></li>
              <li><a id='scholarship' href="#">Scholarship</a></li>
              <li><a href="#">Student Life</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
        </nav><!-- .main-nav -->
        
      </div>
      </header><!-- #header -->

      <!--==========================
      Intro Section
      ============================-->
      <section id="intro" class="clearfix">
      <div class="container d-flex h-100">
        <div class="row justify-content-center align-self-center">
          <div class="col-md-6 intro-info order-md-first order-last">
            <h2>Rapid Solutions<br>for Your <span>Business!</span></h2>
            <div>
              <a href="#about" class="btn-get-started scrollto">Get Started</a>
            </div>
          </div>

          <div class="col-md-6 intro-img order-md-last order-first">
            <img src="public/image/intro-img.svg" alt="" class="img-fluid">
          </div>
        </div>

      </div>
      </section><!-- #intro -->
      <section id="call-to-action" class="wow fadeInUp" style="visibility: visible; animation-name: fadeInUp;">
        <div class="container">
          <div class="row">
            <div class="col-lg-9 text-center text-lg-left">
              <h3 class="cta-title">Call To Action</h3>
              <p class="cta-text"> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div class="col-lg-3 cta-btn-container text-center">
              <a class="cta-btn align-middle" href="#">Call To Action</a>
            </div>
          </div>

        </div>
      </section>

      <section id="find" class="section-bg">
          <div class="container">
            <div class="col-lg-6 wow fadeInUp pt-4 pt-lg-0 order-2 order-lg-1 find-university" style="visibility: visible; animation-name: fadeInUp;">
              <h2>Find University</h2>
              <h3>Type your University here for more information</h3>
              <!-- Du Search box and Find Button -->
            </div>
                <!-- Du Search box and Find Button -->
                <div class=""> 
                  <div class="input-group mt-3 mb-3 col-lg-7" >
                      <input type="text" class="form-control rounded" placeholder="University's name">
                      <div class="input-group-append">
                      <button class="btn blue-btn" type="submit">Search</button>
                      </div>
                  </div>
                </div>
                <div class="">
                  <div class="input-group mb-3 col-lg-5">
                    <div class="input-group-prepend">
                      <label class="input-group-text blue-btn" for="inputGroupCity">City</label>
                    </div>
                    <select class="custom-select" id="inputGroupCity">
                      <option selected>Choose...</option>
                      <option value="Saint">Saint</option>
                      <option value="Moscow">Moscow</option>
                      <option value="Tuala">Tuala</option>
                    </select>
                  </div>
                  <div class="col">
                    <div id='listCity' class="col row">
                    </div>
                  </div>
                  
                  
                

                    <div class="input-group mb-3 col-lg-5">
                      <div class="input-group-prepend">
                        <label class="input-group-text blue-btn" for="inputGroupMajor">Major</label>
                      </div>
                      <select class="custom-select" id="inputGroupMajor">
                        <option selected>Choose...</option>
                        <option value="Information Technology" onclick="console.log('da click')">Information Technology</option>
                        <option value="Computer Science">Computer Science</option>
                        <option value="Business Administration">Business Administration</option>
                      </select>
                    </div>
                    <div class="col">
                      <div id='listMajor' class="col row">
                      </div>
                    </div>

                    <!-- <div class="col-lg-7"><button class="btn btn-block blue-btn" type="submit">Apply</button></div> -->
                    <div id='listResult' class="row feature-item mt-5 pt-2 border  border-white background-white">
                            <!-- <div class="col-lg-6 wow fadeInUp order-1 order-lg-2" style="visibility: visible; animation-name: fadeInUp;">
                            <img src="public/image/features-2.svg" class="img-fluid" alt="">
                          </div>
                
                          <div class="col-lg-6 wow fadeInUp pt-4 pt-lg-0 order-2 order-lg-1" style="visibility: visible; animation-name: fadeInUp;">
                            <h4>Neque saepe temporibus repellat ea ipsum et. Id vel et quia tempora facere reprehenderit.</h4>
                            <p>
                            Delectus alias ut incidunt delectus nam placeat in consequatur. Sed cupiditate quia ea quis. Voluptas nemo qui aut distinctio. Cumque fugit earum est quam officiis numquam. Ducimus corporis autem at blanditiis beatae incidunt sunt. 
                            </p>
                            <p>
                              Voluptas saepe natus quidem blanditiis. Non sunt impedit voluptas mollitia beatae. Qui esse molestias. Laudantium libero nisi vitae debitis. Dolorem cupiditate est perferendis iusto.
                            </p>
                            <p>
                              Eum quia in. Magni quas ipsum a. Quis ex voluptatem inventore sint quia modi. Numquam est aut fuga mollitia exercitationem nam accusantium provident quia.
                            </p>
                          </div> -->
                    </div>
                  </div>
      </section> 
`