const components = {}
components.welcomeScreen = `
<!--==========================
Header
============================-->
<header id="header">

  <div id="topbar">
    <div class="row">
    <div class="container" style ="text-align : right;">
      <button id="translate" type="button" class="btn" style="float: right">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-translate" viewBox="0 0 16 16">
        <path d="M4.545 6.714 4.11 8H3l1.862-5h1.284L8 8H6.833l-.435-1.286H4.545zm1.634-.736L5.5 3.956h-.049l-.679 2.022H6.18z"/>
        <path d="M0 2a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v3h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-3H2a2 2 0 0 1-2-2V2zm2-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H2zm7.138 9.995c.193.301.402.583.63.846-.748.575-1.673 1.001-2.768 1.292.178.217.451.635.555.867 1.125-.359 2.08-.844 2.886-1.494.777.665 1.739 1.165 2.93 1.472.133-.254.414-.673.629-.89-1.125-.253-2.057-.694-2.82-1.284.681-.747 1.222-1.651 1.621-2.757H14V8h-3v1.047h.765c-.318.844-.74 1.546-1.272 2.13a6.066 6.066 0 0 1-.415-.492 1.988 1.988 0 0 1-.94.31z"/>
        </svg>
        <span id ="status">English</span>
      </button>
    </div>
    </div>
  </div>

  <div class="container">

    <div class="logo float-left">
      <!-- Uncomment below if you prefer to use an image logo -->
      <!-- <h1 class="text-light"><a href="#intro" class="scrollto"><span>Rapid</span></a></h1> -->
      <a href="#header" class="scrollto"><img style="height: 80px;width: 80px;" src="public/image/logo2.png" alt="" class="img-fluid"></a>
    </div>

    <nav class="main-nav float-right d-none d-lg-block">
      <ul>
          <li class="active"><a id='home' href="#intro">Trang Chủ</a></li>
          <li><a href="#about">Về chúng tôi</a></li>
          <li><a id='university' href="#">Vấn đề xã hội</a></li>
          <li><a id='find-uni' href="#">Lập kế hoạch về hưu</a></li>
          <li class="drop-down"><a id='scholarship' href="#">Thông tin</a>
                <ul>
                  <li><a href="#">Chuẩn bị về hưu</a></li>
                  <li><a href="#">Về hưu thịnh vượng</a></li>
                  <li><a href="#">Về hưu khoẻ mạnh</a></li>
                  <li><a href="#">Về hưu an vui</a></li>
                </ul>
              </li>
          <li><a href="#" id='life'>Đăng ký thành viên</a></li>
          <li id="user">
          </li>
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
        <h2>Active Ageing là dự án kinh doanh xã hội giúp mọi người chuẩn bị cho tuổi già một cách chủ động.</h2>
      </div>
    
      <div class="col-md-6 intro-img order-md-last order-first">
        <img src="public/image/prepare.png" alt="" class="img-fluid">
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
  
        
      </div>
      <div class="row">

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
                      <strong>Email:</strong> activeageing.ftu2@gmail.com<br>
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
      <!-- <h1 class="text-light"><a href="#intro" class="scrollto"><span>Rapid</span></a></h1> -->
      <a href="#header" class="scrollto"><img style="height: 80px;width: 80px;" src="public/image/logo2.png" alt="" class="img-fluid"></a>
    </div>

    <nav class="main-nav float-right d-none d-lg-block">
      <ul>
          <li class="active"><a id='home' href="#intro">Trang Chủ</a></li>
          <li><a id="learn_more_about" href="#">Về chúng tôi</a></li>
          <li><a id='university' href="#">Vấn đề xã hội</a></li>
          <li><a id='find-uni' href="#">Lập kế hoạch về hưu</a></li>
          <li class="drop-down"><a id='scholarship' href="#">Thông tin</a>
                <ul>
                  <li><a href="#">Chuẩn bị về hưu</a></li>
                  <li><a href="#">Về hưu thịnh vượng</a></li>
                  <li><a href="#">Về hưu khoẻ mạnh</a></li>
                  <li><a href="#">Về hưu an vui</a></li>
                </ul>
              </li>
          <li><a href="#" id='life'>Đăng ký thành viên</a></li>
          <li id ="user"><a href="#" id="login">ĐĂNG NHẬP</a></li>
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
            <img src="./public/image/old.jpg" alt="" class="img-fluid">
          </div>
        </div>
        <div class ="col-lg-6">
          <p>Nếu không có thái độ tích cực chuẩn bị cho độ tuổi trên 60, người cao tuổi sẽ phải đối mặt với những hậu quả nghiêm trọng như hạn chế tài chính và hạn chế tiếp cận các dịch vụ chăm sóc sức khỏe.</p>
          <p class="quote">"Những vấn đề trên sẽ trở nên càng trầm trọng hơn khi 15 năm tới đây, số người cao tuổi sẽ tăng"</p>
        </div>
      </div>

      <div class= "row space-need-1">
        <div class="col-lg-6">
          <p>Nhìn thấy những vấn đề trên sẽ trở nên càng trầm trọng hơn khi 15 năm tới đây, số người cao tuổi sẽ tăng và chiếm hơn ⅕ dân số, Active Ageing Vietnam mong muốn có thể cộng hưởng đến những thay đổi hiện có để giúp mỗi người có sự chuẩn bị cho tuổi già tốt hơn, sớm hơn. Cùng với những thay đổi chính sách của Chính phủ, Active Ageing là một giải pháp tối ưu trong việc.</p>
          <p class="quote">"Thúc đẩy tư duy tích cực hướng tới chuẩn bị an toàn tài chính và tiếp cận chăm sóc sức khỏe là vô cùng cần thiết"</p>
        </div>

        <div class="col-lg-6">
          <img src="./public/image/active ageing.jpg" alt="" class="img-fluid">
        </div>
      </div>

      <p>chuẩn bị cho một Việt Nam sẽ là một quốc gia có già hóa dân số vào năm 2035.</p>
      <p>Trong giai đoạn đầu, đối tượng mục tiêu của chúng tôi là những người lao động có thu nhập trung bình ít nhất 15 năm trước khi nghỉ hưu.</p>

    </div>
  </section><!-- #portfolio -->

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
                      <strong>Email:</strong> activeageing.ftu2@gmail.com
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
      <!-- <h1 class="text-light"><a href="#intro" class="scrollto"><span>Rapid</span></a></h1> -->
      <a href="#header" class="scrollto"><img style="height: 80px;width: 80px;" src="public/image/logo2.png" alt="" class="img-fluid"></a>
    </div>

    <nav class="main-nav float-right d-none d-lg-block">
      <ul>
          <li class="active"><a id='home' href="#intro">Trang Chủ</a></li>
          <li><a href="#about">Về chúng tôi</a></li>
          <li><a id='university' href="#">Vấn đề xã hội</a></li>
          <li><a id='find-uni' href="#">Lập kế hoạch về hưu</a></li>
          <li class="drop-down"><a id='scholarship' href="#">Thông tin</a>
                <ul>
                  <li><a href="#">Chuẩn bị về hưu</a></li>
                  <li><a href="#">Về hưu thịnh vượng</a></li>
                  <li><a href="#">Về hưu khoẻ mạnh</a></li>
                  <li><a href="#">Về hưu an vui</a></li>
                </ul>
              </li>
          <li><a href="#" id='life'>Đăng ký thành viên</a></li>
          <li id ="user"><a href="#" id="login">ĐĂNG NHẬP</a></li>
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
              <h2>Active Ageing <br> <span>Vietnam</span></h2>
              
            </div>

            <div class="col-md-6 intro-img order-md-last order-first">
              <img src="public/image/intro-img.svg" alt="" class="img-fluid">
            </div>
          </div>

        </div>
      </section><!-- #intro -->
       
        <div style = "display: none">
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
        </div>
   <!--==========================
          Footer
        ============================-->
        <footer id="footer" class="section-bg">
          
            
          </footer><!-- #footer -->
  
  
        <a href="#" class="back-to-top"><i class="fa fa-chevron-up"></i></a>
        <!-- Uncomment below i you want to use a preloader -->
        <!-- <div id="preloader"></div> -->
  
    </div>
`
components.studentLifeScreen = `

        <!--==========================
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
          <!-- <h1 class="text-light"><a href="#intro" class="scrollto"><span>Rapid</span></a></h1> -->
          <a href="#header" class="scrollto"><img style="height: 80px;width: 80px;" src="public/image/logo2.png" alt="" class="img-fluid"></a>
        </div>
    
        <nav class="main-nav float-right d-none d-lg-block">
          <ul>
              <li class="active"><a id='home' href="#intro">Trang Chủ</a></li>
              <li><a href="#about">Về chúng tôi</a></li>
              <li><a id='university' href="#">Vấn đề xã hội</a></li>
              <li><a id='find-uni' href="#">Lập kế hoạch về hưu</a></li>
              <li class="drop-down"><a id='scholarship' href="#">Thông tin</a>
                    <ul>
                      <li><a href="#">Chuẩn bị về hưu</a></li>
                      <li><a href="#">Về hưu thịnh vượng</a></li>
                      <li><a href="#">Về hưu khoẻ mạnh</a></li>
                      <li><a href="#">Về hưu an vui</a></li>
                    </ul>
                  </li>
              <li><a href="#" id='life'>Đăng ký thành viên</a></li>
              <li id ="user" ><a href="#" id="login">ĐĂNG NHẬP</a></li>
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
              <h2>Active Ageing <br><span>Vietnam</span></h2>
              
            </div>

            <div class="col-md-6 intro-img order-md-last order-first">
              <img src="public/image/intro-img.svg" alt="" class="img-fluid">
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
<header id="header">
    <div id="topbar">
    <div class="row">
    <div class="container" style ="text-align : right;">
    <button id="translate" type="button" class="btn" style="float: right">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-translate" viewBox="0 0 16 16">
        <path d="M4.545 6.714 4.11 8H3l1.862-5h1.284L8 8H6.833l-.435-1.286H4.545zm1.634-.736L5.5 3.956h-.049l-.679 2.022H6.18z"/>
        <path d="M0 2a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v3h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-3H2a2 2 0 0 1-2-2V2zm2-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H2zm7.138 9.995c.193.301.402.583.63.846-.748.575-1.673 1.001-2.768 1.292.178.217.451.635.555.867 1.125-.359 2.08-.844 2.886-1.494.777.665 1.739 1.165 2.93 1.472.133-.254.414-.673.629-.89-1.125-.253-2.057-.694-2.82-1.284.681-.747 1.222-1.651 1.621-2.757H14V8h-3v1.047h.765c-.318.844-.74 1.546-1.272 2.13a6.066 6.066 0 0 1-.415-.492 1.988 1.988 0 0 1-.94.31z"/>
        </svg>
        <span id ="status">English</span>
      </button>
    </div>
    </div>
    </div>


<div class="container">

  <div class="logo float-left">
    <!-- Uncomment below if you prefer to use an image logo -->
    <!-- <h1 class="text-light"><a href="#intro" class="scrollto"><span>Rapid</span></a></h1> -->
    <a href="#header" class="scrollto"><img style="height: 80px;width: 80px;" src="public/image/logo2.png" alt="" class="img-fluid"></a>
  </div>

  <nav class="main-nav float-right d-none d-lg-block">
    <ul>
        <li class="active"><a id='home' href="#intro">Trang Chủ</a></li>
        <li><a href="#about">Về chúng tôi</a></li>
        <li><a id='university' href="#">Vấn đề xã hội</a></li>
        <li><a id='find-uni' href="#">Lập kế hoạch về hưu</a></li>
        <li class="drop-down"><a id='scholarship' href="#">Thông tin</a>
              <ul>
                <li><a href="#">Chuẩn bị về hưu</a></li>
                <li><a href="#">Về hưu thịnh vượng</a></li>
                <li><a href="#">Về hưu khoẻ mạnh</a></li>
                <li><a href="#">Về hưu an vui</a></li>
              </ul>
            </li>
        <li><a href="#" id='life'>Đăng ký thành viên</a></li>
        <li id ="user"><a href="#" id="login">ĐĂNG NHẬP</a></li>
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
          <h2>Để <span>chúng tôi</span> tính toán kế hoạch về hưu giúp bạn.</h2s>
        
          <div>
          <a href="#retirement" class="btn-get-started">BẮT ĐẦU NGAY</a>
          </div>
          </div>
          <div class="col-md-6 intro-img order-md-last order-first">
            <img src="public/image/planning.png" alt="" class="img-fluid">
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
                <span class="fa fa-info-circle errspan" data-toggle="tooltip" data-placement="top" title="Độ tuổi bạn dự định nghỉ hưu. Chúng tôi giả định rằng bạn không đóng góp thêm vào quỹ tiết kiệm hưu trí của mình trong năm này. Ví dụ, nếu bạn nghỉ hưu ở tuổi 60, khoản đóng góp cuối cùng của bạn xảy ra khi bạn 59 tuổi. Chúng tôi giả định rằng bạn thực hiện toàn bộ khoản đóng góp của mình vào cuối mỗi năm."></span>
                <div class="validation"></div>
              </div>
              <div class="form-group">
                <input value = ""  class="form-control" name="income" id="income" placeholder="Thu nhập hàng năm của hộ gia đình hiện tại ( Triệu VNĐ)" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                <span class="fa fa-info-circle errspan" data-toggle="tooltip" data-placement="top" title="Tổng thu nhập của bạn trong năm hiện tại."></span>
                <div class="validation"></div>
              </div>
              <div class="form-group">
                <input value = ""  class="form-control" name="increase" id="increase" placeholder="Tăng trưởng thu nhập ước tính hằng năm (%)" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                <span class="fa fa-info-circle errspan" data-toggle="tooltip" data-placement="top" title="Tỷ lệ thu nhập ước tính tăng hàng năm cho đến năm nghỉ hưu dự kiến của bạn."></span>
                <div class="validation"></div>
              </div>
              
              </div>


              <div class="col-lg-6">
                <div class="form-group">
                  <input value = "" class="form-control" name="saving" id="saving" placeholder="Số dư khoản tiết kiệm về hưu hiện tại ( Triệu VNĐ)" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                  <span class="fa fa-info-circle errspan" data-toggle="tooltip" data-placement="top" title="Số dư tài khoản tiết kiệm về hưu hiện tại của bạn."></span>
                  <div class="validation"></div>
                </div>

              <div class="form-group">
              <input value = "" name="annualSaving" class="form-control" id="annualSaving" placeholder="Tỷ lệ chi tiêu khi về hưu so với thu nhập năm cuối trước khi nghỉ hưu. (%)" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
              <span class="fa fa-info-circle errspan" data-toggle="tooltip" data-placement="top" title="Phần trăm thu nhập hàng năm sẽ được đóng góp vào quỹ tiết kiệm hưu trí của bạn mỗi năm. Nếu thu nhập hàng năm của bạn là 150.000.000 đồng và tiết kiệm hưu trí hàng năm của bạn là 8%, thì mức đóng góp là 150.000.000 x 8% = 12.000.000 đồng mỗi năm."></span>
              <div class="validation"></div>
            </div>
            <script>
            $(function () {
              $('[data-toggle="tooltip"]').tooltip()
            })
            </script>
            <div class="form-group">
              <input value = "" class="form-control" name="retirementPay" id="retirementPay" placeholder="Thu nhập yêu cầu khi về hưu (%)" data-rule="email" data-msg="Please enter a valid email" />
              <span class="fa fa-info-circle errspan" data-toggle="tooltip" data-placement="top" title="Tỷ lệ phần trăm thu nhập hộ gia đình sau khi nghỉ hưu mà bạn nghĩ rằng bạn sẽ cần để trang trải các chi phí của mình khi nghỉ hưu. Số tiền này dựa trên thu nhập hộ gia đình trong năm làm việc cuối cùng của bạn (năm ngay trước khi bạn nghỉ hưu)."></span>
              <div class="validation"></div>
            </div>
            <div class="form-group">
              <input value = "" class="form-control" name="rateBefore" id="rateBefore" placeholder="Lợi suất ước tính trước khi về hưu (%)" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
              <span class="fa fa-info-circle errspan" data-toggle="tooltip" data-placement="top" title="Tỷ suất lợi nhuận kỳ vọng hàng năm trên quỹ tiết kiệm hưu trí của bạn trước khi nghỉ hưu."></span>
              <div class="validation"></div>
            </div>
            <div class="form-group">
              <input value = "" class="form-control" name="rateAfter" id="rateAfter" placeholder="Lợi suất ước tính trong quá trình về hưu (%)" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
              <span class="fa fa-info-circle errspan" data-toggle="tooltip" data-placement="top" title="Tỷ suất lợi nhuận kỳ vọng hàng năm trên quỹ tiết kiệm hưu trí của bạn sau khi nghỉ hưu."></span>
              <div class="validation"></div>
            </div>
            <div class="form-group">
              <input value = "" class="form-control" name="pension" id="pension" placeholder="Lương hưu và thu nhập sau về hưu khác" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
              <span class="fa fa-info-circle errspan" data-toggle="tooltip" data-placement="top" title="Thu nhập dự kiến từ lương hưu hoặc các nguồn khác."></span>
              <div class="validation"></div>
            </div>
            
            
            </div>
            </div>
            <br><br>
              <div id="submit_btn" class="text-center"><button type="submit" title="Send Message">TÍNH TOÁN KẾ HOẠCH VỀ HƯU</button></div>
            </form>
          </div>
        </div>
        <div class ="row">
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
                      <strong>Email:</strong> activeageing.ftu2@gmail.com<br>
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
components.aboutScreen = `<!--==========================
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
      <!-- <h1 class="text-light"><a href="#intro" class="scrollto"><span>Rapid</span></a></h1> -->
      <a href="#header" class="scrollto"><img style="height: 80px;width: 80px;" src="public/image/logo2.png" alt="" class="img-fluid"></a>
    </div>

    <nav class="main-nav float-right d-none d-lg-block">
      <ul>
          <li class="active"><a id='home' href="#intro">Trang Chủ</a></li>
          <li><a href="#about">Về chúng tôi</a></li>
          <li><a id='university' href="#">Vấn đề xã hội</a></li>
          <li><a id='find-uni' href="#">Lập kế hoạch về hưu</a></li>
          <li class="drop-down"><a id='scholarship' href="#">Thông tin</a>
                <ul>
                  <li><a href="#">Chuẩn bị về hưu</a></li>
                  <li><a href="#">Về hưu thịnh vượng</a></li>
                  <li><a href="#">Về hưu khoẻ mạnh</a></li>
                  <li><a href="#">Về hưu an vui</a></li>
                </ul>
              </li>
          <li><a href="#" id='life'>Đăng ký thành viên</a></li>
          <li id ="user" ><a href="#" id="login">ĐĂNG NHẬP</a></li>
      </ul>
    </nav><!-- .main-nav -->
    
  </div>
</header><!-- #header -->

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
            <h2 style = "color: #413e66;font-weight: 650;"">Active Ageing Vietnam</h2>
            <p style ="color : #696592">
              Active Ageing là dự án được ra đời với nỗi trăn trở về một vấn đề mà Việt Nam và một số nước trong khu vực đang và sẽ phải đối mặt trong tương lai gần, đó chính là già hoá dân số và những hệ luỵ có liên quan.
            </p>
            <p style ="color : #696592">
              Khi Việt Nam đang trên đà phát triển từ nhóm nước có thu nhập thấp sang nhóm có mức thu nhập trung bình, những vấn đề về an sinh xã hội lại được quan tâm và chú ý hơn bao giờ hết. Một trong những vấn đề nhức nhối hiện nay chính là tình trạng già hoá dân số dẫn đến những gánh nặng nhất định cho cá nhân và cả cộng đồng. Theo Vụ Liên Hiệp Quốc về vấn đề Kinh tế và Xã hội, tốc độ già hoá dân số tại các quốc gia Đông Nam Á hiện nay rất nhanh. Vào năm 2030, có 5/11 quốc gia ASEAN sẽ đối mặt với già hóa dân số, bao gồm Việt Nam. Trước bối cảnh đó, sự chuẩn bị cho giai đoạn già hoá dân số là vô cùng cấp thiết, đặc biệt là ở góc độ cá nhân.
            </p>
          </div>
        </div>
        <div class="row feature-item mt-5 pt-5" style = " margin-top: 0! important; padding-top: 1rem! important; ">
          <div class="col-lg-6 wow fadeInUp order-1 order-lg-2">
            <img src="./public/image/about us 3.png" class="img-fluid" alt="">
          </div>

          <div class="col-lg-6 wow fadeInUp pt-4 pt-lg-0 order-2 order-lg-1" style = "text-align: justify;">
            <!-- <h4>Neque saepe temporibus repellat ea ipsum et. Id vel et quia tempora facere reprehenderit.</h4> -->
            <p style ="color : #696592">
              Góp phần cộng hưởng những nỗ lực để đối phó với các thách thức mà cả xã hội đang gặp phải, dự án tiến hành thực hiện “Gói các giải pháp hỗ trợ người cao tuổi quản lý tài chính và tiếp cận dịch vụ chăm sóc sức khỏe chuẩn bị cho tuổi già”. Chúng tôi tin rằng việc nâng cao sự chủ động trong tài chính và sức khoẻ không chỉ ích cho riêng một cá nhân mà còn tạo ra những ảnh hưởng tích cực cho cộng đồng, góp phần vào việc phát triển kinh tế-xã hội, hướng đến một tương lai bền vững hơn.
           </p>
          </div>
          
        </div>
      </div>
      
    <!-- </section>#feature -->
  <!--==========================
    Services Section
  ============================-->
  <!-- <section id="services" class="section-bg"> -->
      <div style = "padding-top: 30px" class="container">

        <header class="section-header">
          <h3>Dự án chúng tôi hướng đến</h3>
          <p></p>
        </header>

        <div class="row">

          <div class="col-md-6 col-lg-4 wow bounceInUp" data-wow-duration="1.4s">
            <div class="box">
              <div class="icon" style="background: #fceef3;"><i class="ion-ios-analytics-outline" style="color: #ff689b;"></i></div>
              
              <p class="description">Thúc đẩy tiết kiệm cá nhân qua việc cung cấp các công cụ quản lý chi tiêu, quản lý tiết kiệm dễ sử dụng</p>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 wow bounceInUp" data-wow-duration="1.4s">
            <div class="box">
              <div class="icon" style="background: #fff0da;"><i class="ion-ios-bookmarks-outline" style="color: #e98e06;"></i></div>
             
              <p class="description">Giúp người dùng thiết lập kế hoạch quản lý tài chính chuẩn bị cho giai đoạn sau về hưu và cung cấp cơ hội kết nối với các chuyên gia tài chính qua các gói tư vấn cá nhân 1-1</p>
            </div>
          </div>

          <div class="col-md-6 col-lg-4 wow bounceInUp" data-wow-delay="0.1s" data-wow-duration="1.4s">
            <div class="box">
              <div class="icon" style="background: #e6fdfc;"><i class="ion-ios-paper-outline" style="color: #3fcdc7;"></i></div>
              <!-- <h4 class="title"><a href="">Sed ut perspiciatis</a></h4>  -->
              <p class="description"> Cung cấp thông tin về dịch vụ chăm sóc sức khỏe, bảo hiểm y tế, du lịch, giải trí và các hoạt động khác.</p>
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
                      <strong>Email:</strong> activeageing.ftu2@gmail.com<br>
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
            <a class="txt1 bo1 hov1" href="#" id="home">
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