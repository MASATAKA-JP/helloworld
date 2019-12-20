var $count = 1;
window.onload = function () {
  document.getElementById("sampleButton").onclick = function () {
    sample("サンプル", $count++);
  };
}
function sample ($text, $c) {
  var $sampleOutput = document.getElementById("sampleOutput");
  $sampleOutput.innerHTML = $text + $c;
}
