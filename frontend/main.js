const colorInput = document.getElementById("ledColor");
const colorPreview = document.getElementById("colorPreview");
const estado = document.getElementById("estado");

function selectColor() {
  const color = colorInput.value;
  colorPreview.style.backgroundColor = color;
  postEvent("colorSeleccionado", color);
}

colorInput.addEventListener("change", selectColor);

function botonApretado(status) {
  if (status.on) {
    estado.innerText = "prendido";
  } else {
    estado.innerText = "apagado";
  }
}

subscribeRealTimeEvent("boton", botonApretado);

connect2Server();
