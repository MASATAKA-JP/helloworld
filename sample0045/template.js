function arrayMax(){
  var $index;
  var $max = this[0];
  for($index = 1; $index<this.length; $index++){
    if($max < this[$index]){
      $max = this[$index];
    }
  }
  return $max;
}
Array.prototype.max = arrayMax;
var $sampleArray = new Array(55, 61, 22, 80, 71);
document.write('配列「' + $sampleArray + '」の');
document.write('最大値は、' + $sampleArray.max());
