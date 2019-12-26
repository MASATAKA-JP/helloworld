function funcList(){
  var $arr = Array("項目1", "項目2", "項目3", "項目3", "項目4", "項目5");
  var $list = '<ol>\n';
  for(var $counterVar = 0; $counterVar<$arr.length; $counterVar++){
    $list += '<li>';
    $list += $arr[$counterVar];
    $list += '</li>';
  }
  $list += '</ol>';
  return $list;
}
document.write(funcList());
