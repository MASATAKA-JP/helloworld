var message = new Array(
  '0時台のメッセージ',
  '1時台のメッセージ',
  '2時台のメッセージ',
  '3時台のメッセージ',
  '4時台のメッセージ',
  '5時台のメッセージ',
  '6時台のメッセージ',
  '7時台のメッセージ',
  '8時台のメッセージ',
  '9時台のメッセージ',
  '10時台のメッセージ',
  '11時台のメッセージ',
  '12時台のメッセージ',
  '13時台のメッセージ',
  '14時台のメッセージ',
  '15時台のメッセージ',
  '16時台のメッセージ',
  '17時台のメッセージ',
  '18時台のメッセージ',
  '19時台のメッセージ',
  '20時台のメッセージ',
  '21時台のメッセージ',
  '22時台のメッセージ',
  '23時台のメッセージ'
);
var now = new Date();
var hour = now.getHours();
function hourlyMessage(){
  document.getElementById('hourly-message').innerHTML = message[hour];
}
window.onload = hourlyMessage;
