function appendToTable(){
  var $formObject = document.getElementById("sampleForm");
  var $tableObject = document.getElementById("sampleTable");
  var $tr = "<tr>";
  $tr += "<td>" + $formObject.formName.value + "</td>";
  $tr += "<td>" + $formObject.formArea.value + "</td>";
  $tr += "<td>" + $formObject.formAge.value + "</td>";
  $tr += "<td>" + $formObject.formComent.value + "</td>";
  $tr += "</tr>";
  $tableObject.insertAdjacentHTML("beforeend", $tr);
}
