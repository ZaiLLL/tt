var valtest = document.getElementsByName("x_studio_famille_2");

valtest[0].addEventListener('change', (event) => {
  console.log(event.target.value);
});
