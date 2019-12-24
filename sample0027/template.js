function changeDisplay() {
  if(document.Form1["number"][3].checked){
    document.Form1["inputNumber"].disabled = false;
    document.getElementById("input-number").style.display = "inline";
  } else {
    document.Form1["inputNumber"].disabled = true;
    document.getElementById("input-number").sytle.display = "none";
  }
}
window.onload = changeDisplay;
