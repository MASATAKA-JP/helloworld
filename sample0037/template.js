window.onload = function () {
  document.getElementById("sample").innerHTML = funcList();
}
function funcList(){
  var $arr = Array("項目", "項目", "項目", "項目", "項目");
  var $list = '<ol>\n';
  for(var $counterVar=0; $counterVar<$arr.length; $counterVar++){
    $list += '<li>';
    $list += $arr[$counterVar];
    $list += '</li>';
  }
  $list += '</ol>';
  return $list;
}
