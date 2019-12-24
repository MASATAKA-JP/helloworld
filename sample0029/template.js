function changeColor( mouse, id ){
  if(mouse == 'over'){
    document.getElementById(id).style.backgroundColor = 'cadetblue';
    document.getElementById(id + '-label').style.color = 'white';
  } else if(mouse == 'out'){
    document.getElementById(id).style.backgroundColor = 'white';
    document.getElementById(id + '-label').style.color = 'black';
  }
}
