window.onload = initialize;
function initialize() {
  document.getElementById("sample").onmousemove = funcAdd1;
}
function funcAdd1() {
  document.getElementById("sample").innerHTML = parseInt(document.getElementById("sample").firstChild.nodeValue) + 1;
}
