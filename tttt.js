$(document).ready(function() {
    alert("LOAD !");
});
const elements = document.getElementsByName("x_studio_famille_2");

elements[0].addEventListener('change', (event) => {
  alert('Val' + event.target.value);
});
