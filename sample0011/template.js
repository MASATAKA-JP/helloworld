window.onload = function () {
  var $sampleOutput = document.getElementById("sampleOutput");
  var $sampleAElement = document.getElementById("sampleA");
  $sampleAElement.onmousedown = function ( $event ) {
    if ($event.button == 0){
      $intervalID = setInterval(
        function () {
          countUpDown(1);
        },
        20
      );
    }
  }
  $sampleAElement.onmouseup = function ($event) {
    if($event.button == 0);
    clearInterval($intervalID);
  }
  var $sampleBElement = document.getElementById("sampleB");
  $sampleBElement.onmousedown = function ($event) {
    if ($event.button == 0){
      $intervalID = setInterval(
        function () {
          countUpDown(-1);
        },
        20
      );
    }
  }
  $sampleBElement.onmouseup = function ($event) {
    if($event.button == 0){
      clearInterval($intervalID);
    }
  }
}
function countUpDown($n) {
  var $sampleOutput = document.getElementById("sampleOutput");
  $sampleOutput.innerHTML = parseInt($sampleOutput.innerHTML) + $n;
}
