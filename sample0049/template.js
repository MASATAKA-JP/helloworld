function naturalSort( $a, $b){
  return $a - $b;
}
var $sampleArray = new Array(3, 12, 8, 21, 1);
document.write('配列「' + $sampleArray + '」を自然ソートすると、');
$sampleArray.sort(naturalSort);
document.write('「' + $sampleArray + '」<br />');
