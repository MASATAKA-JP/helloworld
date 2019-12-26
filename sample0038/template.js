window.onload = function(){
  document.getElementById('sample').innerHTML = funcList();
}
function funcList(){
  var $arr = new Array(
    ["項目", "項目", "項目"],
    ["項目", "項目", "項目"],
    ["項目", "項目", "項目"],
    ["項目", "項目", "項目"],
    ["項目", "項目", "項目"]
  );
  var $list = '<ol>\n';
  for(var $counterVarA=0; $counterVarA<$arr.length; $counterVarA++){
    $list += "<li>";
    $list += "<ol>";
    for(var $counterVarB=0; $counterVarB<$arr[$counterVarA].length; $counterVarB++){
      $list += '<li>';
      $list += $arr[$counterVarA][$counterVarB];
      $list += '</li>';
    }
    $list += '</ol>';
    $list += '</li>\n';
  }
  $list += '</ol>';
  return $list;
}
