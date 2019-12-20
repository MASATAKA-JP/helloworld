window.onload = initialize;
function initialize() {
  document.getElementById("funcAdd1").onclick = funcAdd1;
  document.getElementById("funcAdd2").onclick = funcAdd2;
}
function funcAdd1() {
  document.getElementById("sample").innerHTML = parseInt(document.getElementById("sample").firstChild.nodeValue) + 1;
}
function funcAdd2() {
  document.getElementById("sample").innerHTML = parseInt(document.getElementById("sample").firstChild.nodeValue) + 2;
}
