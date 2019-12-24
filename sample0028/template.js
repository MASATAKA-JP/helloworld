function changeDisabled() {
  if(document.Form1["accept"][1].checked){
    document.Form1["send"].disabled = false;
  } else {
    document.Form1["send"].disabled = true;
  }
}
window.onload = changeDisabled;
