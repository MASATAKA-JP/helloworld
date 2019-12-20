window.onload = function () {
  var $getListAItems = document.getElementById("sampleListA").children;
  for( var $i=0; $i<$getListAItems.length; $i++){
    $getListAItems[$i].onclick = function() {
      sample( this.innerHTML);
    };
  }
}
function sample($colorName) {
  var $sampleListB = document.getElementById("sampleBoxB");
  $sampleListB.style.backgroundColor = $colorName;
}
