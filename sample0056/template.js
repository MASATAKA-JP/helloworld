var $text, $textCurrent, $counter;
window.onload = function () {
  $text = document.getElementById("sample").firstChild.nodeValue;
  displayOneByOne();
}
function displayOneByOne(){
  $textCurrent = document.getElementById("sample").firstChild.nodeValue;
  if( $textCurrent.length == $text.length){
    document.getElementById("sample").innerHTML = '';
    $counter = 0;
  }
  document.getElementById("sample").innerHTML = $text.substr(0, ++$counter) + '<br/>';
  setTimeout("displayOneByOne()", 500);
}
