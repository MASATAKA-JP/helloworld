window.onload = changeDisabled;
function changeDisabled(){
  if(document.Form1["number"][3].checked){
    document.Form1["inputNumber"].disabled = false;
  } else {
    document.Form1["inputNumber"].disabled = true;
  }
}
