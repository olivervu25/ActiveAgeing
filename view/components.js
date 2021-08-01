const components = {}
components.welcomeScreen = `
<!--==========================
  Intro Section
============================-->
<div id="carouselExampleControls" class="carousel slide" data-interval="1000" data-bs-ride="carousel">
  <div class="carousel-inner">
  <div class="carousel-item active" data-interval="1000">
    <section id="intro"  class="clearfix">

    <div class="container d-flex h-100">
      <div class="row justify-content-center align-self-center">
      <div class="col-md-3 intro-info order-md-first order-last">
        <h3>Đi tìm hạnh phúc thời covid-19: an toàn tài chính và sức khoẻ tinh thần</h3>
        <div>
          <a href="./posts/webinar.html" class="btn-get-started scrollto">Tìm hiểu ngay</a>
        </div>
      </div>
      <div class="col-md-9 intro-img order-md-last order-first">
      <img src="./public/image/slider.jpg" alt="" class="img-fluid">
    </div>
      </div>
    </div>
    </section><!-- #intro -->     </div>
    <div class="carousel-item" data-interval="1000">
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
    <div class="carousel-item" data-interval="1000">
    <section id="intro" class="clearfix">

    <div class="container d-flex h-100">
    <div class="row justify-content-center align-self-center">
      <div class="col-md-6 intro-info order-md-first order-last">
        <h2>Già hoá dân số không chỉ là một vấn đề vĩ mô mà còn tác động đến mỗi cá nhân, mỗi gia đình</h2>
      </div>
    
      <div class="col-md-6 intro-img order-md-last order-first">
        <img src="public/image/ageing-problem.png" alt="" class="img-fluid">
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
<section id="call-to-action" class="call-to-action wow bounceInUp scale" style="visibility: visible; animation-duration: 1.4s; animation-name: bounceInUp;">
    <div class="container" data-aos="zoom-out">
      <div class="row">
        <div class="col-lg-9 text-center text-lg-start">
          <h3 class="cta-title" style="font-family : 'Arial'; font-size: 19px">Hot : Hội thảo “đi tìm hạnh phúc thời covid-19: an toàn tài chính và sức khoẻ tinh thần”!</h3>
          <p class="cta-text">"Tham gia ngay, nhận quà liền tay" </br>
          Nhận ngay sách Spenditude, khóa coaching cùng chuyên gia và tài khoản premium Active Ageing Vietnam!
          </p>
          <p class="cta-text" ></p>
        </div>
        <div class="col-lg-3 cta-btn-container text-center">
        <div class="container">
        <div class ="row">
        <a class="cta-btn align-middle" id="" href="./posts/webinar.html" style="text-transform: uppercase;">Tìm hiểu ngay</a>
        </div>
        <div class = "row">
        <a class="cta-btn align-middle register-webinar" id="" href="" style="text-transform: uppercase;">Đăng kí tham dự</a>
        </div>
        </div>
        </div>
      </div>

    </div>
  </section>

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
            <a id="learn_more_about" href="#"><h4>Tìm hiểu thêm những giải pháp từ Active Ageing Vietnam →</h4></a>
            </div>
          </div>
            
        </div>


      </div>
    </div>

  </section><!-- #about -->
  

  <section id="about" class="wow fadeInUp">
      <div class="container min-height">
      <header class="section-header" style="text-align: center;">
          <h3 style="">Gói giải pháp của Active Ageing Vietnam</h3>
          <p></p>
        </header>

        <div class="row">

          <div class="col-md-6 col-lg-3 wow bounceInUp" data-wow-duration="1.4s">
            <div class="box">
              <div class="icon" style="background: #ECF9F4;"><i class="material-icons" style="color: #12B281;">construction</i></div>
              <h4 class="title"><a href="">Công cụ</a></h4>
              <p class="description">Hỗ trợ tính toán, quản lý, lập báo cáo qua website và app</p>
            </div>
          </div>
          <div class="col-md-6 col-lg-3 wow bounceInUp" data-wow-duration="1.4s">
            <div class="box">
            <div class="icon" style="background: #ECF9F4;"><i class="material-icons" style="color: #12B281;">school</i></div>
              <h4 class="title"><a href="">Kiến thức</a></h4>
              <p class="description">Các bài viết chuyên môn, chia sẻ từ diễn giả qua webinars, hội thảo</p>
            </div>
          </div>

          <div class="col-md-6 col-lg-3 wow bounceInUp" data-wow-delay="0.1s" data-wow-duration="1.4s">
            <div class="box">
            <div class="icon" style="background: #ECF9F4;"><i class="material-icons" style="color: #12B281;">share</i></div>
              <h4 class="title"><a href="">Sự kết nối</a></h4>
              <p class="description">Các cộng đồng có cùng mối quan tâm, mạng lưới chuyên gia</p>
            </div>
          </div>

          <div class="col-md-6 col-lg-3 wow bounceInUp" data-wow-delay="0.1s" data-wow-duration="1.4s">
          <div class="box">
          <div class="icon" style="background: #ECF9F4;"><i class="material-icons" style="color: #12B281;">layers</i></div>
            <h4 class="title"><a href="">Sự cố vấn</a></h4>
            <p class="description">Cơ hội tương tác với chuyên gia và nhận cố vấn</p>
          </div>
        </div>
          

        </div>
      </div>
      </div>
    </section><!-- #clients -->

    
    <section id="about" class="wow fadeInUp">
      <div class="container">
      <header class="section-header">
    <h3>Các bài viết, tài liệu</h3>
  </header>

  <div class="row feature-item wow fadeInUp" >

  <div id="listPost" class="row">

  <div class="col-md-6 col-lg-4 wow bounceInUp" data-wow-delay="0.1s" data-wow-duration="1.4s" style="visibility: visible; animation-duration: 1.4s; animation-delay: 0.1s;">
      <a href="./posts/Lap ke hoach ve huu cung active ageing vietnam.html"></a>
          <div class="box" style="padding: 0;">
          <a href="./posts/Lap ke hoach ve huu cung active ageing vietnam.html">
          <div class="image" style="background: #e6fdfc;">
            <img width="100%" src="./public/image/posts/post4.jpeg">
          </div>
          </a>
          <div style="padding: 5px 30px"><a href="./posts/Lap ke hoach ve huu cung active ageing vietnam.html"></a>
          <h4 class="title">
            <a href="./posts/Lap ke hoach ve huu cung active ageing vietnam.html"></a>
            <a href="./posts/Lap ke hoach ve huu cung active ageing vietnam.html">Lập kế hoạch về hưu cùng Active Ageing Vietnam</a>
          </h4>
          </div>
          </div>
  </div>

  <div class="col-md-6 col-lg-4 wow bounceInUp" data-wow-delay="0.1s" data-wow-duration="1.4s" style="visibility: visible; animation-duration: 1.4s; animation-delay: 0.1s;">
      <a href="./posts/Giai ma phuong phap 50 30 20.html">
      </a><div class="box" style="padding: 0;"><a href="./posts/Giai ma phuong phap 50 30 20.html">
        <div class="image" style="background: #e6fdfc;"><img width="100%" src="./public/image/posts/post6.jpeg"></div>
        </a><div style="padding: 5px 30px"><a href="./posts/Giai ma phuong phap 50 30 20.html"></a><h4 class="title"><a href="./posts/Giai ma phuong phap 50 30 20.html"></a><a href="./posts/Giai ma phuong phap 50 30 20.html">Giải mã phương pháp 50/20/30 trong quản lý tài chính cá nhân hiệu quả</a></h4></div>
      </div>
      
    </div>

    <div class="col-md-6 col-lg-4 wow bounceInUp" data-wow-delay="0.1s" data-wow-duration="1.4s" style="visibility: visible; animation-duration: 1.4s; animation-delay: 0.1s;">
    <a href="./posts/Bo tui nhung thoi quen tot cho suc khoe.html">
    </a><div class="box" style="padding: 0;"><a href="./posts/Bo tui nhung thoi quen tot cho suc khoe.html">
      <div class="image" style="background: #e6fdfc;"><img width="100%" src="./public/image/posts/post7.jpeg"></div>
      </a><div style="padding: 5px 30px"><a href="./posts/Bo tui nhung thoi quen tot cho suc khoe.html"></a><h4 class="title"><a href="./posts/Bo tui nhung thoi quen tot cho suc khoe.html"></a><a href="./posts/Bo tui nhung thoi quen tot cho suc khoe.html">Bỏ túi những thói quen tốt cho sức khỏe</a></h4></div>
    </div>
    
  </div>
      
  </div>
      </div>
    </section>

  <!--==========================
    Team Section
  ============================-->
  <section id="team" class="section-bg">
  
    <div class="container">
      <div class="section-header">
        <h3>Chúng tôi</h3>
        <p>Những người trẻ cùng chung nỗi trăn trở</p>
      </div>
      <div class = "row justify-content-md-center">
      <div class="col-lg-3 col-md-9 wow fadeInUp">
          <div class="member">
            <img src="public/image/team/co-thuy.jpeg" class="img-fluid" alt="">
            <div class="member-info">
              <div class="member-info-content">
                <h4>Hồ Thị Hải Thùy (ThS)</h4>
                <span>Project Mentor</span>
                <span>Đại học Ngoại Thương CS2. TPHCM</span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-9 wow fadeInUp">
        <div class="member">
          <img src="public/image/team/co-khanh.jpeg" class="img-fluid" alt="">
          <div class="member-info">
            <div class="member-info-content">
              <h4>Phạm Thị Mai Khanh (PhD)</h4>
              <span>Project Mentor</span>
              <span>Đại học Ngoại Thương CS2. TPHCM</span>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-9 wow fadeInUp">
      <div class="member">
        <img src="public/image/team/co-chat.jpg" class="img-fluid" alt="">
        <div class="member-info">
          <div class="member-info-content">
            <h4>Trần Nguyên Chất (PhD)</h4>
            <span>Project Mentor</span>
            <span>Đại học Ngoại Thương CS2. TPHCM</span>
          </div>
        </div>
      </div>
    </div>
        <div class="col-lg-3 col-md-9 wow fadeInUp">
          <div class="member">
            <img src="public/image/team/thay-quang.png" class="img-fluid" alt="">
            <div class="member-info">
              <div class="member-info-content">
                <h4>Ngô Ngọc Quang (PhD)</h4>
                <span>Project Mentor</span>
                <span>Đại học Ngoại Thương CS2. TPHCM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row justify-content-md-center">
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
        <div class="col-lg-3 col-md-9 wow fadeInUp">
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
            <img src="public/image/team/thu2.jpg" class="img-fluid" alt="">
            <div class="member-info">
              <div class="member-info-content">
                <h4>Trần Minh Thư</h4>
                <span>Project Development Executive</span>
                <span>Đại học Ngoại Thương CS2. TPHCM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row  justify-content-md-center">

        <div class="col-lg-3 col-md-6 wow fadeInUp">
          <div class="member">
            <img src="public/image/team/quang.png" class="img-fluid" alt="">
            <div class="member-info">
              <div class="member-info-content">
                <h4>Lưu Vũ Quang</h4>
                <span>App Designer</span>
                <span>Đại học Ngoại Thương Hà Nội</span>
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

        


      </div>
      <div class="row  justify-content-md-center">
      <div class="col-lg-3 col-md-6 wow fadeInUp">
          <div class="member">
            <img src="public/image/team/vy.jpg" class="img-fluid" alt="">
            <div class="member-info">
              <div class="member-info-content">
                <h4>Hồ Phan Thanh Vy</h4>
                <span>Finance Executive</span>
                <span>Đại học Ngoại Thương CS2. TPHCM</span>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-3 col-md-6 wow fadeInUp">
          <div class="member">
            <img src="public/image/team/tuan.jpg" class="img-fluid" alt="">
            <div class="member-info">
              <div class="member-info-content">
                <h4>Nguyễn Quốc Tuấn</h4>
                <span>Marketing Executive</span>
                <span>Đại học Ngoại Thương CS2. TPHCM</span>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-3 col-md-6 wow fadeInUp">
          <div class="member">
            <img src="public/image/team/trang.jpg" class="img-fluid" alt="">
            <div class="member-info">
              <div class="member-info-content">
                <h4>Nguyễn Huyền Trang</h4>
                <span>Marketing Executive</span>
                <span>Đại học Ngoại Thương Hà Nội</span>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section><!-- #team -->
  <section id="clients" class="wow fadeInUp">
      <div class="container">

        <header class="section-header">
          <h3>Chúng tôi vinh dự được hỗ trợ từ</h3>
        </header>

        <div class="row">

        <div class="col-md-6 col-lg-3 wow bounceInUp" data-wow-duration="1.4s">
            <img src="public/image/clients/client-3.png" alt="">
        </div>
        
        <div class="col-md-6 col-lg-3 wow bounceInUp" data-wow-duration="1.4s">
          
          <img src="public/image/clients/client-2.png" alt="">
        </div>

        <div class="col-md-6 col-lg-3 wow bounceInUp" data-wow-delay="0.1s" data-wow-duration="1.4s">
            <img src="public/image/clients/client-6.png" alt="">
        </div>

        <div class="col-md-6 col-lg-3 wow bounceInUp" data-wow-delay="0.1s" data-wow-duration="1.4s">
            <img src="public/image/clients/client-15.jpeg" alt="">
        </div>
      </div>
      <div class='row justify-content-md-center'>
          <div class="col-md-6 col-lg-3 wow bounceInUp" data-wow-delay="0.1s" data-wow-duration="1.4s">
          <img src="public/image/clients/client-12.jpeg" alt="">
          </div>
          <div class="col-md-6 col-lg-3 wow bounceInUp" data-wow-delay="0.1s" data-wow-duration="1.4s">
              <img src="public/image/clients/client-13.svg" alt="">
          </div>
          <div class="col-md-6 col-lg-3 wow bounceInUp" data-wow-delay="0.1s" data-wow-duration="1.4s">
          <img src="public/image/clients/client-11.jpg" alt="">
          </div>
          <div class="col-md-6 col-lg-3 wow bounceInUp" data-wow-delay="0.1s" data-wow-duration="1.4s">
            <img src="public/image/clients/client-14.png" alt="">
          </div>
      </div>

        <div class="owl-carousel clients-carousel">
          <img src="public/image/clients/client-1.png" alt="">
          <img src="public/image/clients/client-9.jpg" alt="">
          <img src="public/image/clients/client-4.png" alt="">
          <img src="public/image/clients/client-5.png" alt="">
          <img src="public/image/clients/client-10.jpg" alt="">
        </div>

      </div>
    </section><!-- #clients -->
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
          <a href="" target="_blank" class="btn-survey scrollto">Ý KIẾN CỦA BẠN</a>
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
                    <h4>Active Ageing Vietnam</h4>
                    <p>Dự án Active Ageing được ra đời với nỗi trăn trở về một vấn đề mà Việt Nam và các nước trong khu vực đang và sẽ phải đối mặt trong tương lai gần, đó chính là già hoá dân số và những hệ luỵ có liên quan. Chúng tôi tin rằng việc đồng hành cùng mỗi cá nhân nâng cao sự chủ động trong quản lý tài chính và bảo vệ sức khoẻ sẽ tạo ra những ảnh hưởng tích cực cho cộng đồng, góp phần kiến tạo một tương lai bền vững hơn.</p>
                  </div>
                </div>
  
                <div class="col-sm-6">
                  <div class="footer-contact">
                    <h4>Liên hệ</h4>
                    <p>
                      (Ms.) Lâm Tố Như<br>
                      External Relations Executive<br>
                      <strong>Phone:</strong> +84 914864707<br>
                      <strong>Email:</strong> activeageingvietnam@gmail.com<br>
                    </p>
                  </div>
  
              
  
                </div>
  
            </div>
  
          </div>
  
          <div class="col-lg-6">
  
            <div class="form">
              
              <h4>Đặt câu hỏi cho chúng tôi</h4>
              <p>Chúng tôi sẵn sàng lắng nghe mọi câu hỏi, băn khoăn từ bạn!</p>
              <form action="" method="post" role="form" class="contactForm">
                <div class="form-group">
                  <input type="text" name="name" class="form-control" id="name" placeholder="Tên của bạn" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                  <div class="validation"></div>
                </div>
                <div class="form-group">
                  <input type="email" class="form-control" name="email" id="email" placeholder="Email" data-rule="email" data-msg="Please enter a valid email" />
                  <div class="validation"></div>
                </div>
                <div class="form-group">
                  <input type="text" class="form-control" name="subject" id="subject" placeholder="Chủ đề" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                  <div class="validation"></div>
                </div>
                <div class="form-group">
                  <textarea class="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Nội dung"></textarea>
                  <div class="validation"></div>
                </div>
  
                <div id="sendmessage">Your message has been sent. Thank you!</div>
                <div id="errormessage"></div>
  
                <div class="text-center"><button type="submit" title="Send Message">Gửi câu hỏi</button></div>
              </form>
            </div>
  
          </div>
  
          
  
        </div>
  
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
  Intro Section
============================-->
<section id="intro" class="clearfix">
  <div class="container d-flex h-100">
    <div class="row justify-content-center align-self-center">
      <div class="col-md-6 intro-info order-md-first order-last">
        <h2>Getting old before<br><span>Getting rich...</span></h2>
        <div>
          <a href="#portfolio" class="btn-get-started">Chi tiết vấn đề</a>
        </div>
      </div>

      <div class="col-md-6 intro-img order-md-last order-first">
        <img src="public/image/issue.png" alt="" class="img-fluid">
      </div>
    </div>

  </div>
</section><!-- #intro -->

<main id='main'>
  <!--==========================
    Vấn đề xã hội
  ============================-->
  <section id="portfolio" class="section-bg fadeIn">
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
      <div class="container">
          <div class="row counters">
  
            <div class="col-lg-4 col-6 text-center">
              <span data-toggle="counter-up">20%</span>
              <p>Người trên 60 tuổi vào năm 2035</p>
            </div>
  
            <div class="col-lg-4 col-6 text-center">
              <span data-toggle="counter-up">16%</span>
              <p>Người trên 60 tuổi vào nhóm nghèo</p>
            </div>
  
            <div class="col-lg-4 col-6 text-center">
              <span data-toggle="counter-up">23.5%</span>
              <p>Người trên 60 tuổi có lương hưu</p>
            </div>
          </div>
    </div>
      <div class = "row space-need">
        <div class="col-lg-6">
          <div class="scholarship-img">
            <img src="./public/image/make-plan.jpeg" alt="" class="img-fluid">
          </div>
        </div>
        <div class ="col-lg-6">
          <p>Nếu không có thái độ tích cực chuẩn bị cho độ tuổi trên 60, người cao tuổi sẽ phải đối mặt với những hậu quả nghiêm trọng như hạn chế tài chính và hạn chế tiếp cận các dịch vụ chăm sóc sức khỏe.</p>
          <p class="quote">"Những vấn đề trên sẽ trở nên càng trầm trọng hơn trong 15 năm tới đây, khi số người cao tuổi sẽ gia tăng đáng kể"</p>
        </div>
      </div>

      <div class= "row space-need-1">
        <div class="col-lg-6">
          <p>Nhận thấy những vấn đề trên sẽ trở nên càng trầm trọng hơn khi 15 năm tới đây, số người cao tuổi sẽ tăng và chiếm hơn ⅕ dân số, Active Ageing Vietnam mong muốn có thể cộng hưởng với những thay đổi hiện có để giúp mỗi người có sự chuẩn bị cho tuổi già tốt hơn, sớm hơn. Cùng với những thay đổi chính sách của Chính phủ, Active Ageing là một giải pháp tối ưu cho tình trạng già hóa dân số tại Việt Nam.</p>
          <p class="quote">"Thúc đẩy tư duy tích cực hướng tới chuẩn bị an toàn tài chính và tiếp cận chăm sóc sức khỏe là vô cùng cần thiết"</p>
        </div>

        <div class="col-lg-6">
          <img src="./public/image/active ageing.jpg" alt="" class="img-fluid">
        </div>
      </div>

      <p>
      Chuẩn bị cho Việt Nam - quốc gia được dự đoán sẽ bước vào thời kỳ dân số già vào năm 2035. <br>
      Trong giai đoạn đầu, đối tượng mục tiêu của chúng tôi là những người lao động có thu nhập trung bình ít nhất 15 năm trước khi nghỉ hưu.
      </p>

    </div>
  </section><!-- #portfolio -->

  <div class="container" style="padding-top: 30px;">
      <header class="section-header">
      <h3>Giải pháp xã hội của Active Ageing Vietnam</h3>
      <p></p>
    </header>
    <div class="row feature-item wow fadeInUp" style="text-align: justify; visibility: visible; animation-name: fadeInUp;">
    <p style="color : #232323">
      Hiện nay, thế giới đang phải vật lộn với quá trình già hóa dân số diễn ra rất nhanh, và Việt Nam cũng không phải là ngoại lệ. Thực tế, Việt Nam là một trong những quốc gia có tốc độ già hóa dân số nhanh nhất, đặt nước ta trước thách thức “già trước khi giàu”. Nếu thiếu sự chuẩn bị chủ động cho tuổi già, mọi người sẽ gặp phải các vấn đề nghiêm trọng như: thiếu hụt tài chính, suy giảm sức khoẻ,...khi về già.
    </p>
    <p>
    Video này thể hiện mức độ mà Active Ageing Vietnam hiểu rõ nguyên nhân gốc rễ của vấn đề xã hội nêu trên; giải thích quá trình mà chúng tôi tiếp cận chúng để đưa ra các giải pháp cho người lao động nhằm giúp họ nâng cao mức sống của mình khi về hưu; và chỉ ra những tác động xã hội mà Active Ageing Vietnam có thể mang đến cho cộng đồng.

    </p>
    </div>
        <div class="row feature-item">
          <div class="col-lg-8 wow fadeInUp" style="visibility: visible; animation-name: fadeInUp;">
        <div class= "embed-responsive embed-responsive-16by9">
        <iframe class= "embed-responsive-item" width="100%" src="https://www.youtube.com/embed/K22EmimdUsk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>    
           
          </div>
          <div class="col-lg-4 wow fadeInUp pt-5 pt-lg-0" style="text-align: justify; visibility: visible; animation-name: fadeInUp;">
            
            <p style="color : #232323">
            Bên cạnh đó, chúng tôi đã mời ông Lê Hồng Lĩnh (CEO của Hiệp hội CFO Việt Nam) và ông Ngô Đình Đức (Nhà sáng lập kiêm Tổng Giám đốc Công ty Cổ phần Tư vấn POCD) góp mặt trong video này nhằm chia sẻ quan điểm về giải pháp của Active Ageing Vietnam. 
            </p>
          </div>
        </div>
        <div class="row feature-item wow fadeInUp">
            <p>
            Các tác động xã hội mà chúng tôi hướng đến dựa trên mục tiêu phát triển bền vững thứ #1, #3 và #11 của Liên Hợp Quốc.”
            </p>
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
                    <h4>Active Ageing Vietnam</h4>
                    <p>Dự án Active Ageing được ra đời với nỗi trăn trở về một vấn đề mà Việt Nam và các nước trong khu vực đang và sẽ phải đối mặt trong tương lai gần, đó chính là già hoá dân số và những hệ luỵ có liên quan. Chúng tôi tin rằng việc đồng hành cùng mỗi cá nhân nâng cao sự chủ động trong quản lý tài chính và bảo vệ sức khoẻ sẽ tạo ra những ảnh hưởng tích cực cho cộng đồng, góp phần kiến tạo một tương lai bền vững hơn.</p>
                  </div>
                </div>
  
                <div class="col-sm-6">
                  <div class="footer-links">
                    <h4>Liên hệ</h4>
                    <p>
                      (Ms.) Lâm Tố Như<br>
                      External Relations Executive<br>
                      <strong>Phone:</strong> +84 914864707<br>
                      <strong>Email:</strong> activeageingvietnam@gmail.com
                      <br>
                    </p>
                  </div>
  
              
  
                </div>
  
            </div>
  
          </div>
  
          <div class="col-lg-6">
  
            <div class="form">
              
              <h4>Đặt câu hỏi cho chúng tôi</h4>
              <p>Chúng tôi sẵn sàng lắng nghe mọi câu hỏi, băn khoăn từ bạn!</p>
              <form action="" method="post" role="form" class="contactForm">
                <div class="form-group">
                  <input type="text" name="name" class="form-control" id="name" placeholder="Tên của bạn" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                  <div class="validation"></div>
                </div>
                <div class="form-group">
                  <input type="email" class="form-control" name="email" id="email" placeholder="Email" data-rule="email" data-msg="Please enter a valid email" />
                  <div class="validation"></div>
                </div>
                <div class="form-group">
                  <input type="text" class="form-control" name="subject" id="subject" placeholder="Chủ đề" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                  <div class="validation"></div>
                </div>
                <div class="form-group">
                  <textarea class="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Nội dung"></textarea>
                  <div class="validation"></div>
                </div>
  
                <div id="sendmessage">Your message has been sent. Thank you!</div>
                <div id="errormessage"></div>
  
                <div class="text-center"><button type="submit" title="Send Message">Gửi câu hỏi</button></div>
              </form>
            </div>
  
          </div>
  
          
  
        </div>
  
      </div>
    </div>

  </footer><!-- #footer -->
</main>



<a href="#" class="back-to-top"><i class="fa fa-chevron-up"></i></a>
<!-- Uncomment below i you want to use a preloader -->
<!-- <div id="preloader"></div> -->
`
components.scholarshipScreen = `
<main id="main">
<section id="about" class="section-bg">
      <div class="container justify-content-center align-self-center">

        <header class="section-header" style="margin-top: 13%;">
          <h3>Thông tin</h3>
          
        </header>

        <div id='listPost' class="row">

          <div class="col-md-6 col-lg-4 wow bounceInUp prepare-retire" data-wow-duration="1.4s" style="visibility: visible; animation-duration: 1.4s; animation-name: bounceInUp;">
            <div class="box">
              <div class="icon" style="background: #fceef3;"><i class="ion-ios-analytics-outline" style="color: #ff689b;"></i></div>
              <h4 class="title"><a href="">Chuẩn bị về hưu </a></h4>
              <p class="description">Cung cấp công cụ, giải pháp và thông tin giúp chuẩn bị kế hoạch về hưu một các hiệu quả.</p>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 wow bounceInUp prosperous-retire" data-wow-duration="1.4s" style="visibility: visible; animation-duration: 1.4s; animation-name: bounceInUp;">
            <div class="box">
              <div class="icon" style="background: #fff0da;"><i class="ion-ios-bookmarks-outline" style="color: #e98e06;"></i></div>
              <h4 class="title"><a href="">Về hưu thịnh vượng</a></h4>
              <p class="description">Cung cấp thong tin hữu ích chuẩn bị cho cuộc sống về hưu thịnh vượng.</p>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 wow bounceInUp healthy-retire" data-wow-delay="0.1s" data-wow-duration="1.4s" style="visibility: visible; animation-duration: 1.4s; animation-delay: 0.1s; animation-name: bounceInUp;">
            <div class="box">
              <div class="icon" style="background: #eafde7;"><i class="ion-ios-speedometer-outline" style="color:#41cf2e;"></i></div>
              <h4 class="title"><a href="">Về hưu khoẻ mạnh</a></h4>
              <p class="description">Cung cấp thong tin hữu ích chuẩn bị cho cuộc sống về hưu khỏe mạnh.</p>
            </div>
          </div>

          <div class="col-md-6 col-lg-4 wow bounceInUp happy-retire" data-wow-delay="0.2s" data-wow-duration="1.4s" style="visibility: visible; animation-duration: 1.4s; animation-delay: 0.2s; animation-name: bounceInUp;">
            <div class="box">
              <div class="icon" style="background: #e1eeff;"><i class="ion-ios-world-outline" style="color: #2282ff;"></i></div>
              <h4 class="title"><a href="">Về hưu an vui</a></h4>
              <p class="description">Cung cấp thong tin hữu ích chuẩn bị cho cuộc sống về hưu an vui.</p>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 wow bounceInUp news" data-wow-delay="0.2s" data-wow-duration="1.4s" style="visibility: visible; animation-duration: 1.4s; animation-delay: 0.2s; animation-name: bounceInUp;">
            <div class="box">
              <div class="icon" style="background: #ecebff;"><i class="ion-ios-clock-outline" style="color: #8660fe;"></i></div>
              <h4 class="title"><a href="">Tin tức</a></h4>
              <p class="description">Cập nhật các tin tức sự kiện và thông tin tài chính, sức khỏe hữu ích từ Active Ageing Vietnam.</p>
            </div>
          </div>

        </div>

      </div>
    </section>
    </main>
`
components.studentLifeScreen = `
      <section id="intro" class="clearfix intro">
        <div class="container d-flex h-100">
          <div class="row justify-content-center align-self-center">
            <div class="col-md-6 intro-info order-md-first order-last">
              <h2>Active Ageing <br><span>Vietnam</span></h2>
              
            </div>

            <div class="col-md-6 intro-img order-md-last order-first">
              <img src="public/image/regist.png" alt="" class="img-fluid">
            </div>
          </div>

        </div>
      </section><!-- #intro -->
        <div>
            <main>
            <!--==========================
          University Section
        ============================-->
            <div class="container">
              <header class="section-header">
                <br><br>
                <h3 class="section-title">Đăng ký thành viên</h3>
                <p>Bạn muốn một kế hoạch về hưu, quản lý tài chính và sức khỏe một cách khoa học, được theo sát và cập nhật điều độ mà không lo dữ liệu bị thất lạc? Hãy sớm trở thành hội viên của Active Ageing Vietnam, để có thể nhận được nhiều quyền lợi đặc biệt và cho chúng tôi cơ hội mang đến cho bạn những trải nghiệm tốt nhất tại đây. Hãy đăng ký ngay!</p>
              </header>
              </main>
            </div>
            <div class = "container">
            <div class = "container-fluid">
            <div class = "membership">
            <form action="" method="post" role="form" class="contactForm">
            <div class="col-lg-12">
              <div class="form-group">
                <input type="text" name="name" class="form-control" id="name" placeholder="Họ và tên">
                <div class="validation"></div>
              </div>
              <div class="form-group">
                <input type="text" class="form-control" name="email" id="email" placeholder="Địa chỉ email" />
                <div class="validation"></div>
              </div>
              <div class="form-group">
              <select class="form-control" name= "flatform" id="address" style ="    font-size: 14px;">
              <option value=""selected disabled hidden>Nơi ở
              <option value="Hà Nội">Hà Nội
              <option value="Đà Nẵng">Đà Nẵng
              <option value="TP. Hồ Chí Minh">TP. Hồ Chí Minh
              <option value="Khác">Khác
              </select> 
              </div>
              <div class="form-group">
                <input value = "" class="form-control" name="job" id="job" placeholder="Công việc hiện tại" />
                <div class="validation"></div>
              </div>
              <div class="form-group">
                <input value = ""  class="form-control" name="phone" id="phone" placeholder="Số điện thoại"/>
                <div class="validation"></div>
              </div>
              <div class="form-group">
                <input value = ""  class="form-control" type="password" name="password" id="password" placeholder="Mật khẩu"/>
                <div class="validation"></div>
              </div>
            </div>
            <div id="submit_btn" class="text-center register"><button type="submit" title="Send Message">ĐĂNG KÝ</button></div>
            </form>
            </div>
            </div>
            </div>
            </div>


              <section id="faq" class="faq">
              <div class="container" data-aos="fade-up">
                <header class="section-header">
                  <h3>Câu hỏi thường gặp</h3>
                  <p>Những thắc mắc của bạn đều sẽ được giải đáp.</p>
                </header>
        
                <ul class="faq-list" data-aso="fade-up" data-aos-delay="100">
        
                  <li>
                    <div data-bs-toggle="collapse" class="collapsed question" href="#faq1">Lý do tôi nên đăng ký hội viên tại Active Ageing Vietnam?<i class="bi bi-chevron-down icon-show"></i><i class="bi bi-chevron-up icon-close"></i></div>
                    <div id="faq1" class="collapse" data-bs-parent=".faq-list">
                      <p>
                      Tác động xã hội của Active Ageing Vietnam được đo lường một phần dựa trên mức độ quan tâm của khách hàng. Do đó, quý khách hàng khi đăng ký trở thành hội viên không chỉ có thể trải nghiệm dịch vụ tốt hơn, mà còn góp phần cho chúng tôi phát triển dự án hoàn thiện hơn.
                      </p>
                    </div>
                  </li>
        
                  <li>
                    <div data-bs-toggle="collapse" href="#faq2" class="collapsed question">Lợi ích mà tôi nhận được khi trở thành hội viên của Active Ageing Vietnam?<i class="bi bi-chevron-down icon-show"></i><i class="bi bi-chevron-up icon-close"></i></div>
                    <div id="faq2" class="collapse" data-bs-parent=".faq-list">
                      <p>
                      -	Được lưu trữ, theo dõi thường trực kế hoạch về hưu đã lập.<br>
                      -	Được lưu trữ, theo dõi quá trình tiết kiệm, quản lý tài chính và tình hình sức khỏe.<br>
                      -	Được hướng dẫn, hỗ trợ lập kế hoạch về hưu.<br>
                      -	Được kết nối đến một cộng đồng những người có cùng mối quan tâm, sở thích.<br>
                      -	Được trải nghiệm dịch vụ chăm sóc khách hàng tốt hơn.<br>
                      -	Được đăng ký gói cao cấp của Active Ageing Vietnam (gói tư vấn cá nhân).<br>
                      -	Đóng góp ý kiến, chia sẻ trải nghiệm giúp chúng tôi nâng cao chất lượng dịch vụ.
                      </p>
                    </div>
                  </li>
                </ul>
        
              </div>
              </section>
          
            </div>
          </section><!-- #portfolio -->
   
        </main>
        </div> 

   
      <!--==========================
          Footer
        ============================-->
        <footer id="footer" class="section-bg">
          
            
          </footer><!-- #footer -->
  
  
        <a href="#" class="back-to-top"><i class="fa fa-chevron-up"></i></a>
        <!-- Uncomment below i you want to use a preloader -->
        <!-- <div id="preloader"></div> -->`
components.findScreen = `
      <!--==========================
      Intro Section
      ============================-->
      
      <section id="intro" class="clearfix">
      <div class="container d-flex h-100">
        <div class="row justify-content-center align-self-center">
          <div class="col-md-6 intro-info order-md-first order-last">
          <h2>Để <span>chúng tôi</span> tính toán kế hoạch về hưu giúp bạn.</h2s>
        
          <div>
          <a href="#retirement" class="btn-get-started">BẮT ĐẦU NGAY</a>
          </div>
          </div>
          <div class="col-md-6 intro-img order-md-last order-first">
            <img src="public/image/plan.png" alt="" class="img-fluid">
          </div>
        </div>


      </div>
      </section><!-- #intro -->
      
      <div class = "container" id="retirement">
      <div class="container-fluid">
          <br><br>
          <header class="section-header">
            <h3>LẬP KẾ HOẠCH VỀ HƯU</h3>
            <p>Bạn đang tìm kiếm một kế hoạch về hưu mà không biết bắt đầu như thế nào? Ngay đây chúng tôi sẽ giúp bạn. Thiết lập tầm nhìn kế hoạch về hưu của cá nhân bạn chỉ bằng việc trả lời một số câu hỏi. Bắt đầu thôi!</p>
          </header>
          <div class = "retirement">
          <div class="form">
          <div class="row">
          <div class="col-lg-6">
            <h4>Thông tin cơ bản</h4>
          </div>
          <div class="col-lg-6">
            <h4>Thông tin tài chính</h4>
          </div>
          </div>
            <p></p>
            <form action="" method="post" role="form" class="contactForm">
            <div class = "row">
            <div class="col-lg-6">
              <div class="form-group">
                <input type="text" name="name" class="form-control" id="name" placeholder="Tên của bạn">
                <div class="validation"></div>
              </div>
              <div class="form-group">
              <input value = "" class="form-control" name="email" id="email" placeholder="Địa chỉ email" data-rule="email" data-msg="Please enter at least 8 chars of subject" />
              <div class="validation"></div>
            </div>
              <div class="form-group">
              <select class="form-control" name= "flatform" id="address" style ="    font-size: 14px;">
              <option value=""selected disabled hidden>Nơi ở
              <option value="Hà Nội">Hà Nội
              <option value="Đà Nẵng">Đà Nẵng
              <option value="TP. Hồ Chí Minh">TP. Hồ Chí Minh
              <option value="Khác">Khác
              </select>              
              </div>
              <div class="form-group">
                <input value = "" class="form-control" name="currentAge" id="currentAge" placeholder="Tuổi hiện tại" />
                <div class="validation"></div>
              </div>
              <div class="form-group">
                <input value = "" class="form-control" name="retirementAge" id="retirementAge" placeholder="Tuổi nghỉ hưu dự đoán" />
                <span class="fa fa-info-circle errspan" data-toggle="tooltip" data-placement="top" title="Độ tuổi bạn dự định nghỉ hưu, giả định rằng bạn không đóng góp thêm vào quỹ tiết kiệm hưu trí của mình trong năm này. Ví dụ, nếu bạn nghỉ hưu ở tuổi 60, vui lòng nhập '60'. Trong trường hợp này, khoản đóng góp cuối cùng của bạn xảy ra khi bạn 59 tuổi. Chúng tôi cũng giả định rằng bạn thực hiện toàn bộ khoản đóng góp của mình vào cuối mỗi năm."></span>
                <div class="validation"></div>
              </div>
              <div class="form-group">
                <input value = ""  class="form-control" name="income" id="income" placeholder="Thu nhập hàng năm của hộ gia đình hiện tại (triệu VNĐ)" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                <span class="fa fa-info-circle errspan" data-toggle="tooltip" data-placement="top" title="Tổng thu nhập của bạn trong năm hiện tại. Nếu thu nhập trong năm nay của bạn là 180 triệu VND, vui lòng nhập '180'."></span>
                <div class="validation"></div>
              </div>
              <div class="form-group">
                <input value = ""  class="form-control" name="increase" id="increase" placeholder="Tăng trưởng thu nhập ước tính hằng năm (%)" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                <span class="fa fa-info-circle errspan" data-toggle="tooltip" data-placement="top" title="Tỷ lệ thu nhập ước tính tăng hàng năm cho đến năm nghỉ hưu dự kiến của bạn. Nếu bạn ước tính mức lương hàng năm của bạn sẽ tăng 2%, vui lòng nhập '2'"></span>
                <div class="validation"></div>
              </div>
            

              
              </div>


              <div class="col-lg-6">
                  <div class="form-group">
                  <input value = "" class="form-control" name="saving" id="saving" placeholder="Số dư quỹ tiết kiệm hưu trí hiện tại (triệu VNĐ)" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                  <span class="fa fa-info-circle errspan" data-toggle="tooltip" data-placement="top" title="Số dư tài khoản tiết kiệm về hưu hiện tại của bạn. Giả sử bạn đã tích góp được 700 triệu VNĐ cho quỹ tiết kiệm hưu trí của mình, vui lòng nhập '700'."></span>
                  <div class="validation"></div>
                </div>
                <div class="form-group">
                  <input value = "" class="form-control" name="saving" id="yearsRetirement" placeholder="Số năm sử dụng thu nhập sau về hưu" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                  <span class="fa fa-info-circle errspan" data-toggle="tooltip" data-placement="top" title="Tổng số năm bạn dự định sử dụng quỹ tiết kiệm hưu trí của mình để chi tiêu kể từ năm bạn nghỉ hưu. Giả sử bạn dự định về hưu ở tuổi 60 và mong muốn duy trì mức sống thoải mái trong vòng 30 năm nữa nhờ quỹ tiết kiệm hưu trí của mình, vui lòng nhập '30'. Nói cách khác, tuổi thọ dự kiến của bạn trong trường hợp này là 60 + 30 = 90 (tuổi)."></span>
                  <div class="validation"></div>
                </div>

              <div class="form-group">
              <input value = "" name="annualSaving" class="form-control" id="annualSaving" placeholder="Khoản tiết kiệm về hưu hàng năm tính theo phần trăm thu nhập (%)" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
              <span class="fa fa-info-circle errspan" data-toggle="tooltip" data-placement="top" title="Phần trăm thu nhập hàng năm sẽ được đóng góp vào quỹ tiết kiệm hưu trí của bạn mỗi năm. Nếu thu nhập hàng năm của bạn là 180 triệu VNĐ và tỷ lệ đóng góp hàng năm của bạn là 8%, vui lòng nhập '8'. Như vậy, mức đóng góp hàng năm bằng 180 x 8% = 14.4 triệu VNĐ."></span>
              <div class="validation"></div>
            </div>
            <script>
            $(function () {
              $('[data-toggle="tooltip"]').tooltip()
            })
            </script>
            <div class="form-group">
              <input value = "" class="form-control" name="retirementPay" id="retirementPay" placeholder="Thu nhập yêu cầu khi về hưu (%)" data-rule="email" data-msg="Please enter a valid email" />
              <span class="fa fa-info-circle errspan" data-toggle="tooltip" data-placement="top" title="Tỷ lệ phần trăm thu nhập hộ gia đình sau khi nghỉ hưu mà bạn nghĩ rằng bạn sẽ cần để trang trải các chi phí của mình khi nghỉ hưu. Số tiền này dựa trên thu nhập hộ gia đình trong năm làm việc cuối cùng của bạn (năm ngay trước khi bạn nghỉ hưu). Giả sử bạn dự định về hưu ở tuổi 60, thu nhập năm bạn 59 tuổi là 210 triệu VNĐ, và bạn tin rằng tỷ lệ này là 60%, vui lòng nhập '60'. Khi đó, số tiền mà bạn cần để chi tiêu vào năm 60 tuổi bằng 210 x 60% = 126 triệu VNĐ."></span>
              <div class="validation"></div>
            </div>
            <div class="form-group">
              <input value = "" class="form-control" name="rateBefore" id="rateBefore" placeholder="Lợi suất ước tính trước khi về hưu (%)" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
              <span class="fa fa-info-circle errspan" data-toggle="tooltip" data-placement="top" title="Tỷ suất lợi nhuận kỳ vọng hàng năm trên quỹ tiết kiệm hưu trí của bạn trước khi nghỉ hưu. Lưu ý rằng tỷ lệ này có xu hướng giảm theo thời gian. Nếu bạn kỳ vọng tỷ suất trên là 7%, vui lòng nhập '7'.".></span>
              <div class="validation"></div>
            </div>
            <div class="form-group">
              <input value = "" class="form-control" name="rateAfter" id="rateAfter" placeholder="Lợi suất ước tính trong quá trình về hưu (%)" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
              <span class="fa fa-info-circle errspan" data-toggle="tooltip" data-placement="top" title="Tỷ suất lợi nhuận kỳ vọng hàng năm trên quỹ tiết kiệm hưu trí của bạn sau khi nghỉ hưu. Lưu ý rằng tỷ lệ này có xu hướng giảm theo thời gian. Nếu bạn kỳ vọng tỷ suất trên là 4%, vui lòng nhập '4'."></span>
              <div class="validation"></div>
            </div>
            <div class="form-group">
              <input value = "" class="form-control" name="pension" id="pension" placeholder="Lương hưu và thu nhập sau về hưu khác (triệu VNĐ)" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
              <span class="fa fa-info-circle errspan" data-toggle="tooltip" data-placement="top" title="Thu nhập dự kiến từ lương hưu hoặc các nguồn khác. Nếu bạn dự đoán mức lương hưu của mình là 2 triệu VNĐ mỗi tháng hay 24 triệu VNĐ mỗi năm, vui lòng nhập '24'."></span>
              <div class="validation"></div>
            </div>

            
            
            
            </div>
            </div>
            <br><br>
              <div id="submit_btn" class="text-center"><button type="submit" title="Send Message">TÍNH TOÁN KẾ HOẠCH VỀ HƯU</button></div>
            </form>
          </div>
        </div>
        <div id ="resultForm">
        
          <div class ="row">
          <main id="introduction">
          <!--==========================
            Features Section
          ============================-->
          <section id="about">
              <div class="container" style="padding-top: 30px;">
                <h2 style = "color: #333333;font-weight: 650;text-align: center;">Lập kế hoạch về hưu cùng active ageing vietnam</h2>
                <img src="../public/image/retire-plan.jpeg" width="100%"/>
                <h4 class="title mt-4">
                    Bạn đang tìm kiếm một kế hoạch về hưu mà không biết bắt đầu như thế nào? Ngay đây chúng tôi sẽ giúp bạn. Thiết lập tầm nhìn kế hoạch về hưu của cá nhân bạn chỉ bằng việc trả lời một số câu hỏi. Bắt đầu thôi!
                  </h4>
                <div class="row feature-item mt-5 wow fadeInUp">
                    <h4 class="title" style = "color: #333333;font-weight: 650;">Bước 1: Truy cập website Active Ageing Vietnam (http://activeageingvietnam.com/ ) và chọn tab “Lập kế hoạch về hưu”.</h4>
                    <img src="../public/image/step1.jpg" class="img-fluid rounded" alt="">
                </div>
                <div class="row feature-item mt-5 wow fadeInUp">
                    <h4 class="title" style = "color: #333333;font-weight: 650;">Bước 2: Điền các thông tin vào bảng hỏi, lưu ý đơn vị của các câu hỏi. Bạn có thể rê chuột vào nút "i" để đọc phần giải thích câu hỏi.</h4>
                    <img src="../public/image/step2.jpg" class="img-fluid rounded" alt="">
                </div>
                <div class="row feature-item mt-5 wow fadeInUp">
                    <h4 class="title" style = "color: #333333;font-weight: 650;">Bước 3: Xem kết quả phân tích.</h4>
                    <img src="../public/image/step3.jpg" class="img-fluid rounded" alt="">
                </div>
                <div class="row feature-item mt-5 wow fadeInUp">
                    <h4 class="title" style = "color: #333333;font-weight: 650;">Bước 4: Xem đề xuất nếu kế hoạch chưa hợp lí. Đăng ký trở thành hội viên của Active Ageing Vietnam để nhận thêm thông tin hơn về các tính năng khác.</h4>
                    <img src="../public/image/step4.jpg" class="img-fluid rounded" alt="">
                </div>

                <div class="row feature-item mt-5 pt-5" style = "padding-top: 1rem! important; ">
                  <div class="col-lg-6 wow fadeInUp order-1 order-lg-2">
                    <img src="../public/image/example.jpg" class="img-fluid rounded" alt="">
                  </div>
        
                  <div class="col-lg-6 wow fadeInUp pt-4 pt-lg-0 order-2 order-lg-1" style = "text-align: justify;">
                    <!-- <h4>Neque saepe temporibus repellat ea ipsum et. Id vel et quia tempora facere reprehenderit.</h4> -->
                    <h4 class="title" style = "color: #333333;font-weight: 650;">Trước hết, để giúp bạn dễ thao tác, chúng tôi đã đặt ra bài toán:</h4>
                    <p style ="color : #232323">
                        “Ông Nguyễn Văn X hiện đang 45 tuổi, thu nhập trung bình 15 triệu VNĐ/ tháng (180 triệu VNĐ/năm). Ông dự kiến thu nhập của mình sẽ tăng 2% hàng năm cho đến khi ông nghỉ hưu ở tuổi 60. Để chuẩn bị cho tương lai, ông đã tích góp được 700 triệu VNĐ riêng cho “Quỹ Tiết kiệm Về hưu” của mình (Quỹ tiết kiệm về hưu là một Quỹ tiết kiệm riêng, tách biệt khỏi các khoản tiết kiệm khác như: Tiết kiệm mua xe, Tiết kiệm cho con,...). 
                   </p>
                   <p>
                    Hàng năm, ông dự kiến trích 8% trên tổng thu nhập để đóng góp thêm vào Quỹ Tiết kiệm Về hưu. Khoản đóng góp cuối cùng xảy ra vào năm ông 59 tuổi. Kể từ sau năm này, ông không có thêm thu nhập nào do ông không có lương hưu. Khoản tiền từ Quỹ Tiết kiệm Về hưu sẽ được sử dụng để đầu tư bằng nhiều hình thức khác nhau (gửi tiết kiệm, đầu tư vàng, ngoại tệ, các tài sản tài chính khác,...) và ông dự kiến sẽ thu được lợi tức (lãi suất) hàng năm là 6.5% (trước khi về hưu) và 4.5% (sau khi về hưu). Ông hy vọng mình sẽ thọ đến 90 tuổi và vẫn chủ động về tài chính.”
                   </p>
                  </div>
                  
                </div>

                <div class="row feature-item mt-5">
                    <!-- <img src="../public/image/make_plan.jpeg" class="img-fluid rounded" alt=""> -->
                    <!-- <h4 class="title" style="color: #333333;font-weight: 650;">Lập kế hoạch tài chính để nghỉ hưu an nhàn</h4> -->
                    <p style="color : #232323">
                        Từ những dữ liệu trên, Active Ageing Vietnam đã giúp ông X tính toán kế hoạch về hưu của ông và đề xuất được kết quả như 4 hình minh hoạ.
                    </p>
                    <p>
                        Active Ageing Vienam xin trân trọng cảm ơn các bạn đã quan tâm, ủng hộ và trải nghiệm sản phẩm đầu tiên của chúng tôi!
                    </p>
              </div>
              
            <!-- </section>#feature -->
          <!--==========================
            Services Section
          ============================-->
          <!-- <section id="services" class="section-bg"> -->
              
            </section><!-- #services -->
        
        </main>
      
            <div class="col-md-2">
            </div>    
            <div class="col-md-8 mt-5" id="firstOutcome">
            </div>
          </div>
          <div class ="row">
            <div class="col-md-2">
            </div>    
            <div class="col-md-8 mt-5" id="result">
            </div>
          </div>
          <div class ="row mt-5"> 
            <div class="col-md-12">
            <canvas id="line-chart"></canvas>
            </div>
          </div>

          <div class ="row">
          <div class="col-md-2">
          </div>    
          <div class="mt-5" id="callToAction">
          </div>
          </div>

          <div class ="row">
            <div class="col-md-2">
            </div>    
            <div class="col-md-8 mt-5" id="advice">
            </div>
          </div>

        
  

          <div class="mt-5"  id="table">
          </div>
        </div>

      
        
        
        </div>
      </div>
    </section>
    <footer id="footer" class="section-bg">
    <div class="footer-top">
      <div class="container">
  
        <div class="row">
  
          <div class="col-lg-6">
  
            <div class="row">
  
                <div class="col-sm-6">
  
                  <div class="footer-info">
                    <h4>Active Ageing Vietnam</h4>
                    <p>Dự án Active Ageing được ra đời với nỗi trăn trở về một vấn đề mà Việt Nam và các nước trong khu vực đang và sẽ phải đối mặt trong tương lai gần, đó chính là già hoá dân số và những hệ luỵ có liên quan. Chúng tôi tin rằng việc đồng hành cùng mỗi cá nhân nâng cao sự chủ động trong quản lý tài chính và bảo vệ sức khoẻ sẽ tạo ra những ảnh hưởng tích cực cho cộng đồng, góp phần kiến tạo một tương lai bền vững hơn.</p>
                  </div>
                </div>
  
                <div class="col-sm-6">
                  <div class="footer-links">
                    <h4>Liên hệ</h4>
                    <p>
                      (Ms.) Lâm Tố Như<br>
                      External Relations Executive<br>
                      <strong>Phone:</strong> +84 914864707<br>
                      <strong>Email:</strong> activeageingvietnam@gmail.com<br>
                    </p>
                  </div>
  
              
  
                </div>
  
            </div>
  
          </div>
  
          <div class="col-lg-6">
  
            <div class="form">
              
              <h4>Đặt câu hỏi cho chúng tôi</h4>
              <p>Chúng tôi sẵn sàng lắng nghe mọi câu hỏi, băn khoăn từ bạn!</p>
              <form action="" method="post" role="form" class="contactForm">
                <div class="form-group">
                  <input type="text" name="name" class="form-control" id="name" placeholder="Tên của bạn" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                  <div class="validation"></div>
                </div>
                <div class="form-group">
                  <input type="email" class="form-control" name="email" id="email" placeholder="Email" data-rule="email" data-msg="Please enter a valid email" />
                  <div class="validation"></div>
                </div>
                <div class="form-group">
                  <input type="text" class="form-control" name="subject" id="subject" placeholder="Chủ đề" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                  <div class="validation"></div>
                </div>
                <div class="form-group">
                  <textarea class="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Nội dung"></textarea>
                  <div class="validation"></div>
                </div>
  
                <div id="sendmessage">Your message has been sent. Thank you!</div>
                <div id="errormessage"></div>
  
                <div class="text-center"><button type="submit" title="Send Message">Gửi câu hỏi</button></div>
              </form>
            </div>
  
          </div>
  
          
  
        </div>
  
      </div>
    </div>
  
    
  </footer><!-- #footer -->

<a href="#" class="back-to-top"><i class="fa fa-chevron-up"></i></a>
<!-- Uncomment below i you want to use a preloader -->
<!-- <div id="preloader"></div> -->
  </div> 
`
components.aboutScreen = `
<section id="intro" class="clearfix">

    <div class="container d-flex h-100">
    <div class="row justify-content-center align-self-center">
      <div class="col-md-6 intro-info order-md-first order-last">
        <h2>Active Ageing <span>Vietnam</span></h2>
        
      </div>
    
      <div class="col-md-6 intro-img order-md-last order-first" style = "text-align: center">
        <img src="public/image/12309cropped.png" alt="" class="img-fluid">
      </div>
    
    </div>
    </div>
  </section><!-- #intro -->
<main id="main">
  <!--==========================
    Features Section
  ============================-->
  <section id="about">
      <div class="container" style="padding-top: 30px;">

        <div class="row feature-item">
          <div class="col-lg-6 wow fadeInUp">
            <img src="./public/image/about us 1.jpeg" class="img-fluid" alt="">
          </div>
          <div class="col-lg-6 wow fadeInUp pt-5 pt-lg-0" style = "text-align: justify;">
            <h2 style = "color: #333333;font-weight: 650;"">Active Ageing Vietnam</h2>
            <p style ="color : #232323">
              Active Ageing là dự án được ra đời với nỗi trăn trở về một vấn đề mà Việt Nam và một số nước trong khu vực đang và sẽ phải đối mặt trong tương lai gần, đó chính là già hoá dân số và những hệ luỵ có liên quan.
            </p>
            <p style ="color : #232323">
            Khi Việt Nam đang trên đà phát triển từ nhóm nước có thu nhập thấp sang nhóm có mức thu nhập trung bình, những vấn đề về an sinh xã hội lại được quan tâm và chú ý hơn bao giờ hết. Trước bối cảnh đó, sự chuẩn bị cho giai đoạn già hoá dân số là vô cùng cấp thiết, đặc biệt là ở góc độ cá nhân.
            </p>
          </div>
        </div>
        <div class="row feature-item mt-5 pt-5" style = " margin-top: 0! important; padding-top: 1rem! important; ">
          <div class="col-lg-6 wow fadeInUp order-1 order-lg-2">
            <img src="./public/image/about us 3.png" class="img-fluid" alt="">
          </div>

          <div class="col-lg-6 wow fadeInUp pt-4 pt-lg-0 order-2 order-lg-1" style = "text-align: justify;">
            <!-- <h4>Neque saepe temporibus repellat ea ipsum et. Id vel et quia tempora facere reprehenderit.</h4> -->
            <p style ="color : #232323">
            Góp phần cộng hưởng những nỗ lực để đối phó với các thách thức mà cả xã hội đang gặp phải, dự án tiến hành thực hiện “Gói giải pháp hỗ trợ quản lý tài chính và tiếp cận kiến thức chăm sóc sức khỏe chuẩn bị cho tuổi già”. Chúng tôi tin rằng việc nâng cao sự chủ động trong tài chính và sức khoẻ không chỉ ích cho riêng một cá nhân mà còn tạo ra những ảnh hưởng tích cực cho cộng đồng, góp phần vào việc phát triển kinh tế-xã hội, hướng đến một tương lai bền vững hơn.
           </p>
          </div>
          
        </div>
      </div>
      
    <!-- </section>#feature -->
  <!--==========================
    Services Section
  ============================-->
  <!-- <section id="services" class="section-bg"> -->
      <div style = "padding-top: 30px" class="container min-height-180">

        <header class="section-header" style="text-align: center;">
          <h2 style="font-size: 48px;font-weight: 700;">Dự án chúng tôi hướng đến</h2>
          <p></p>
        </header>

        <header class="section-header" style="text-align: center;">
          <h3 style="color : #12B281">Đối với cá nhân</h3>
          <p></p>
        </header>

        <div class="row">

          <div class="col-md-6 col-lg-4 wow bounceInUp" data-wow-duration="1.4s">
            <div class="box">
              <div class="icon" style="background: #ECF9F4;"><i class="material-icons" style="color: #12B281;">trending_up</i></div>
              <h4 class="title"><a href="">Nâng cao nhận thức về dân số già và tầm quan trọng của sự chuẩn bị chủ động.</a></h4>
              <p class="description"></p>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 wow bounceInUp" data-wow-duration="1.4s">
            <div class="box">
            <div class="icon" style="background: #ECF9F4;"><i class="material-icons" style="color: #12B281;">construction</i></div>
              <h4 class="title"><a href="">Cung cấp các công cụ được cá nhân hóa để quản lý tài chính, sức khỏe.</a></h4>
              <p class="description"></p>
            </div>
          </div>

          <div class="col-md-6 col-lg-4 wow bounceInUp" data-wow-delay="0.1s" data-wow-duration="1.4s">
            <div class="box">
            <div class="icon" style="background: #ECF9F4;"><i class="material-icons" style="color: #12B281;">people</i></div>
              <h4 class="title"><a href="">Tạo cộng đồng chia sẻ thông tin và kinh nghiệm.</a></h4>
              <p class="description"></p>
            </div>
          </div>
          <!-- <div class="col-md-6 col-lg-4 wow bounceInUp" data-wow-delay="0.1s" data-wow-duration="1.4s">
            <div class="box">
              <div class="icon" style="background: #eafde7;"><i class="ion-ios-speedometer-outline" style="color:#41cf2e;"></i></div>
              <h4 class="title"><a href="">Magni Dolores</a></h4>
              <p class="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            </div>
          </div>

          <div class="col-md-6 col-lg-4 wow bounceInUp" data-wow-delay="0.2s" data-wow-duration="1.4s">
            <div class="box">
              <div class="icon" style="background: #e1eeff;"><i class="ion-ios-world-outline" style="color: #2282ff;"></i></div>
              <h4 class="title"><a href="">Nemo Enim</a></h4>
              <p class="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 wow bounceInUp" data-wow-delay="0.2s" data-wow-duration="1.4s">
            <div class="box">
              <div class="icon" style="background: #ecebff;"><i class="ion-ios-clock-outline" style="color: #8660fe;"></i></div>
              <h4 class="title"><a href="">Eiusmod Tempor</a></h4>
              <p class="description">Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi</p>
            </div>
          </div> -->

        </div>

        <header class="section-header" style="text-align: center;">
          <h3 style="color : #12B281">Đối với doanh nghiệp</h3>
          <p></p>
        </header>

        <div class="row">

          <div class="col-md-6 col-lg-4 wow bounceInUp" data-wow-duration="1.4s">
            <div class="box">
              <div class="icon" style="background: #ECF9F4;"><i class="material-icons" style="color: #12B281;">check_circle</i></div>
              <h4 class="title"><a href="">Nâng cao hình ảnh và danh tiếng của công ty về trách nhiệm xã hội.</a></h4>
              <p class="description"></p>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 wow bounceInUp" data-wow-duration="1.4s">
            <div class="box">
            <div class="icon" style="background: #ECF9F4;"><i class="material-icons" style="color: #12B281;">trending_up</i></div>
              <h4 class="title"><a href="">Nâng cao nhận thức cho người lao động về việc làm việc để tích lũy tài chính.</a></h4>
              <p class="description"></p>
            </div>
          </div>

          <div class="col-md-6 col-lg-4 wow bounceInUp" data-wow-delay="0.1s" data-wow-duration="1.4s">
            <div class="box">
            <div class="icon" style="background: #ECF9F4;"><i class="material-icons" style="color: #12B281;">featured_video</i></div>
              <h4 class="title"><a href="">Quảng cáo sản phẩm / dịch vụ của họ trên nền tảng của chúng tôi.</a></h4>
              <p class="description"></p>
            </div>
          </div>
          <!-- <div class="col-md-6 col-lg-4 wow bounceInUp" data-wow-delay="0.1s" data-wow-duration="1.4s">
            <div class="box">
              <div class="icon" style="background: #eafde7;"><i class="ion-ios-speedometer-outline" style="color:#41cf2e;"></i></div>
              <h4 class="title"><a href="">Magni Dolores</a></h4>
              <p class="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            </div>
          </div>

          <div class="col-md-6 col-lg-4 wow bounceInUp" data-wow-delay="0.2s" data-wow-duration="1.4s">
            <div class="box">
              <div class="icon" style="background: #e1eeff;"><i class="ion-ios-world-outline" style="color: #2282ff;"></i></div>
              <h4 class="title"><a href="">Nemo Enim</a></h4>
              <p class="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 wow bounceInUp" data-wow-delay="0.2s" data-wow-duration="1.4s">
            <div class="box">
              <div class="icon" style="background: #ecebff;"><i class="ion-ios-clock-outline" style="color: #8660fe;"></i></div>
              <h4 class="title"><a href="">Eiusmod Tempor</a></h4>
              <p class="description">Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi</p>
            </div>
          </div> -->

        </div>

        <header class="section-header" style="text-align: center;">
          <h3 style="color : #12B281">Đối với toàn xã hội</h3>
          <p></p>
        </header>

        <div class="row">

          <div class="col-md-6 col-lg-4 wow bounceInUp" data-wow-duration="1.4s">
            <div class="box">
              <div class="icon" style="background: #ECF9F4;"><i class="material-icons" style="color: #12B281;">moving</i></div>
              <h4 class="title"><a href="">Đảm bảo an sinh xã hội và thúc đẩy kinh tế phát triển.</a></h4>
              <p class="description"></p>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 wow bounceInUp" data-wow-duration="1.4s">
            <div class="box">
            <div class="icon" style="background: #ECF9F4;"><i class="material-icons" style="color: #12B281;">reduce_capacity</i></div>
              <h4 class="title"><a href="">Giảm bớt áp lực chăm sóc người cao tuổi khi Việt Nam bước vào giai đoạn già hóa.</a></h4>
              <p class="description"></p>
            </div>
          </div>

          <div class="col-md-6 col-lg-4 wow bounceInUp" data-wow-delay="0.1s" data-wow-duration="1.4s">
            <div class="box">
            <div class="icon" style="background: #ECF9F4;"><i class="material-icons" style="color: #12B281;">elderly</i></div>
              <h4 class="title"><a href="">Hạn chế tình trạng “già rồi mới giàu”.</a></h4>
              <p class="description"></p>
            </div>
          </div>
          <!-- <div class="col-md-6 col-lg-4 wow bounceInUp" data-wow-delay="0.1s" data-wow-duration="1.4s">
            <div class="box">
              <div class="icon" style="background: #eafde7;"><i class="ion-ios-speedometer-outline" style="color:#41cf2e;"></i></div>
              <h4 class="title"><a href="">Magni Dolores</a></h4>
              <p class="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            </div>
          </div>

          <div class="col-md-6 col-lg-4 wow bounceInUp" data-wow-delay="0.2s" data-wow-duration="1.4s">
            <div class="box">
              <div class="icon" style="background: #e1eeff;"><i class="ion-ios-world-outline" style="color: #2282ff;"></i></div>
              <h4 class="title"><a href="">Nemo Enim</a></h4>
              <p class="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 wow bounceInUp" data-wow-delay="0.2s" data-wow-duration="1.4s">
            <div class="box">
              <div class="icon" style="background: #ecebff;"><i class="ion-ios-clock-outline" style="color: #8660fe;"></i></div>
              <h4 class="title"><a href="">Eiusmod Tempor</a></h4>
              <p class="description">Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi</p>
            </div>
          </div> -->

        </div>

      </div>
      
        
    </section><!-- #services -->

</main>

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
                    <h4>Active Ageing Vietnam</h4>
                    <p>Dự án Active Ageing được ra đời với nỗi trăn trở về một vấn đề mà Việt Nam và các nước trong khu vực đang và sẽ phải đối mặt trong tương lai gần, đó chính là già hoá dân số và những hệ luỵ có liên quan. Chúng tôi tin rằng việc đồng hành cùng mỗi cá nhân nâng cao sự chủ động trong quản lý tài chính và bảo vệ sức khoẻ sẽ tạo ra những ảnh hưởng tích cực cho cộng đồng, góp phần kiến tạo một tương lai bền vững hơn.</p>
                  </div>
                </div>
  
                <div class="col-sm-6">
                  <div class="footer-links">
                    <h4>Liên hệ</h4>
                    <p>
                      (Ms.) Lâm Tố Như<br>
                      External Relations Executive<br>
                      <strong>Phone:</strong> +84 914864707<br>
                      <strong>Email:</strong> activeageingvietnam@gmail.com<br>
                    </p>
                  </div>
  
              
  
                </div>
  
            </div>
  
          </div>
  
          <div class="col-lg-6">
  
            <div class="form">
              
              <h4>Đặt câu hỏi cho chúng tôi</h4>
              <p>Chúng tôi sẵn sàng lắng nghe mọi câu hỏi, băn khoăn từ bạn!</p>
              <form action="" method="post" role="form" class="contactForm">
                <div class="form-group">
                  <input type="text" name="name" class="form-control" id="name" placeholder="Tên của bạn" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                  <div class="validation"></div>
                </div>
                <div class="form-group">
                  <input type="email" class="form-control" name="email" id="email" placeholder="Email" data-rule="email" data-msg="Please enter a valid email" />
                  <div class="validation"></div>
                </div>
                <div class="form-group">
                  <input type="text" class="form-control" name="subject" id="subject" placeholder="Chủ đề" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                  <div class="validation"></div>
                </div>
                <div class="form-group">
                  <textarea class="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Nội dung"></textarea>
                  <div class="validation"></div>
                </div>
  
                <div id="sendmessage">Your message has been sent. Thank you!</div>
                <div id="errormessage"></div>
  
                <div class="text-center"><button type="submit" title="Send Message">Gửi câu hỏi</button></div>
              </form>
            </div>
  
          </div>
  
          
  
        </div>
  
      </div>
    </div>
  
    
  </footer><!-- #footer -->

<a href="#" class="back-to-top"><i class="fa fa-chevron-up"></i></a>
<!-- Uncomment below i you want to use a preloader -->
<!-- <div id="preloader"></div> -->`

components.loginScreen =`
<body>
	
	<div class="limiter">
		<div class="container-login100">
			<div class="wrap-login100 p-l-50 p-r-50 p-t-77 p-b-30">
				<form class="login100-form validate-form">
					<span class="login100-form-title p-b-55">
						ĐĂNG NHẬP
					</span>

					<div class="wrap-input100 validate-input m-b-16" data-validate = "Valid email is required: ex@abc.xyz">
						<input class="input100" type="text" name="email" placeholder="Email">
						<span class="focus-input100"></span>
						<span class="symbol-input100">
							<span class="lnr lnr-envelope"></span>
						</span>
					</div>

					<div class="wrap-input100 validate-input m-b-16" data-validate = "Password is required">
						<input class="input100" type="password" name="pass" placeholder="Password">
						<span class="focus-input100"></span>
						<span class="symbol-input100">
							<span class="lnr lnr-lock"></span>
						</span>
					</div>

					<div class="contact100-form-checkbox m-l-4">
						<input class="input-checkbox100" id="ckb1" type="checkbox" name="remember-me">
						<label class="label-checkbox100" for="ckb1">
							Remember me
						</label>
					</div>
					
					<div class="container-login100-form-btn p-t-25">
						<button class="login100-form-btn">
							ĐĂNG NHẬP
						</button>
					</div>

					<div class="text-center w-full p-t-42 p-b-22">
            <a class="txt1 bo1 hov1" href="index.html" id="home">
              Quay lại trang chủ							
            </a>
					</div>


					<div class="text-center w-full p-t-115">
						<span class="txt1">
							Chưa có tài khoản?
						</span>

						<a class="txt1 bo1 hov1" href="#" id="callToAction">
							Đăng ký ngay.						
						</a>
					</div>
				</form>
			</div>
		</div>
	</div>
	
	

	
<!--===============================================================================================-->	
	<script src="vendor/jquery/jquery-3.2.1.min.js"></script>
<!--===============================================================================================-->
	<script src="vendor/bootstrap/js/popper.js"></script>
	<script src="vendor/bootstrap/js/bootstrap.min.js"></script>
<!--===============================================================================================-->
	<script src="vendor/select2/select2.min.js"></script>
<!--===============================================================================================-->
	<script src="js/main.js"></script>

</body>
`
components.prepareRetire = `

  <main id="main">
<section id="about" class="section-bg">
      <div class="container justify-content-center align-self-center">

        <header class="section-header" style="margin-top: 13%;">
          <h3>Chuẩn bị về hưu</h3>
          
        </header>

        <div id='listPost' class="row">

          <div class="col-md-6 col-lg-4 wow bounceInUp" data-wow-duration="1.4s" style="visibility: visible; animation-duration: 1.4s; animation-name: bounceInUp;">
            <div class="box">
              <div class="icon" style="background: #fceef3;"><i class="ion-ios-analytics-outline" style="color: #ff689b;"></i></div>
              <h4 class="title"><a href="">Lorem Ipsum</a></h4>
              <p class="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 wow bounceInUp" data-wow-duration="1.4s" style="visibility: visible; animation-duration: 1.4s; animation-name: bounceInUp;">
            <div class="box">
              <div class="icon" style="background: #fff0da;"><i class="ion-ios-bookmarks-outline" style="color: #e98e06;"></i></div>
              <h4 class="title"><a href="">Dolor Sitema</a></h4>
              <p class="description">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
            </div>
          </div>

          <div class="col-md-6 col-lg-4 wow bounceInUp" data-wow-delay="0.1s" data-wow-duration="1.4s" style="visibility: visible; animation-duration: 1.4s; animation-delay: 0.1s; animation-name: bounceInUp;">
            <div class="box" style="padding: 0;">
              <div class="image" style="background: #e6fdfc;"><img width= 100% src = "./public/image/posts/post1.jpeg" /></div>
              
              <div style = "padding: 5px 30px"><h4 class="title"><a href="">Top 3 bí quyết để có một tuổi “xế chiều” thịnh vượng khỏe mạnh an vui</a></h4></div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 wow bounceInUp" data-wow-delay="0.1s" data-wow-duration="1.4s" style="visibility: visible; animation-duration: 1.4s; animation-delay: 0.1s; animation-name: bounceInUp;">
            <div class="box">
              <div class="icon" style="background: #eafde7;"><i class="ion-ios-speedometer-outline" style="color:#41cf2e;"></i></div>
              <h4 class="title"><a href="">Magni Dolores</a></h4>
              <p class="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            </div>
          </div>

          <div class="col-md-6 col-lg-4 wow bounceInUp" data-wow-delay="0.2s" data-wow-duration="1.4s" style="visibility: visible; animation-duration: 1.4s; animation-delay: 0.2s; animation-name: bounceInUp;">
            <div class="box">
              <div class="icon" style="background: #e1eeff;"><i class="ion-ios-world-outline" style="color: #2282ff;"></i></div>
              <h4 class="title"><a href="">Nemo Enim</a></h4>
              <p class="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 wow bounceInUp" data-wow-delay="0.2s" data-wow-duration="1.4s" style="visibility: visible; animation-duration: 1.4s; animation-delay: 0.2s; animation-name: bounceInUp;">
            <div class="box">
              <div class="icon" style="background: #ecebff;"><i class="ion-ios-clock-outline" style="color: #8660fe;"></i></div>
              <h4 class="title"><a href="">Eiusmod Tempor</a></h4>
              <p class="description">Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi</p>
            </div>
          </div>

        </div>

      </div>
    </section>
    </main>
`


components.prosperousRetire = `

  <main id="main">
<section id="about" class="section-bg">
      <div class="container justify-content-center align-self-center">

        <header class="section-header" style="margin-top: 13%;">
          <h3>Về hưu thịnh vượng</h3>
          
        </header>

        <div id='listPost' class="row">

          <div class="col-md-6 col-lg-4 wow bounceInUp" data-wow-duration="1.4s" style="visibility: visible; animation-duration: 1.4s; animation-name: bounceInUp;">
            <div class="box">
              <div class="icon" style="background: #fceef3;"><i class="ion-ios-analytics-outline" style="color: #ff689b;"></i></div>
              <h4 class="title"><a href="">Lorem Ipsum</a></h4>
              <p class="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 wow bounceInUp" data-wow-duration="1.4s" style="visibility: visible; animation-duration: 1.4s; animation-name: bounceInUp;">
            <div class="box">
              <div class="icon" style="background: #fff0da;"><i class="ion-ios-bookmarks-outline" style="color: #e98e06;"></i></div>
              <h4 class="title"><a href="">Dolor Sitema</a></h4>
              <p class="description">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
            </div>
          </div>

          <div class="col-md-6 col-lg-4 wow bounceInUp" data-wow-delay="0.1s" data-wow-duration="1.4s" style="visibility: visible; animation-duration: 1.4s; animation-delay: 0.1s; animation-name: bounceInUp;">
            <div class="box" style="padding: 0;">
              <div class="image" style="background: #e6fdfc;"><img width= 100% src = "./public/image/posts/post1.jpeg" /></div>
              
              <div style = "padding: 5px 30px"><h4 class="title"><a href="">Top 3 bí quyết để có một tuổi “xế chiều” thịnh vượng khỏe mạnh an vui</a></h4></div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 wow bounceInUp" data-wow-delay="0.1s" data-wow-duration="1.4s" style="visibility: visible; animation-duration: 1.4s; animation-delay: 0.1s; animation-name: bounceInUp;">
            <div class="box">
              <div class="icon" style="background: #eafde7;"><i class="ion-ios-speedometer-outline" style="color:#41cf2e;"></i></div>
              <h4 class="title"><a href="">Magni Dolores</a></h4>
              <p class="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            </div>
          </div>

          <div class="col-md-6 col-lg-4 wow bounceInUp" data-wow-delay="0.2s" data-wow-duration="1.4s" style="visibility: visible; animation-duration: 1.4s; animation-delay: 0.2s; animation-name: bounceInUp;">
            <div class="box">
              <div class="icon" style="background: #e1eeff;"><i class="ion-ios-world-outline" style="color: #2282ff;"></i></div>
              <h4 class="title"><a href="">Nemo Enim</a></h4>
              <p class="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 wow bounceInUp" data-wow-delay="0.2s" data-wow-duration="1.4s" style="visibility: visible; animation-duration: 1.4s; animation-delay: 0.2s; animation-name: bounceInUp;">
            <div class="box">
              <div class="icon" style="background: #ecebff;"><i class="ion-ios-clock-outline" style="color: #8660fe;"></i></div>
              <h4 class="title"><a href="">Eiusmod Tempor</a></h4>
              <p class="description">Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi</p>
            </div>
          </div>

        </div>

      </div>
    </section>
    </main>
`
components.healthyRetire = `
<main id="main">
<section id="about" class="section-bg">
      <div class="container justify-content-center align-self-center">

        <header class="section-header" style="margin-top: 13%;">
          <h3>Về hưu khoẻ mạnh</h3>
          
        </header>

        <div id='listPost' class="row">

          <div class="col-md-6 col-lg-4 wow bounceInUp" data-wow-duration="1.4s" style="visibility: visible; animation-duration: 1.4s; animation-name: bounceInUp;">
            <div class="box">
              <div class="icon" style="background: #fceef3;"><i class="ion-ios-analytics-outline" style="color: #ff689b;"></i></div>
              <h4 class="title"><a href="">Lorem Ipsum</a></h4>
              <p class="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 wow bounceInUp" data-wow-duration="1.4s" style="visibility: visible; animation-duration: 1.4s; animation-name: bounceInUp;">
            <div class="box">
              <div class="icon" style="background: #fff0da;"><i class="ion-ios-bookmarks-outline" style="color: #e98e06;"></i></div>
              <h4 class="title"><a href="">Dolor Sitema</a></h4>
              <p class="description">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
            </div>
          </div>

          <div class="col-md-6 col-lg-4 wow bounceInUp" data-wow-delay="0.1s" data-wow-duration="1.4s" style="visibility: visible; animation-duration: 1.4s; animation-delay: 0.1s; animation-name: bounceInUp;">
            <div class="box" style="padding: 0;">
              <div class="image" style="background: #e6fdfc;"><img width= 100% src = "./public/image/posts/post1.jpeg" /></div>
              
              <div style = "padding: 5px 30px"><h4 class="title"><a href="">Top 3 bí quyết để có một tuổi “xế chiều” thịnh vượng khỏe mạnh an vui</a></h4></div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 wow bounceInUp" data-wow-delay="0.1s" data-wow-duration="1.4s" style="visibility: visible; animation-duration: 1.4s; animation-delay: 0.1s; animation-name: bounceInUp;">
            <div class="box">
              <div class="icon" style="background: #eafde7;"><i class="ion-ios-speedometer-outline" style="color:#41cf2e;"></i></div>
              <h4 class="title"><a href="">Magni Dolores</a></h4>
              <p class="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            </div>
          </div>

          <div class="col-md-6 col-lg-4 wow bounceInUp" data-wow-delay="0.2s" data-wow-duration="1.4s" style="visibility: visible; animation-duration: 1.4s; animation-delay: 0.2s; animation-name: bounceInUp;">
            <div class="box">
              <div class="icon" style="background: #e1eeff;"><i class="ion-ios-world-outline" style="color: #2282ff;"></i></div>
              <h4 class="title"><a href="">Nemo Enim</a></h4>
              <p class="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 wow bounceInUp" data-wow-delay="0.2s" data-wow-duration="1.4s" style="visibility: visible; animation-duration: 1.4s; animation-delay: 0.2s; animation-name: bounceInUp;">
            <div class="box">
              <div class="icon" style="background: #ecebff;"><i class="ion-ios-clock-outline" style="color: #8660fe;"></i></div>
              <h4 class="title"><a href="">Eiusmod Tempor</a></h4>
              <p class="description">Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi</p>
            </div>
          </div>

        </div>

      </div>
    </section>
    </main>
`

components.happyRetire = `
<main id="main">
<section id="about" class="section-bg">
      <div class="container justify-content-center align-self-center">

        <header class="section-header" style="margin-top: 13%;">
          <h3>Về hưu an vui</h3>
          
        </header>

        <div id='listPost' class="row">

          <div class="col-md-6 col-lg-4 wow bounceInUp" data-wow-duration="1.4s" style="visibility: visible; animation-duration: 1.4s; animation-name: bounceInUp;">
            <div class="box">
              <div class="icon" style="background: #fceef3;"><i class="ion-ios-analytics-outline" style="color: #ff689b;"></i></div>
              <h4 class="title"><a href="">Lorem Ipsum</a></h4>
              <p class="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 wow bounceInUp" data-wow-duration="1.4s" style="visibility: visible; animation-duration: 1.4s; animation-name: bounceInUp;">
            <div class="box">
              <div class="icon" style="background: #fff0da;"><i class="ion-ios-bookmarks-outline" style="color: #e98e06;"></i></div>
              <h4 class="title"><a href="">Dolor Sitema</a></h4>
              <p class="description">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
            </div>
          </div>

          <div class="col-md-6 col-lg-4 wow bounceInUp" data-wow-delay="0.1s" data-wow-duration="1.4s" style="visibility: visible; animation-duration: 1.4s; animation-delay: 0.1s; animation-name: bounceInUp;">
            <div class="box" style="padding: 0;">
              <div class="image" style="background: #e6fdfc;"><img width= 100% src = "./public/image/posts/post1.jpeg" /></div>
              
              <div style = "padding: 5px 30px"><h4 class="title"><a href="">Top 3 bí quyết để có một tuổi “xế chiều” thịnh vượng khỏe mạnh an vui</a></h4></div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 wow bounceInUp" data-wow-delay="0.1s" data-wow-duration="1.4s" style="visibility: visible; animation-duration: 1.4s; animation-delay: 0.1s; animation-name: bounceInUp;">
            <div class="box">
              <div class="icon" style="background: #eafde7;"><i class="ion-ios-speedometer-outline" style="color:#41cf2e;"></i></div>
              <h4 class="title"><a href="">Magni Dolores</a></h4>
              <p class="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            </div>
          </div>

          <div class="col-md-6 col-lg-4 wow bounceInUp" data-wow-delay="0.2s" data-wow-duration="1.4s" style="visibility: visible; animation-duration: 1.4s; animation-delay: 0.2s; animation-name: bounceInUp;">
            <div class="box">
              <div class="icon" style="background: #e1eeff;"><i class="ion-ios-world-outline" style="color: #2282ff;"></i></div>
              <h4 class="title"><a href="">Nemo Enim</a></h4>
              <p class="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 wow bounceInUp" data-wow-delay="0.2s" data-wow-duration="1.4s" style="visibility: visible; animation-duration: 1.4s; animation-delay: 0.2s; animation-name: bounceInUp;">
            <div class="box">
              <div class="icon" style="background: #ecebff;"><i class="ion-ios-clock-outline" style="color: #8660fe;"></i></div>
              <h4 class="title"><a href="">Eiusmod Tempor</a></h4>
              <p class="description">Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi</p>
            </div>
          </div>

        </div>

      </div>
    </section>
    </main>
`
components.news =`
<main id="main">
<section id="about" class="section-bg">
      <div class="container justify-content-center align-self-center">

        <header class="section-header" style="margin-top: 13%;">
          <h3>Tin tức</h3>
          
        </header>

        <div id='listPost' class="row">

          <div class="col-md-6 col-lg-4 wow bounceInUp" data-wow-duration="1.4s" style="visibility: visible; animation-duration: 1.4s; animation-name: bounceInUp;">
            <div class="box">
              <div class="icon" style="background: #fceef3;"><i class="ion-ios-analytics-outline" style="color: #ff689b;"></i></div>
              <h4 class="title"><a href="">Lorem Ipsum</a></h4>
              <p class="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 wow bounceInUp" data-wow-duration="1.4s" style="visibility: visible; animation-duration: 1.4s; animation-name: bounceInUp;">
            <div class="box">
              <div class="icon" style="background: #fff0da;"><i class="ion-ios-bookmarks-outline" style="color: #e98e06;"></i></div>
              <h4 class="title"><a href="">Dolor Sitema</a></h4>
              <p class="description">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
            </div>
          </div>

          <div class="col-md-6 col-lg-4 wow bounceInUp" data-wow-delay="0.1s" data-wow-duration="1.4s" style="visibility: visible; animation-duration: 1.4s; animation-delay: 0.1s; animation-name: bounceInUp;">
            <div class="box" style="padding: 0;">
              <div class="image" style="background: #e6fdfc;"><img width= 100% src = "./public/image/posts/post1.jpeg" /></div>
              
              <div style = "padding: 5px 30px"><h4 class="title"><a href="">Top 3 bí quyết để có một tuổi “xế chiều” thịnh vượng khỏe mạnh an vui</a></h4></div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 wow bounceInUp" data-wow-delay="0.1s" data-wow-duration="1.4s" style="visibility: visible; animation-duration: 1.4s; animation-delay: 0.1s; animation-name: bounceInUp;">
            <div class="box">
              <div class="icon" style="background: #eafde7;"><i class="ion-ios-speedometer-outline" style="color:#41cf2e;"></i></div>
              <h4 class="title"><a href="">Magni Dolores</a></h4>
              <p class="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            </div>
          </div>

          <div class="col-md-6 col-lg-4 wow bounceInUp" data-wow-delay="0.2s" data-wow-duration="1.4s" style="visibility: visible; animation-duration: 1.4s; animation-delay: 0.2s; animation-name: bounceInUp;">
            <div class="box">
              <div class="icon" style="background: #e1eeff;"><i class="ion-ios-world-outline" style="color: #2282ff;"></i></div>
              <h4 class="title"><a href="">Nemo Enim</a></h4>
              <p class="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 wow bounceInUp" data-wow-delay="0.2s" data-wow-duration="1.4s" style="visibility: visible; animation-duration: 1.4s; animation-delay: 0.2s; animation-name: bounceInUp;">
            <div class="box">
              <div class="icon" style="background: #ecebff;"><i class="ion-ios-clock-outline" style="color: #8660fe;"></i></div>
              <h4 class="title"><a href="">Eiusmod Tempor</a></h4>
              <p class="description">Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi</p>
            </div>
          </div>

        </div>

      </div>
    </section>
    </main>
`

components.solutionScreen = `
<section id="intro" class="clearfix">

    <div class="container d-flex h-100">
    <div class="row justify-content-center align-self-center">
      <div class="col-md-6 intro-info order-md-first order-last">
        <h2>Giải pháp của <span>Active Ageing Vietnam</span></h2>
        
      </div>
    
      <div class="col-md-6 intro-img order-md-last order-first" style = "text-align: center">
        <img src="public/image/solution.png" alt="" class="img-fluid">
      </div>
    
    </div>
    </div>
  </section><!-- #intro -->
<main id="main">
  <!--==========================
    Features Section
  ============================-->
  <section id="about">
      <div class="container" style="padding-top: 30px;">
        <div class="row feature-item">
        <div class="section-header">
        <h3 style="font-size: 32px;">Bạn có mong muốn mình sẽ có một kế hoạch cụ thể để chuẩn bị cho tuổi “xế chiều”?</h3>

        <h3 style="font-size: 32px;">Bạn có mong muốn khoảng thời gian nghỉ hưu của mình sẽ vui vẻ, an yên?</h3>
      </div>
        </div>
        <div class="row feature-item wow fadeInUp mt-5">
          <div class="col-lg-6 wow fadeInUp">
            <img src="./public/image/about us 1.jpeg" class="img-fluid" alt="">
          </div>
          <div class="col-lg-6 wow fadeInUp pt-5 pt-lg-0" style = "text-align: justify;">
            <p style ="color : #232323">
            Chúng tôi tin rằng tất cả các dự định này đều có thể khả thi cùng với Active Ageing Vietnam. Được ra đời với nỗi trăn trở về già hóa dân số, gói giải pháp của chúng tôi bao gồm ứng dụng di động, trang website và các chuỗi hội thảo nhằm cung cấp các thông tin từ các chuyên gia có kinh nghiệm.
            </p>
          </div>
        </div>

        <div class="row feature-item wow fadeInUp">
            <p style="text-align: center; ">
              Với 3 sản phẩm trên, chúng tôi mong muốn đồng hành cùng mọi người trên hành trình chuẩn bị cho tuổi già của họ với:
            </p>
        </div>
        <div class="row feature-item wow fadeInUp min-height-223" >

          <div class="col-md-6 col-lg-4 wow bounceInUp" data-wow-duration="1.4s">
            <div class="box">
              <div class="icon" style="background: #ECF9F4;">
                <i class="material-icons" style="color :#12B281; " >construction</i>
              </div>
              <h4 class="title"><a href="">Các công cụ</a></h4>
              <p class="description">Hỗ trợ tính toán, quản lý, lập báo cáo qua website và app</p>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 wow bounceInUp" data-wow-duration="1.4s">
            <div class="box">
            <div class="icon" style="background: #ECF9F4;">
            <i class="material-icons" style="color :#12B281; " >school</i>
            </div>
              <h4 class="title"><a href="">Kiến thức</a></h4>
              <p class="description">Từ các bài viết chuyên môn, chia sẻ từ diễn giả qua webinars, hội thảo</p>
            </div>
          </div>

          <div class="col-md-6 col-lg-4 wow bounceInUp" data-wow-delay="0.1s" data-wow-duration="1.4s">
            <div class="box">
            <div class="icon" style="background: #ECF9F4;">
            <i class="material-icons" style="color :#12B281; " >assistant</i>
            </div>
              <h4 class="title"><a href="">Sự kết nối và sự cố vấn</a></h4>
              <p class="description">Gắn kết các cộng đồng có cùng mối quan tâm với mạng lưới chuyên gia.</p>
            </div>
          </div>
          <!-- <div class="col-md-6 col-lg-4 wow bounceInUp" data-wow-delay="0.1s" data-wow-duration="1.4s">
            <div class="box">
              <div class="icon" style="background: #eafde7;"><i class="ion-ios-speedometer-outline" style="color:#41cf2e;"></i></div>
              <h4 class="title"><a href="">Magni Dolores</a></h4>
              <p class="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            </div>
          </div>

          <div class="col-md-6 col-lg-4 wow bounceInUp" data-wow-delay="0.2s" data-wow-duration="1.4s">
            <div class="box">
              <div class="icon" style="background: #e1eeff;"><i class="ion-ios-world-outline" style="color: #2282ff;"></i></div>
              <h4 class="title"><a href="">Nemo Enim</a></h4>
              <p class="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 wow bounceInUp" data-wow-delay="0.2s" data-wow-duration="1.4s">
            <div class="box">
              <div class="icon" style="background: #ecebff;"><i class="ion-ios-clock-outline" style="color: #8660fe;"></i></div>
              <h4 class="title"><a href="">Eiusmod Tempor</a></h4>
              <p class="description">Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi</p>
            </div>
          </div> -->

        </div>

        <div class="row feature-item">
          <div class="col-lg-8 wow fadeInUp" style="visibility: visible; animation-name: fadeInUp;">
        <div class= "embed-responsive embed-responsive-16by9">
        <iframe class= "embed-responsive-item" width="100%" src="https://www.youtube.com/embed/K22EmimdUsk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="col wow fadeInUp" style="text-align : center; visibility: visible; animation-name: fadeInUp;">
            <i>Giải pháp của Active Ageing Việt Nam</i>
        </div>    
           
          </div>
          <div class="col-lg-4 wow fadeInUp mt-5 pt-lg-0" style="text-align: justify; visibility: visible; animation-name: fadeInUp;">
            
            <p style="color : #232323">
            Active Ageing Vietnam xin gửi lời cảm ơn chân thành nhất đến ông Raymond Chu (Chu Quang Thái) - đại diện thường trực phía Nam Cục Phát triển thị trường và doanh nghiệp Khoa học và Công nghệ, Bộ Khoa học và Công nghệ đã tham gia đóng góp ý kiến về tiềm năng của dự án. Những nhận xét và lời động viên của ông là sự khích lệ vô cùng lớn đối với Active Ageing Vietnam trên hành trình hoàn thiện giải pháp.
            </p>
          </div>
        </div>
        <div class="row feature-item mt-5">
          <div class="col-lg-8 wow fadeInUp order-1 order-lg-2" style="visibility: visible; animation-name: fadeInUp;">
          <div class="wow fadeInUp embed-responsive embed-responsive-16by9" style="visibility: visible; animation-name: fadeInUp;">
          <iframe class= "embed-responsive-item" width="100%" src="https://www.youtube.com/embed/GX0kH973Tm4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        <div class="col wow fadeInUp" style="text-align : center; visibility: visible; animation-name: fadeInUp;">
            <i>Giới thiệu gói giải pháp của Active Ageing Vietnam</i>
        </div>    
           
          </div>
          <div class="col-lg-4 wow fadeInUp mt-5 pt-lg-0 order-2 order-lg-1" style="text-align: justify; visibility: visible; animation-name: fadeInUp;">
            
            <p style="color : #232323">
            Ngoài ra, dự án rất mong nhận được ý kiến, phản hồi của bạn để phát triển giải pháp tốt hơn. Chúng tôi xin trân trọng cảm ơn sự quan tâm, theo dõi và ủng hộ của bạn trong thời gian qua và sắp tới.
            </p>
          </div>
        </div>
        
      </div>
</main>

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
                    <h4>Active Ageing Vietnam</h4>
                    <p>Dự án Active Ageing được ra đời với nỗi trăn trở về một vấn đề mà Việt Nam và các nước trong khu vực đang và sẽ phải đối mặt trong tương lai gần, đó chính là già hoá dân số và những hệ luỵ có liên quan. Chúng tôi tin rằng việc đồng hành cùng mỗi cá nhân nâng cao sự chủ động trong quản lý tài chính và bảo vệ sức khoẻ sẽ tạo ra những ảnh hưởng tích cực cho cộng đồng, góp phần kiến tạo một tương lai bền vững hơn.</p>
                  </div>
                </div>
  
                <div class="col-sm-6">
                  <div class="footer-links">
                    <h4>Liên hệ</h4>
                    <p>
                      (Ms.) Lâm Tố Như<br>
                      External Relations Executive<br>
                      <strong>Phone:</strong> +84 914864707<br>
                      <strong>Email:</strong> activeageingvietnam@gmail.com<br>
                    </p>
                  </div>
  
              
  
                </div>
  
            </div>
  
          </div>
  
          <div class="col-lg-6">
  
            <div class="form">
              
              <h4>Đặt câu hỏi cho chúng tôi</h4>
              <p>Chúng tôi sẵn sàng lắng nghe mọi câu hỏi, băn khoăn từ bạn!</p>
              <form action="" method="post" role="form" class="contactForm">
                <div class="form-group">
                  <input type="text" name="name" class="form-control" id="name" placeholder="Tên của bạn" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                  <div class="validation"></div>
                </div>
                <div class="form-group">
                  <input type="email" class="form-control" name="email" id="email" placeholder="Email" data-rule="email" data-msg="Please enter a valid email" />
                  <div class="validation"></div>
                </div>
                <div class="form-group">
                  <input type="text" class="form-control" name="subject" id="subject" placeholder="Chủ đề" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                  <div class="validation"></div>
                </div>
                <div class="form-group">
                  <textarea class="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Nội dung"></textarea>
                  <div class="validation"></div>
                </div>
  
                <div id="sendmessage">Your message has been sent. Thank you!</div>
                <div id="errormessage"></div>
  
                <div class="text-center"><button type="submit" title="Send Message">Gửi câu hỏi</button></div>
              </form>
            </div>
  
          </div>
  
          
  
        </div>
  
      </div>
    </div>
  
    
  </footer><!-- #footer -->

<a href="#" class="back-to-top"><i class="fa fa-chevron-up"></i></a>
<!-- Uncomment below i you want to use a preloader -->
<!-- <div id="preloader"></div> -->
`