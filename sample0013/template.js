window.onload = function () {
  document.getElementById("sampleA").onclick = function () {
    sampleFn();
  };
}
function sampleFn(){
  var $count = document.getElementById("sampleOutput").innerHTML;
  document.getElementById("sampleOutput").innerHTML = ++$count;
}
