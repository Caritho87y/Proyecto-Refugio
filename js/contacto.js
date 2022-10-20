
// VALIDACION ANIMACION INPUTS
let inputs = document.getElementsByClassName("form_input");

for (let i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener("keyup", function () {
    if (this.value.length >= 1) {
      this.nextElementSibling.classList.add("fijar");
    } else {
      this.nextElementSibling.classList.remove("fijar");
    }
  });
}

//VALIDACION DE DATOS DE LOS INPUT