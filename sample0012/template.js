window.onload = function () {
  var $sampleOutput = document.getElementById("sampleOutput");
  var $sampleAElements = document.getElementsByClassName("sampleA");
  for (var $i = 0; $i < $sampleAElements.length; $i++){
    $sampleAElements[$i].onclick = function () {
      $sampleOutput.innerHTML = parseInt($sampleOutput.innerHTML) + 1;
    }
  }
  var $sampleBElements = document.getElementsByClassName("sampleB");
  for(var $i = 0; $i < $sampleBElements.length; $i++){
    $sampleBElements[$i].onclick = function () {
      $sampleOutput.innerHTML = parseInt($sampleOutput.innerHTML) - 1;
    }
  }
}
