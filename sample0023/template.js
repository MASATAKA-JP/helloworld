function formCheck(){
  var flag = 0;
  if(document.Form1.InputText1.value == ""){
    flag = 1;
    document.getElementById('notice-input-text-1').style.display = "block";
    document.getElementById('notice-input-text-2').style.display = "none";
  } else if(! document.Form1.InputText1.value.match(/.+@.+\..+/)){
    flag = 1;
    document.getElementById('notice-input-text-1').style.display = "none";
    document.getElementById('notice-input-text-2').style.display = "block";
  }
  if(flag){
    window.alert('入力内容に不備があります。');
    return false;
  } else {
    document.getElementById('notice-input-text-1').style.display = "none";
    document.getElementById('notice-input-text-2').style.display = "none";
    return true;
  }
}
