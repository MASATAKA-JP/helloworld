window.onload = function (){
  var $sampleTable = document.getElementById("sample");
  var $sampleColgroup = $sampleTable.getElementsByTagName("colgroup");
  var $sampleTHeadCells = $sampleTable.tHead.rows[0].cells;
  var $sampleTFootCells = $sampleTable.tFoot.rows[0].cells;
  var $sampleRows = $sampleTable.rows;

  for(var $rowIndex = 0; $rowIndex<$sampleRows.length; $rowIndex++){
    var $sampleCells = $sampleRows[$rowIndex].cells;
    for(var $cellIndex = 0; $cellIndex<$sampleCells.length; $cellIndex++){
      $sampleCells[$cellIndex].onmouseover = function () {
        changeBackgroundColor($sampleColgroup[this.cellIndex], "yellow");
        changeBackgroundColor($sampleTHeadCells[this.cellIndex], "yellow");
        changeBackgroundColor($sampleTFootCells[this.cellIndex], "yellow");
      };
      $sampleCells[$cellIndex].onmouseout = function () {
        changeBackgroundColor($sampleColgroup[this.cellIndex], "");
        changeBackgroundColor($sampleTHeadCells[this.cellIndex], "");
        changeBackgroundColor($sampleTFootCells[this.cellIndex], "");
      };
    }
  }
}

function changeBackgroundColor($elementReference, $color){
  $elementReference.style.backgroundColor = $color;
}
