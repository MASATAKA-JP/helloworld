window.onload = initialize;
function initialize() {
  document.getElementById("colorSelectorRed").onmouseover = changeRed;
  document.getElementById("colorSelectorBlue").onmouseover = changeBlue;
  document.getElementById("colorSelectorGreen").onmouseover = changeGreen;
  document.getElementById("colorSelectorRed").onmouseout = changeGray;
  document.getElementById("colorSelectorBlue").onmouseout = changeGray;
  document.getElementById("colorSelectorGreen").onmouseout = changeGray;
}
function changeGray() {
  document.getElementById("changeBackgroundColor").style.backgroundColor = "gray";
}
function changeRed() {
  document.getElementById("changeBackgroundColor").style.backgroundColor = "red";
}
function changeBlue() {
  document.getElementById("changeBackgroundColor").style.backgroundColor = "blue";
}
function changeGreen() {
  document.getElementById("changeBackgroundColor").style.backgroundColor = "green";
}
