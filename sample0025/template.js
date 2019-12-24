function confirmRest(){
  var flag = confirm('リセットしてよろしいですか？');
  if(flag){
    document.getElementById('reset-result').style.display = "inline";
    setTimeout("nonDisplayTimer()", 2000);
    return true;
  } else {
    return false;
  }
}
function nonDisplayTimer(){
  document.getElementById('reset-result').style.display = "none";
}
