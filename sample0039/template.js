window.onload = function () {
  document.getElementById('sample').innerHTML = funcList("項目", "項目", "項目", "項目", "項目");
}
function funcList($args){
  var $list = '<ol>\n';
  for(var $counterVar = 0; $counterVar<arguments.length; $counterVar++){
    $list += '<li>';
    $list += arguments[$counterVar];
    $list += '</li>\n';
  }
  $list += '</ol>';
  return $list;
}
