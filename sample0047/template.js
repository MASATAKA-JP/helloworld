function filteringA($value){
  return ($value >= 50);
}
function filteringB($value){
  if($value < 30){
    return (false);
  } else if($value >= 70){
    return (false);
  } else {
    return (true);
  }
}
var $sampleArray = new Array(43, 14, 55, 89, 31);
document.write('配列は「' + $sampleArray + '」<br />');
var $sampleArrayFilteringA = $sampleArray.filter(filteringA);
document.write('50以上の数値は、「');
document.write($sampleArrayFilteringA + '」<br />');
var $sampleArrayFilteringB = $sampleArray.filter(filteringB);
document.write('30以上70未満の数値は,「');
document.write($sampleArrayFilteringB + '」<br />');
