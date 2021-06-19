var language = "vietnamese";
var url = "translation.xlsx";

/* set up async GET request */
var req = new XMLHttpRequest();
req.open("GET", url, true);
req.responseType = "arraybuffer";
var diction;
req.onload = function(e) {
  var data = new Uint8Array(req.response);
  var workbook = XLSX.read(data, {type:"array"});
  var first_sheet_name = workbook.SheetNames[0];
  var sheet = workbook.Sheets[first_sheet_name];
 diction = XLSX.utils.sheet_to_json(sheet);
  /* DO SOMETHING WITH workbook HERE */
 //diction = Object.keys(diction).map((key) => {"English": });
 diction =  Object.values(diction);
 diction = diction.sort((a,b) => -a["Vietnamese"].length + b["Vietnamese"].length);
}

req.send();