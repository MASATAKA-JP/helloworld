function sampleLtoR(){
  var $getItems = document.getElementById("sampleListA").children;
  var $sampleListB = document.getElementById("sampleListB");
  $sampleListB.appendChild($getItems[0]);
}
function sampleRtoL(){
  var $getItems = document.getElementById("sampleListB").children;
  var $sampleListA = document.getElementById("sampleListA");
  $sampleListA.appendChild($getItems[0]);
}
