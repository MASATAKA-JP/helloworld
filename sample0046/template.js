function arrayMin(){
  var $index;
  var $min = this[0];
  for($index=0; $index<this.length; $index++){
    if($min > this[$index]){
      $min = this[$index];
    }
  }
  return $min;
}
Array.prototype.min = arrayMin;
var $sampleArray = new Array(55, 61, 22, 80, 71);
document.write('配列「' + $sampleArray + '」の');
document.write('最小値は' + $sampleArray.min() );
