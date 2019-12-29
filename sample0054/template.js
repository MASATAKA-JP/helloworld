var message = new Array(
  '日曜日のメッセージ',
  '月曜日のメッセージ',
  '火曜日のメッセージ',
  '水曜日のメッセージ',
  '木曜日のメッセージ',
  '金曜日のメッセージ',
  '土曜日のメッセージ'
);
var now = new Date();
var week = now.getDay();
function weeklyMessage(){
  document.getElementById('weekly-message').innerHTML = message[week];
}
window.onload = weeklyMessage;
