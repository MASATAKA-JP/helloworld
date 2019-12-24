function formCheck(){
  var flag = 0;
  var input_text_1_length = document.Form1.InputText1.value.length;
  if(input_text_1_length<6){
    flag = 1;
    document.getElementById('notice-input-text-1').innerHTML = 6 - input_text_1_length + "文字不足してます。";
    document.getElementById('notice-input-text-1').style.display = "block";
  }
  if(input_text_1_length>20){
    flag = 1;
    document.getElementById('notice-input-text-1').innerHTML = input_text_1_length - 20 + "文字オーバーしてます。";
    document.getElementById('notice-input-text-1').style.display = "block";
  }
  if(flag){
    window.alert('入力内容に不備があります。');
    return false;
  } else {
    document.getElementById('notice-input-text-1').style.display = "none";
    return true;
  }
}
