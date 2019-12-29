function toOneDimension($previousValue, $currentValue){
  return $previousValue.concat($currentValue);
}
var $sampleArrayA = [
  ['A1', 'A2', 'A3'],
  ['B1', 'B2', 'B3'],
  ['C1', 'C1', 'C3']
];
var $sampleArrayB = $sampleArrayA.reduce(toOneDimension);
for(var $counterVar = 0; $counterVar<$sampleArrayB.length; $counterVar++){
  document.write('$sampleArrayB[' + $counterVar + ']');
  document.write($sampleArrayB[$counterVar]);
  document.write('<br/>');
}
document.write($sampleArrayB);
