function displayList($arr){
  var $list = '<ol>\n';
  $arr.forEach(function ($value, $index){
    $list += '<li>';
    $list += 'value[' + $index + ']' + $value;
    $list += '</li>';
  });
  $list += '</ol>';
  return $list;
}
var $sampleArray = new Array('要素', '要素', '要素', '要素', '要素', '要素');
document.write(displayList($sampleArray));
