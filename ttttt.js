$(document).ready(function() {
    alert("LOAD !");
});
let element = document.getElementsByName("x_studio_famille_2");

element[0].addEventListener('change', (event) => {
  alert('Val' + event.target.value);
});
