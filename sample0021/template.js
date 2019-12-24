function formCheck(){
  var flag = 0;
  if(document.Form1.InputText1.value.match(/[^0-9a-xA-Z]+/)){
    flag = 1;
    document.getElementById('notice-input-text-1').style.color = "red";
    document.getElementById('notice-input-text-1').style.backgroundColor = "yellow";
  } else {
    document.getElementById('notice-input-text-1').style.color = "";
    document.getElementById('notice-input-text-1').style.backgroundColor = "";
  }
  if(flag){
    window.alert('入力に不備があります。');
    return false;
  } else {
    return true;
  }
}
