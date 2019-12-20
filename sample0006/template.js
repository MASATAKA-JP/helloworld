window.onload = initialize;
function initialize() {
  document.getElementById("funcAdd1").ondblclick = funcAdd1;
  document.getElementById("funcAdd2").ondblclick = funcAdd2;
}
function funcAdd1() {
  document.getElementById("sample").innerHTML = parseInt(document.getElementById("sample").firstChild.nodeValue) + 1;
}
function funcAdd2() {
  document.getElementById("sample").innerHTML = parseInt(document.getElementById("sample").firstChild.nodeValue) + 2;
}
