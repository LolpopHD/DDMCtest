function DropDownPlanning(){
  document.getElementById("PlanningDrop").classList.toggle("show");
  var open = content
}

window.onclick = function(event) {
  if (!event.target.matches('.Planning')) {

    var dropdowns = document.getElementsByClassName("PlanningContent");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
