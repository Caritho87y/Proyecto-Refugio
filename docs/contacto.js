// VALIDACION FORMULARIO

var error = document.getElementById("error");

const NameValid = /^[a-zA-Z\s]+$/;
const digit = /\d/;
const email = /(@)(.+)$/;

function enviarFormulario() {
  console.log("enviando formulario");
  var mensajeError = [];

  // NOMBRE
  if (nombre.value === null || nombre.value === "") {
    mensajeError.push("Ingresar nombre");
  } else if (!NameValid.test(nombre.value)) {
    mensajeError.push("'Nombre' debe tener solo letras");
  }

  // TELEFONO
  if (telefono.value === null || telefono.value === "") {
    mensajeError.push("ingresar telefono");
  } else if (!digit.test(telefono.value)) {
    mensajeError.push("'Telefono' debe tener solo números");
  }

  // CORREO
  if (correo.value === null || correo.value === "") {
    mensajeError.push("ingresar correo");
  } else if (!email.test(correo.value)) {
    mensajeError.push("'Correo'debe ser válido");
  }

  // MENSAJE
  if (mensaje.value === null || mensaje.value === "") {
    mensajeError.push("ingresar mensaje");
  }

  error.innerHTML = mensajeError.join(", ");
  return false;
}
