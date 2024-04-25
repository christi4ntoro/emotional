function doGet(e) {
  var x = HtmlService.createTemplateFromFile("index");
  var y = x.evaluate();
  var z = y.setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
  return z;
}

function processForm(formData) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  sheet.appendRow(formData);
}

function title(){ 
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var a1= sheet.getRange(2,4).getValue();
  return a1;
}

function question(){ 
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var a1= sheet.getRange(2,5).getValue();
  return a1;
}

function answer (name,slider) {
  const book=SpreadsheetApp.getActiveSpreadsheet();
  const sheet=book.getActiveSheet();
  sheet.appendRow([name,slider]);
}