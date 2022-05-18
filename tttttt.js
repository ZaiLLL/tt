$(document).ready(function() {
    alert("LOAD !");
});
let valtest = document.getElementsByName("x_studio_famille_2");

valtest[0].addEventListener('change', (event) => {
  alert('Val' + event.target.value);
});
