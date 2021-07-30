console.log("retirement planning");
var myChart;
var user = {};
var listLabels = [];
var beginningRetirementBalance = [];
var investmentGrowth = [];
var contributions =  [];
var retirementWithdrawals = [];
var pension = [];
var endingRetirementBalance = [];
var innerHTML = document.getElementById("retirement").innerHTML;
function calculate(event){
    event.preventDefault();
    //console.log('submitted');
    document.getElementById('introduction').innerHTML = '';
    console.log(language);
    var form = document.querySelector(".contactForm");
    var listInput  = form.querySelectorAll("input");
    for (var i = 0;i< listInput.length;i++){
        user[listInput[i].id] = listInput[i].value;
    }
    listInput  = form.querySelectorAll("select");
    for (var i = 0;i< listInput.length;i++){
        user[listInput[i].id] = listInput[i].value;
    }
    //user.yearsRetirement = 35;
    //80 - parseInt(user.retirementAge);
    user.inflation = 3.5;
    console.log(user);
    submitData(user);
    user.year = user.retirementAge - user.currentAge;
    user.lastYearIncome = user.income*Math.pow(1+user.increase/100,user.year-1);
    var retirementPaymentMoney = user.lastYearIncome*user.retirementPay/100;

    
    beginningRetirementBalance.push(parseInt(user.saving));
    investmentGrowth.push(user.saving*user.rateBefore/100);
    contributions.push(user.income*user.annualSaving/100); // can sua
    retirementWithdrawals.push(0);
    pension.push(0);
    var tmp = beginningRetirementBalance[0]+investmentGrowth[0]+contributions[0]-retirementWithdrawals[0];
    endingRetirementBalance.push(tmp);
    
    var i = parseInt(user.currentAge)+1;
    check = beginningRetirementBalance[0]; 
    while ( (check > 0 && i < parseInt(user.retirementAge)+parseInt(user.yearsRetirement)+1) || i== parseInt(user.currentAge)+1 ){
        beginningRetirementBalance.push(LastValue(endingRetirementBalance));
        var rate;
        if (i < user.retirementAge) rate = user.rateBefore;
        else rate =user.rateAfter;
        investmentGrowth.push(LastValue(beginningRetirementBalance)*rate/100);
        if (i< user.retirementAge) contributions.push((user.income*parseInt(user.annualSaving)/100)*Math.pow(1+parseInt(user.increase)/100,i-parseInt(user.currentAge)));
        else contributions.push(0);
        if (user.retirementAge > i) retirementWithdrawals.push(0);
        else retirementWithdrawals.push(retirementPaymentMoney*Math.pow(1+user.inflation/100,i-user.retirementAge));
        if (i <user.retirementAge) pension.push(0);
        else pension.push(parseInt(user.pension));
        endingRetirementBalance.push(LastValue(beginningRetirementBalance)+LastValue(investmentGrowth)+LastValue(contributions)+parseInt(LastValue(pension))-LastValue(retirementWithdrawals));
        check = LastValue(beginningRetirementBalance);
        i++;

        if (LastValue(endingRetirementBalance)<0) endingRetirementBalance[endingRetirementBalance.length-1]=0;
        if (LastValue(beginningRetirementBalance)<0) beginningRetirementBalance[beginningRetirementBalance.length-1]=0;
    }
    var start = parseInt(user.currentAge);
    var end = parseInt(user.retirementAge)+parseInt(user.yearsRetirement);
    end = i-2;

    var notification = `Bạn sẽ nghỉ hưu vào ${user.year} năm tới. Với mức tăng thu nhập hằng năm là ${user.increase}%, thu nhập vào năm cuối cùng trước khi về hưu của bạn sẽ là ${numberWithCommas(user.lastYearIncome.toFixed(2))} Triệu VND. ${user.retirementPay}% thu nhập năm cuối cùng trước khi về hưu của bạn sẽ được ước tính là chi tiêu hằng năm trong giai đoạn hưu trí của bạn tương ứng ${numberWithCommas(retirementPaymentMoney.toFixed(2))} triệu VNĐ. Giá trị này sẽ tăng theo tỷ lệ lạm phát sau đó.`;
    if ((parseInt(user.yearsRetirement))  > beginningRetirementBalance.length - (parseInt(user.retirementAge)-parseInt(user.currentAge))) notification += ` Tuy nhiên, có thể bạn cần phải điều chỉnh kế hoạch về hưu của mình đôi chút vì quỹ tiết kiệm về hưu của bạn sẽ cạn kiệt vào năm bạn ${end} tuổi. Xem biểu đồ minh hoạ bên dưới.`;
    else notification += ` Kế hoạch Quỹ tiết kiệm về hưu của bạn đang đi đúng hướng. Hãy sử dụng chức năng Quản lý tiết kiệm để dễ dàng theo dõi và quản lý tiến độ của mình nhé!`;
    document.getElementById("result").innerHTML = `<p style="color : #696592; text-align : justify">${notification}</p>`;
    
    for (var i = start;i<= end;i++) listLabels.push(i);
    function savingAdvice(saving,rateBefore,income,increase,annualSaving,retirementAge,currentAge,yearsRetirement,rateAfter,inflation,retirementPay){
      for (let i = currentAge;i<retirementAge-1;i++){
        saving += saving*rateBefore/100 + income*annualSaving/100;
        income += income * increase/100; 
      }
      var incomeAfter = income * retirementPay/100;
      for (let i = 1; i<=yearsRetirement;i++){
        saving += saving*rateAfter/100;
        saving -= incomeAfter;
        incomeAfter += incomeAfter*inflation/100;
      }
      return saving; 
    }
    // var check = parseFloat(user.annualSaving);
    // money = savingAdvice(parseFloat(user.saving),parseFloat(user.rateBefore),
    // parseFloat(user.income),parseFloat(user.increase),
    // parseFloat(user.annualSaving),parseFloat(user.retirementAge),
    // parseFloat(user.currentAge),parseFloat(user.yearsRetirement),
    // parseFloat(user.rateAfter),parseFloat(user.inflation), parseFloat(user.retirementPay));
    // console.log(money);
    // while (money<0){
    //   check += 0.0001;
    //   money = savingAdvice(parseFloat(user.saving),parseFloat(user.rateBefore),
    //   parseFloat(user.income),parseFloat(user.increase),
    //   parseFloat(user.annualSaving),parseFloat(user.retirementAge),
    //   parseFloat(user.currentAge),parseFloat(user.yearsRetirement),
    //   parseFloat(user.rateAfter),parseFloat(user.inflation), parseFloat(user.retirementPay));
    //   console.log("hello"); 
    // }

    //ADVICE
    if ((parseInt(user.yearsRetirement))  > beginningRetirementBalance.length - (parseInt(user.retirementAge)-parseInt(user.currentAge))){
      var outcome = `<h3>Kế hoạch nghỉ hưu này chưa hợp lý rồi!</h3><img src="public/image/fail.png" alt="" class="img-fluid">`;
    } else {
      var outcome = `<h3>Bạn đã có một kế hoạch về hưu tuyệt vời!</h3><img src="public/image/success.png" alt="" class="img-fluid">`;
    }
    document.getElementById('firstOutcome').innerHTML = `<p style="color : #696592; text-align : justify">${outcome}</p>`;


    //ĐĂNG KÝ THÀNH VIÊN
    var callToAction = `<section id="call-to-action" class="call-to-action">
    <div class="container" data-aos="zoom-out">
      <div class="row">
        <div class="col-lg-9 text-center text-lg-start">
          <h3 class="cta-title">Xây dựng kế hoạch về hưu hợp lý cùng Active Ageing ngay hôm nay!</h3>
          <p class="cta-text">Hãy sớm trở thành hội viên của Active Ageing Vietnam, để có thể nhận được nhiều quyền lợi đặc biệt và cho chúng tôi cơ hội mang đến cho bạn những trải nghiệm tốt nhất tại đây.</p>
        </div>
        <div class="col-lg-3 cta-btn-container text-center">
          <a class="cta-btn align-middle" id="register" href="#" style = "text-transform: uppercase;">Đăng ký thành viên</a>
        </div>
      </div>

    </div>
  </section>`; 

  document.getElementById('callToAction').innerHTML = `<p style="color : #696592;">${callToAction}</p>`;


    var advice = `Để đạt được các mục tiêu nghỉ hưu, chúng tôi có những đề xuất dành cho bạn như sau, hãy thử một trong những đề xuất này nhé:<br>
    <ul class="bullet">
      <li>Tăng mức đóng góp cho khoản tiết kiệm hưu trí hàng năm lên.</li>
      <li>Tăng tỷ suất lợi nhuận của bạn trước khi nghỉ hưu lên.</li>
      <li>Giảm thu nhập yêu cầu của bạn khi nghỉ hưu xuống thấp hơn so với mức hiện tại.</li>
      <li>Trì hoãn việc nghỉ hưu của bạn một vài năm nữa.</li>
      <li>Tăng lương hưu / thu nhập khác của bạn sau khi nghỉ hưu lên.</li>
    </ul>`;
    document.getElementById('advice').innerHTML = `<p style="color : #696592; text-align : justify">${advice}</p>`;
    var inner = ``;
    for (var i= 0;i< beginningRetirementBalance.length-1;i++)
    {
        var age = parseInt(user.currentAge) +i;
        inner = inner + `<tr>
                        <th scope="row">${age}</th>
                        <td>${numberWithCommas((beginningRetirementBalance[i].toFixed(2)))}</td>
                        <td>${numberWithCommas((investmentGrowth[i].toFixed(2)))}</td>
                        <td>${numberWithCommas((contributions[i].toFixed(2)))}</td>
                        <td>${numberWithCommas((retirementWithdrawals[i].toFixed(2)))}</td>
                        <td>${numberWithCommas((retirementWithdrawals[i].toFixed(2)))}</td>
                        <td>${numberWithCommas((pension[i].toFixed(2)))}</td>
                        <td>${numberWithCommas((endingRetirementBalance[i].toFixed(2)))}</td>
                    </tr>`
    }

    var table = `<table class="table table-bordered">
                    <thead style="background-color: #F89595; color : white">
                    <tr>
                        <th scope="col">Tuổi</th>
                        <th scope="col">Số dư Quỹ tiết kiệm Hưu trí đầu kỳ</th>
                        <th scope="col">Tăng trưởng của Quỹ</th>
                        <th scope="col">Đóng góp vào Quỹ tiết kiệm Hưu trí</th>
                        <th scope="col">Nghỉ hưu với ${user.retirementPay}% thu nhập năm cuối cùng</th>
                        <th scope="col">Khoản tiền rút ra từ Quỹ để phục vụ chi tiêu</th>
                        <th scope="col">Thu nhập từ lương hưu hoặc các nguồn khác</th>
                        <th scope="col">Số dư Quỹ tiết kiệm Hưu trí cuối kỳ</th>
                    </tr>
                    </thead>
                    <tbody>
                    ${inner}
                    </tbody>
                </table>`;
    document.getElementById("table").innerHTML = table;

    if (language == "english") {
      var obj = document.getElementById("resultForm");
    var inner = obj.innerHTML;
    
    for (var i = 0;i < diction.length;i++)
    {
        var word = diction[i];
        inner = inner.replace(word["Vietnamese"],word["English"]);
    }
    obj.innerHTML = inner;
    }
    drawChart(listLabels,endingRetirementBalance,retirementWithdrawals);

    // var listId = [];
    // console.log(" don dep data");
    // firebase.firestore().collection("retirementPlan").where("name", "==", "")
    // .get()
    // .then((querySnapshot) => {
    //     querySnapshot.forEach((doc) => {
    //         // doc.data() is never undefined for query doc snapshots
    //         //console.log(doc.id);
    //         listId.push(doc.id);
    //     });
    // }).then(()=>{
    //   listId.forEach((id)=>{
    //     firebase.firestore().collection("retirementPlan").doc(id).delete().then(() => {
    //       console.log("Document successfully deleted!");
    //   }).catch((error) => {
    //     console.error("Error removing document: ", error);
    // });
    
    //   })
    // })
    // .catch((error) => {
    //     console.log("Error getting documents: ", error);
    // });
};
function removePercent(s) {
  console.log("remove");
  s = s.replace("%","");
  s = parseInt(s);
  console.log(s);
  return s;
  }
function LastValue(list ){
    return list[list.length-1];
}
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
function drawChart(listLabels,data1, data2) {
    console.log("da draw");
    if (myChart != null) myChart.destroy();
    myChart = new Chart(document.getElementById("line-chart"), {
        type: 'line',
        data: {
          labels: listLabels,
          datasets: [{ 
              data: data1,
              label: "Ending Retirement Balance",
              borderColor: "#ea7d32",
              fill: false
            }, { 
              data: data2,
              label: "Retirement Withdrawals",
              borderColor: "#4763c4",
              fill: false
            },
          ]
        },
        options: {
          tooltips: {
            callbacks: {
              label: (item) => `${item.yLabel} GB`,
            },
          },
          title: {
            display: true,
            text: 'World population per region (in millions)'
          }
        }
      });
  }
  function submitData(user){
    var db = firebase.firestore();
    db.collection("retirementPlan").add(user)
    .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    });
  }
  function retirementRecall(){
    $("#submit_btn").on('click', calculate);
    var form = document.querySelector(".contactForm");
    var listInput  = form.querySelectorAll("input");
    for (var i = 0;i< listInput.length;i++){
      listInput[i].value = user[listInput[i].id];
    }
    listInput  = form.querySelectorAll("select");
    for (var i = 0;i< listInput.length;i++){
      listInput[i].value = user[listInput[i].id];
    }
    drawChart(listLabels,endingRetirementBalance,retirementWithdrawals);
  }


function checkScreen (){
  if (window.innerWidth < 990){
    document.getElementById("retirement").innerHTML =  "";
    document.querySelector('.intro-info').innerHTML = `
      <h2> Xin lỗi ! Tính năng này không khả dụng trên các thiết bị di động! </h2>

    `
  }
  else {
    document.getElementById("retirement").innerHTML = innerHTML;
    $("#submit_btn").on('click', calculate);
  }
}
$("#submit_btn").on('click', calculate);
checkScreen();
$(window).resize(checkScreen);