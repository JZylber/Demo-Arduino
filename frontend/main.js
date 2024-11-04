const colorInput = document.getElementById("ledColor");
const colorPreview = document.getElementById("colorPreview");
const estado = document.getElementById("estado");

function selectColor() {
  const color = colorInput.value;
  colorPreview.style.backgroundColor = color;
  postData("colorSeleccionado", color);
}

colorInput.addEventListener("change", selectColor);

function botonApretado(status) {
  if (status.on) {
    estado.innerText = "prendido";
  } else {
    estado.innerText = "apagado";
  }
}

connect2Server();

receive("boton", botonApretado);
