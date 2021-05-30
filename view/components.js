const components = {}
components.welcomeScreen = `
<!--==========================
Header
============================-->
<header id="header">

  <div id="topbar">
  
    <div class="container">
    
    <div class="logo float-left">
      <a href="#header" class=""><img src="public/image/logo.png" alt="" class="logo"></a>
    </div>
      <div class="social-links">
        <a href="#" class="twitter"><i class="fa fa-twitter"></i></a>
        <a href="#" class="facebook"><i class="fa fa-facebook"></i></a>
        <a href="#" class="linkedin"><i class="fa fa-linkedin"></i></a>
        <a href="#" class="instagram"><i class="fa fa-instagram"></i></a>
      </div>
    </div>
  </div>

  <div class="container">


    <nav class="main-nav float-right d-none d-lg-block">
      <ul>
        <li class="active"><a id='home' href="#intro">Trang Chủ</a></li>
        <li><a href="#about">Về chúng tôi</a></li>
        <li><a id='university' href="#">Vấn đề xã hội</a></li>
        <li><a id='find-uni' href="#">Lập kế hoạch về hưu</a></li>
        <li><a id='scholarship' href="#">Thông tin</a></li>
        <li><a href="#" id='life'>Đăng ký thành viên</a></li>
        <li><a href="#footer">Liên hệ</a></li>
      </ul>
    </nav><!-- .main-nav -->
    
  </div>
</header><!-- #header -->

<!--==========================
  Intro Section
============================-->
<div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
    <section id="intro" class="clearfix">

    <div class="container d-flex h-100">
    <div class="row justify-content-center align-self-center">
      <div class="col-md-6 intro-info order-md-first order-last">
        <h2>Vì một tuổi <span>"xế chiều"</span> thịnh vượng, khỏe mạnh, an vui.</h2>
        <div>
          <a href="#about" class="btn-get-started scrollto">Lên kế hoạch về hưu ngay</a>
        </div>
      </div>
    
      <div class="col-md-6 intro-img order-md-last order-first">
        <img src="public/image/header/header1.png" alt="" class="img-fluid">
      </div>
    
    </div>
    </div>
    </section><!-- #intro -->    </div>
    <div class="carousel-item">
    <section id="intro" class="clearfix">

    <div class="container d-flex h-100">
    <div class="row justify-content-center align-self-center">
      <div class="col-md-6 intro-info order-md-first order-last">
        <h2>Active Ageing là dự án kinh doanh xã hội giúp mọi người chuẩn bị cho tuổi già một cách chủ động và kỹ càng.</h2>
      </div>
    
      <div class="col-md-6 intro-img order-md-last order-first">
        <img src="public/image/intro-img.svg" alt="" class="img-fluid">
      </div>
    
    </div>
    </div>
    </section><!-- #intro -->     </div>
    <div class="carousel-item">
    <section id="intro" class="clearfix">

    <div class="container d-flex h-100">
    <div class="row justify-content-center align-self-center">
      <div class="col-md-6 intro-info order-md-first order-last">
        <h2>Già hoá dân số không chỉ là một vấn đề vĩ mô mà còn tác động đến mỗi cá nhân, mỗi gia đình</h2>
      </div>
    
      <div class="col-md-6 intro-img order-md-last order-first">
        <img src="public/image/intro-img.svg" alt="" class="img-fluid">
      </div>
    
    </div>
    </div>
    </section><!-- #intro -->     </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>


<main id="main">

  <!--==========================
    About Us Section
  ============================-->
  <section id="about">
    <div class="container">
      <div class="row">

        <div class="col-lg-5 col-md-6">
          <div class="about-img">
            <img src="public/image/story.jpg" alt="">
          </div>
        </div>

        <div class="col-lg-7 col-md-6">
          <div class="about-content">
            <h2>Câu chuyện của Active Ageing Vietnam</h2>
            <p>Dự án Active Ageing được ra đời với nỗi trăn trở về một vấn đề mà Việt Nam và các nước trong khu vực đang và sẽ phải đối mặt trong tương lai gần, đó chính là già hoá dân số và những hệ luỵ có liên quan.<br><br>Chúng tôi tin rằng việc đồng hành cùng mỗi cá nhân nâng cao sự chủ động trong quản lý tài chính và bảo vệ sức khoẻ sẽ tạo ra những ảnh hưởng tích cực cho cộng đồng, góp phần kiến tạo một tương lai bền vững hơn. Những giải pháp mà Active Ageing đang phát triển sẽ giúp tất cả mọi người, ở mọi lứa tuổi, có được sự hiểu biết và có thể bắt đầu chuẩn bị cho tuổi già về tài chính và sức khoẻ ngay từ hôm nay.</p>
            <div>
            <a href="#"><h4>Tìm hiểu thêm những giải pháp từ Active Ageing Vietnam →</h4></a>
            </div>
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
        <h3>Chúng tôi</h3>
        <p>Những người trẻ cùng chung nỗi trăn trở</p>
      </div>

      <div class="row">

        <div class="col-lg-3 col-md-6 wow fadeInUp">
          <div class="member">
            <img src="public/image/team/quynh.jpg" class="img-fluid" alt="">
            <div class="member-info">
              <div class="member-info-content">
                <h4>Nguyễn Lê Như Quỳnh</h4>
                <span>Project Leader</span>
                <span>Đại học Ngoại Thương CS2. TPHCM</span>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-3 col-md-6 wow fadeInUp">
          <div class="member">
            <img src="public/image/team/nhu.jpg" class="img-fluid" alt="">
            <div class="member-info">
              <div class="member-info-content">
                <h4>Lâm Tố Như</h4>
                <span>External Relations Executive</span>
                <span>Đại học Ngoại Thương CS2. TPHCM</span>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-3 col-md-6 wow fadeInUp">
          <div class="member">
            <img src="public/image/team/thu.jpg" class="img-fluid" alt="">
            <div class="member-info">
              <div class="member-info-content">
                <h4>Trần Minh Thư</h4>
                <span>Project Development Executive</span>
                <span>Đại học Ngoại Thương CS2. TPHCM</span>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-3 col-md-6 wow fadeInUp">
          <div class="member">
            <img src="public/image/team/long.jpg" class="img-fluid" alt="">
            <div class="member-info">
              <div class="member-info-content">
                <h4>Vũ Thành Long</h4>
                <span>Technical Leader</span>
                <span>Đại học Khoa Học và Công Nghệ, Nga</span>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-3 col-md-6 wow fadeInUp">
          <div class="member">
            <img src="public/image/team/du.jpg" class="img-fluid" alt="">
            <div class="member-info">
              <div class="member-info-content">
                <h4>Nguyễn Chiếm Dự</h4>
                <span>Engineering Executive</span>
                <span>Đại học Khoa Học và Công Nghệ, Nga</span>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-3 col-md-6 wow fadeInUp">
          <div class="member">
            <img src="public/image/team/vy.jpg" class="img-fluid" alt="">
            <div class="member-info">
              <div class="member-info-content">
                <h4>Hồ Phan Thanh Vy</h4>
                <span>Finance Executive</span>
                <span>Đại học Ngoại Thương CS2 TP.Hồ Chí Minh</span>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-3 col-md-6 wow fadeInUp">
          <div class="member">
            <img src="public/image/team/vy.jpg" class="img-fluid" alt="">
            <div class="member-info">
              <div class="member-info-content">
                <h4>Nguyễn Quốc Tuấn</h4>
                <span>Marketing Executive</span>
                <span>Đại học Ngoại Thương CS2 TP.Hồ Chí Minh</span>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-3 col-md-6 wow fadeInUp">
          <div class="member">
            <img src="public/image/team/vy.jpg" class="img-fluid" alt="">
            <div class="member-info">
              <div class="member-info-content">
                <h4>Nguyễn Huyền Trang</h4>
                <span>Marketing Executive</span>
                <span>Đại học Ngoại Thương, Hà Nội</span>
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
          <img src="public/image/survey.png" class="img-fluid" alt="">
        </div>
        <div class="col-lg-6 wow fadeInUp pt-4 pt-lg-0 order-2 order-lg-1 find-university">
          <h2>Chúng tôi cần bạn!</h2>
          <h3>Ý kiến của bạn sẽ giúp chúng tôi hoàn thiện giải pháp hơn.</h3>
          <!-- Du Search box and Find Button -->
          <div>
          <a href="https://bitly.com.vn/5fnd50" target="_blank" class="btn-survey scrollto">Ý KIẾN CỦA BẠN</a>
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
                    <p>Dự án Active Ageing được ra đời với nỗi trăn trở về một vấn đề mà Việt Nam và các nước trong khu vực đang và sẽ phải đối mặt trong tương lai gần, đó chính là già hoá dân số và những hệ luỵ có liên quan. Chúng tôi tin rằng việc đồng hành cùng mỗi cá nhân nâng cao sự chủ động trong quản lý tài chính và bảo vệ sức khoẻ sẽ tạo ra những ảnh hưởng tích cực cho cộng đồng, góp phần kiến tạo một tương lai bền vững hơn.</p>
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
                    <h4>Liên hệ</h4>
                    <p>
                      (Ms.) Lâm Tố Như<br>
                      External Relations Executive<br>
                      <strong>Phone:</strong> +84 914864707<br>
                      <strong>Email:</strong> lamtonhu1801015046@ftu.edu.vn<br>
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
      <li class="active"><a id='home' href="#intro">Trang Chủ</a></li>
      <li><a href="#about">Về chúng tôi</a></li>
      <li><a href="#portfolio">Vấn đề xã hội</a></li>
      <li><a id='find-uni' href="#">Lập kế hoạch về hưu</a></li>
      <li><a id='scholarship' href="#">Thông tin</a></li>
      <li><a href="#" id='life'>Đăng ký thành viên</a></li>
      <li><a href="#footer">Liên hệ</a></li>
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
    Vấn đề xã hội
  ============================-->
  <section id="portfolio" class="section-bg">
    <div class="container">

      <header class="section-header">
        <h3 class="section-title">Vấn đề xã hội</h3>
      </header>
      <div class="content-issue">
      <p>Theo Vụ Liên Hiệp Quốc về vấn đề Kinh tế và Xã hội, tốc độ già hoá dân số tại các quốc gia Đông Nam Á hiện nay rất nhanh. Theo báo cáo năm 2019 của Ủy ban Quốc gia về Người cao tuổi Việt Nam, khoảng 1/5 người Việt Nam sẽ từ 60 tuổi trở lên vào năm 2035, đưa Việt Nam trở thành một trong ba nước ASEAN duy nhất có tỷ lệ người cao tuổi trên 20%.</p>
      <p>Trước thực tế đó, sự chuẩn bị cho giai đoạn già hoá dân số là vô cùng cấp thiết. Nếu không nắm bắt được giai đoạn vàng lúc này, 15 năm tới, Việt Nam sẽ rơi vào bẫy thu nhập trung bình và người dân sẽ ngày càng có nguy cơ “già trước khi giàu”.</p>
      <p class="quote">“Getting old before getting rich” - khái niệm vĩ mô, tác động cá nhân.</p>
      <p>Báo cáo “Vietnam as an Ageing Society” mới đây đã chỉ ra rằng có đến 16% người Việt Nam trên 60 tuổi rơi vào nhóm nghèo. Trong khi đó, chỉ có 23,5% người trên 60 tuổi được hưởng lương hưu hoặc trợ cấp bảo hiểm xã hội hàng tháng. Thu nhập của người cao tuổi sau về hưu phụ thuộc lớn vào trợ cấp từ con cái. Mô hình gia đình truyền thống nhiều thế hệ cùng chung sống dưới một mái nhà đang chuyển dần sang mô hình gia đình hạt nhân. Khi đó, người cao tuổi phải sống xa con cái và có khả năng sống một mình. Ngoài ra, hệ thống chăm sóc sức khỏe còn hạn chế ở Việt Nam, cùng với chi phí khám chữa bệnh ngày càng tăng đã ảnh hưởng tiêu cực đến sự hưởng thụ sau khi về hưu của người cao tuổi. 
      </p>
      <p>Nếu không có thái độ tích cực chuẩn bị cho độ tuổi trên 60, người cao tuổi sẽ phải đối mặt với những hậu quả nghiêm trọng như hạn chế tài chính và hạn chế tiếp cận các dịch vụ chăm sóc sức khỏe.</p>
      <p class="quote">"Những vấn đề trên sẽ trở nên càng trầm trọng hơn khi 15 năm tới đây, số người cao tuổi sẽ tăng"</p>
      <p>Nhìn thấy những vấn đề trên sẽ trở nên càng trầm trọng hơn khi 15 năm tới đây, số người cao tuổi sẽ tăng và chiếm hơn ⅕ dân số, Active Ageing Vietnam mong muốn có thể cộng hưởng đến những thay đổi hiện có để giúp mỗi người có sự chuẩn bị cho tuổi già tốt hơn, sớm hơn. Cùng với những thay đổi chính sách của Chính phủ, Active Ageing là một giải pháp tối ưu trong việc.</p>
      <p class="quote">"Thúc đẩy tư duy tích cực hướng tới chuẩn bị an toàn tài chính và tiếp cận chăm sóc sức khỏe là vô cùng cần thiết"</p>
      <p>chuẩn bị cho một Việt Nam sẽ là một quốc gia có già hóa dân số vào năm 2035.</p>
      <p>Trong giai đoạn đầu, đối tượng mục tiêu của chúng tôi là những người lao động có thu nhập trung bình ít nhất 15 năm trước khi nghỉ hưu.</p>
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
          <li class="active"><a id='home' href="#intro">Trang Chủ</a></li>
          <li><a href="#about">Về chúng tôi</a></li>
          <li><a id='university' href="#">Vấn đề xã hội</a></li>
          <li><a id='find-uni' href="#">Lập kế hoạch về hưu</a></li>
          <li><a id='scholarship' href="#">Thông tin</a></li>
          <li><a href="#" id='life'>Đăng ký thành viên</a></li>
          <li><a href="#footer">Liên hệ</a></li>
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
            <li class="active"><a id='home' href="#intro">Trang Chủ</a></li>
            <li><a href="#about">Về chúng tôi</a></li>
            <li><a id='university' href="#">Vấn đề xã hội</a></li>
            <li><a id='find-uni' href="#">Lập kế hoạch về hưu</a></li>
            <li><a id='scholarship' href="#">Thông tin</a></li>
            <li><a href="#" id='life'>Đăng ký thành viên</a></li>
            <li><a href="#footer">Liên hệ</a></li>
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
        <li class="active"><a id='home' href="#intro">Trang Chủ</a></li>
        <li><a href="#about">Về chúng tôi</a></li>
        <li><a id='university' href="#">Vấn đề xã hội</a></li>
        <li><a id='find-uni' href="#">Lập kế hoạch về hưu</a></li>
        <li><a id='scholarship' href="#">Thông tin</a></li>
        <li><a href="#" id='life'>Đăng ký thành viên</a></li>
        <li><a href="#footer">Liên hệ</a></li>
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