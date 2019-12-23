window.onload = function () {
  var $sampleAnchors = document.getElementById("sample").getElementsByTagName("a");
  for(var $i=0; $i<$sampleAnchors.length; $i++){
    $sampleAnchors[$i].onclick = function () {
      if(this.href.match(/#$/)){
        sampleFn();
        return false;
      }
    }
  };
}
function sampleFn(){
  var $count = document.getElementById("sampleOutput").innerHTML;
  document.getElementById("sampleOutput").innerHTML = ++$count;
}
