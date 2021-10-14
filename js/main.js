// BÀI TẬP 1
function xuatSo () {
  var a = document.getElementById('b1Num1').value
  var b = document.getElementById('b1Num2').value
  var c = document.getElementById('b1Num3').value
  var num1 = parseFloat(a)
  var num2 = parseFloat(b)
  var num3 = parseFloat(c)
  if (num1 > num2 && num1 > num3 && num2 > num3) {
    document.getElementById('xuatTxt').innerHTML =
      num3 + '<' + num2 + '<' + num1
  } else if (num1 > num2 && num1 > num3 && num2 < num3) {
    document.getElementById('xuatTxt').innerHTML =
      num2 + '<' + num3 + '<' + num1
  } else if (num1 > num2 && num1 < num3 && num2 < num3) {
    document.getElementById('xuatTxt').innerHTML =
      num2 + '<' + num1 + '<' + num3
  } else if (num2 > num1 && num2 > num3 && num1 > num3) {
    document.getElementById('xuatTxt').innerHTML =
      num3 + '<' + num1 + '<' + num2
  } else if (num2 > num1 && num2 > num3 && num3 > num1) {
    document.getElementById('xuatTxt').innerHTML =
      num1 + '<' + num3 + '<' + num2
  } else {
    document.getElementById('xuatTxt').innerHTML =
      num1 + '<' + num2 + '<' + num3
  }
}
document.getElementById('btnXuatSo').onclick = xuatSo


// BÀI TẬP 2
function guiLoiChao(){
    var luaChon = document.getElementById("luachon").value;
    if (luaChon == 1) {
        document.getElementById("txtchao").innerHTML = "Xin Chào Bố!"
    } else if (luaChon == 2 ){
        document.getElementById("txtchao").innerHTML = "Xin Chào Mẹ!"
    } else if (luaChon == 3){
        document.getElementById("txtchao").innerHTML = "Xin Chào Anh Trai!"
    } else if (luaChon == 4){
        document.getElementById("txtchao").innerHTML = "Xin Chào Em Gái!"
    } else {
        document.getElementById("txtchao").innerHTML = "Xin Chào Người Lạ!"
    }
}
document.getElementById('btnchao').onclick = guiLoiChao


// BÀI TẬP 3
function DemChanLe() {
  var num1 = Number(document.getElementById("b3Num1").value);
  var num2 = Number(document.getElementById("b3Num2").value);
  var num3 = Number(document.getElementById("b3Num3").value);
  var count = 0;
  if(num1 % 2 == 0){
    count+=1;
  }
  if(num2 % 2 == 0){
    count+=1;
  }
  if(num3 % 2 == 0){
    count+=1;
  }
  document.getElementById("txtDem").innerHTML = "Số chẵn: " + count + "</br>" + "Số lẻ: " + (3 - count);
}
document.getElementById("btnDem").onclick = DemChanLe;

//BÀI TẬP 4
function duDoan(){
  var a = Number(document.getElementById("b4Num1").value);
  var b = Number(document.getElementById("b4Num2").value);
  var c = Number(document.getElementById("b4Num3").value);
  if (a == b && a == c && b == c){
    document.getElementById("txtB4").innerHTML = "Hình tam giác đều"
  } else if (a == b || a == c || b == c){
    document.getElementById("txtB4").innerHTML = "Hình tam giác cân"
  } else if ((a*a == b*b + c*c) || (b*b == a*a + c*c) || (c*c == a*a + b*b)){
    document.getElementById("txtB4").innerHTML = "Hình tam giác vuông"
  } else {
    document.getElementById("txtB4").innerHTML = "Hình tam giác khác"
  }
}
document.getElementById("btnB4").onclick = duDoan;