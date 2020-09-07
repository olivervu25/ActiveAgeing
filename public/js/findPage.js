// this is code for Find Page
var listCity = [];
var htmlListCity = [];
var listMajor = [];
var htmlListMajor = [];
// result
var tmpres = '';
for (var i=1;i<=20;i++){tmpres= tmpres+`<div class="card col-lg-4 col-12" style="width: 18rem;">
                                          <img class="card-img-top rounded" src="public/image/activities.jpg" alt="Card image cap">
                                          <div class="card-body">
                                            <h5 class="card-title"><strong>NUST MISSIS</strong></h5>
                                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <a href="#" class="btn blue-btn">Discover</a>
                                          </div>
                                          </div>`}
document.getElementById('listResult').innerHTML = tmpres;
// filter City
$('#inputGroupCity').on('change',()=>{
  var value = $('#inputGroupCity').val();
  if(value!='Choose...'){
    if(listCity.indexOf(value)== -1){
      listCity.push(value);
      htmlListCity = listCity.map(value=>{
        return(`<div class="alert blue-btn border-white alert-dismissible fade show col-5 col-lg-2" role="alert">
                  ${value}
                  <button type="button" onclick="deleteCity(this.value)" value='${value}' class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true" >&times;</span>
                  </button>
                </div>`)
      });
      let tmp = "";
      htmlListCity.forEach(value=>{
        tmp = tmp+ value;
      });
      document.getElementById('listCity').innerHTML = tmp;
    }
  }
})
deleteCity = (value)=>{
  var arr = listCity.filter(val=>{
    return val !==value
  });
  listCity = arr;
  if(listCity.length==0){
    $('#inputGroupCity').val('Choose...');
  }
}
// filter for Major
$('#inputGroupMajor').on('change',()=>{
  var value = $('#inputGroupMajor').val();
  if(value!='Choose...'){
    if(listMajor.indexOf(value)== -1){
      listMajor.push(value);
    }
      htmlListMajor = listMajor.map(value=>{
        return(`<div class="alert blue-btn alert-dismissible border-white fade show col-lg-4" role="alert">
                  ${value}
                  <button type="button" onclick="deleteMajor(this.value)" value='${value}' class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true" >&times;</span>
                  </button>
                </div>`)
      });
      let tmp = "";
      htmlListMajor.forEach(value=>{
        tmp = tmp+ value;
      });
      document.getElementById('listMajor').innerHTML = tmp;
  }
});
deleteMajor = (value)=>{
  var arr = listMajor.filter(val=>{
    return val !==value
  });
  listMajor = arr;
  if(listMajor.length==0){
    $('#inputGroupMajor').val('Choose...');
  }
}