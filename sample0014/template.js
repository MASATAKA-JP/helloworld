window.onload = function () {
  document.getElementById("sampleA").onclick = function ($event) {
    sampleFn();
    $event.preventDefault();
  };
}
function sampleFn(){
  var $count = document.getElementById("sampleOutput").innerHTML;
  document.getElementById("sampleOutput").innerHTML = ++$count;
}
