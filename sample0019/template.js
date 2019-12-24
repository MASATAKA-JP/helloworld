function formCheck(){
  if(document.Form1.InputText1.value == ""){
    var flag = 1;
    document.getElementById('notice-input-text-1').style.display = "block";
  } else {
    document.getElementById('notice-input-text-1').style.display = "none";
  }
  if(document.Form1.Textarea1.value == ""){
    flag=1;
    document.getElementById('notice-textarea-1').style.display = "block";
  } else {
    document.getElementById('notice-textarea-1').style.display = "none";
  }
  if(flag){
    window.alert('必須項目は入力して下さい');
    return false;
  } else {
    return true;
  }
}
