// this code to rerun js file
const reCallJsFiles = (screenName)=>{
    //$.getScript( "model/navigation.js");
      if (screenName=="loginScreen"){
        $.getScript("model/log_in.js");
      }
      if (screenName == 'scholarshipScreen'){
        $.getScript("model/navigation_infor_tab.js");
      }
      if (screenName == 'welcomeScreen'){
        $.getScript("model/homepage.js");
      }
      // $.getScript("public/js/main.js");
    // $.getScript("lib/mobile-nav/mobile-nav.js");
    // $.getScript("contactform/contactform.js");
    //$.getScript("public/js/main.js");
    // $.getScript('lib/isotope/isotope.pkgd.min.js');
    // $.getScript("lib/counterup/counterup.min.js");
   
    
}
const view = {}
view.setActiveScreen = (screenName) => {
  console.log('change to ' + screenName);
  currentScreen = screenName;
  if (screenName == 'loginScreen')
  {
    document.querySelector('body').innerHTML = components[screenName];
  }
  else{
      document.getElementById('app').innerHTML = components[screenName];
    }
    // console.log(language);
  if (language == "english") changeToEnglish();
  //NavigationActive();
  reCallJsFiles(screenName);
    
}
card = function (data) { 
  var item = `<div class="col-md-6 col-lg-4 wow bounceInUp" data-wow-delay="0.1s" data-wow-duration="1.4s" style="visibility: visible; animation-duration: 1.4s; animation-delay: 0.1s; animation-name: bounceInUp;">
            <a href="${data.href}">
            <div class="box" style="padding: 0;">
              <div class="image" style="background: #e6fdfc;"><img width="100%" src="${data.imgSrc}"></div>
              <div style="padding: 5px 30px"><h4 class="title"><a href="${data.href}">${data.title}</a></h4></div>
            </div>
            </a>
          </div>`;
  return item;
 }

renderInformationData= function (type){
  // var card = `<div class="col-md-6 col-lg-4 wow bounceInUp" data-wow-delay="0.1s" data-wow-duration="1.4s" style="visibility: visible; animation-duration: 1.4s; animation-delay: 0.1s; animation-name: bounceInUp;">
  //           <div class="box" style="padding: 0;">
  //             <div class="image" style="background: #e6fdfc;"><img width="100%" src="./public/image/posts/post1.jpeg"></div>
  //             <div style="padding: 5px 30px"><h4 class="title"><a href="">Top 3 bí quyết để có một tuổi “xế chiều” thịnh vượng khỏe mạnh an vui</a></h4></div>
  //           </div>
  //         </div>`;
  var data= [];
  if(type == 'prepare-retire'){
    data = [
      {
        'title' : 'Top 3 bí quyết để có một tuổi “xế chiều” thịnh vượng khỏe mạnh an vui',
        'imgSrc' : './public/image/posts/post1.jpeg',
        'href' : './posts/Top 3 bi quyet de co 1 tuoi xe chieu khoe manh an vui.html'
      },
      {
        'title' : 'Tầm quan trọng của quản lý tài chính, chăm sóc sức khỏe trong thờI đại “vuca”',
        'imgSrc' : './public/image/posts/post2.jpeg',
        'href' : './posts/Tam quan trong cua quan li tai chinh cham soc suc khoe trong thoi dai vuca.html'
      },
      {
        'title' : 'Tôi đã nghỉ hưu ở tuổi 40 bằng cách nào?',
        'imgSrc' : './public/image/posts/post3.jpeg',
        'href' : './posts/Toi da nghi huu o tuoi 40 bang cach nao.html'
      },
    ];
  }
  
  if (type == 'prosperous-retire')
    data = [
      {
        'title' : 'Lập kế hoạch về hưu cùng active ageing vietnam',
        'imgSrc' : './public/image/posts/post4.jpeg',
        'href' : './posts/Lap ke hoach ve huu cung active ageing vietnam.html'
      },
      {
        'title' : 'Tiết kiệm là một hành trình của thói quen',
        'imgSrc' : './public/image/posts/post5.jpeg',
        'href' : './posts/Tiet kiem la 1 hanh trinh cua thoi quen.html'
      },
      {
        'title' : 'Giải mã phương pháp 50/20/30 trong quản lý tài chính cá nhân hiệu quả',
        'imgSrc' : './public/image/posts/post6.jpeg',
        'href' : './posts/Giai ma phuong phap 50 30 20.html'
      }
    ];

  if (type == 'healthy-retire')
    data = [
      {
        'title' : 'Bỏ túi những thói quen tốt cho sức khỏe',
        'imgSrc' : './public/image/posts/post7.jpeg',
        'href' : './posts/Bo tui nhung thoi quen tot cho suc khoe.html'
      }
    ]
    if (type == 'happy-retire')
    data = [
      {
        'title' : '5 cuốn sách có thể thay đổi suy nghĩ của bạn và biến từng khoảnh khắc còn lại của năm 2021 trở nên tuyệt vời',
        'imgSrc' : './public/image/posts/post8.jpeg',
        'href' : './posts/5 cuon sach to the thay doi suy nghi cua ban.html'
      }
    ]

    if (type == 'news')
      data = [
        {
          'title' : 'Đi tìm hạnh phúc thời covid-19: an toàn tài chính và sức khoẻ tinh thần',
          'imgSrc' : './public/image/posts/post11.jpeg',
          'href' : './posts/webinar.html'
        },
        {
          'title' : 'Già hóa dân số và những gánh nặng người già đang và sẽ gặp phải',
          'imgSrc' : './public/image/posts/post9.jpeg',
          'href' : './posts/Gia hoa dan so va nhung ganh nang ma nguoi gia gap phai.html'
        },
        {
          'title' : '"Già hóa dân số" - Thách thức mà Việt Nam phải đối mặt',
          'imgSrc' : './public/image/posts/post10.jpeg',
          'href' : './posts/Gia hoa dan so- thach thuc ma viet nam phai doi mat.html'
        }
      ]
    var list = document.getElementById('listPost');
    var listUI =  data.map((data)=> card(data));
    listUI = listUI.join('');
    console.log(listUI);
    list.innerHTML = listUI;
}