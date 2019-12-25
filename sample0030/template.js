function onload(){
  for(num=0; num<document.Form1.music.length; num++){
    if(document.Form1["music"][num].checked){
      document.getElementById('radio-' + num).style.backgroundColor = 'aquamarine';
      document.getElementById('radio-' + num + '-label').style.color = 'black'
    }
  }
}
window.onload = onload;
function changeColor(mouse,id){
  if(mouse == 'over'){
    document.getElementById(id).style.backgroundColor = 'cadetblue';
    document.getElementById(id + '-label').style.color = 'white';
  } else if(mouse == 'out'){
    for(num=0; num<document.Form1.music.length; num++){
      if(document.Form1['music'][num].checked){
        var checked = 'radio-' + num;
      } else {
        document.getElementById('radio-' + num).style.backgroundColor = 'white';
        document.getElementById('radio-' + num + '-label').style.color = 'black';
      }
    }
    if(id==checked){
      document.getElementById(id).style.backgroundColor = aquamarine;
      document.getElementById(id+'-label').sytle.color = 'black';
    }
  }
}
