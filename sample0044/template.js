function sumElements($previousValue, $currentValue){
  return $previousValue + $currentValue;
}
var $sampleArray = new Array(1, 2, 3, 4, 5);
document.write('配列「' + $sampleArray + '」の内容を合計すると');
var $sum = $sampleArray.reduce(sumElements);
document.write('「' + $sum + '」');
