var message = new Array(
  '1月のメッセージ',
  '2月のメッセージ',
  '3月のメッセージ',
  '4月のメッセージ',
  '5月のメッセージ',
  '6月のメッセージ',
  '7月のメッセージ',
  '8月のメッセージ',
  '9月のメッセージ',
  '10月のメッセージ',
  '11月のメッセージ',
  '12月のメッセージ',
);
var now = new Date();
var month = now.getMonth();
function monthlyMessage(){
  document.getElementById('monthly-message').innerHTML = message[month];
}
window.onload = monthlyMessage;
