function sampleDrag($event){
  $event.dataTransfer.setData("Text", $event.target.id);
}
function sampleDrop($event, $this){
  $event.preventDefault();
  var $data = $event.dataTransfer.getData("Text");
  $this.appendChild(document.getElementById($data));
}
function sampleAllowDrop($event){
  $event.preventDefault();
}
function sampleChangeBackgroundColor($this, $color){
  $this.style.backgroundColor = $color;
}
