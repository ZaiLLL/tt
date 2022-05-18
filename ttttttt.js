$(document).ready(function() {
    alert("LOAD !");
});
var valtest = document.getElementsByName("x_studio_famille_2");

valtest[0].addEventListener('change', (event) => {
  alert('Val' + event.target.value);
});
