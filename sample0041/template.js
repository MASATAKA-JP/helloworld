window.onload = function () {
  document.getElementById("sample").innerHTML = displayList($sampleArray);
}
function displayList($arr){
  $list = '<ol>\n';
  $arr.forEach(function($value, $index){
    $list += '<li>';
    $list += 'value[' + $index + ']' + $value;
    $list += '</li>';
  });
  $list += '</ol>';
  return $list;
}
var $sampleArray = new Array("項目", "項目", "項目", "項目", "項目");
