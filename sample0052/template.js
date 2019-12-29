function digitalClock(){
  var now = new Date();
  document.getElementById('digital-clock').innerHTML = now.toLocaleString();
  window.setTimeout("digitalClock()", 1000);
}
window.onload = digitalClock;
