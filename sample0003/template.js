window.onload = function () {
  funcAdd1();
  funcAdd2();
}
function funcAdd1() {
  var $num = parseInt(document.getElementById("sample1").firstChild.nodeValue);
  document.getElementById("sample1").innerHTML = $num + 1;
  if( $num + 1 < 10 ){
    window.setTimeout("funcAdd1()", 1000);
  }
}
function funcAdd2() {
  var $num = parseInt(document.getElementById("sample2").firstChild.nodeValue);
  document.getElementById("sample2").innerHTML = $num + 2;
  if($num + 2 < 20) {
    window.setTimeout("funcAdd2()", 1000);
  }
}
