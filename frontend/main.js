const colorInput = document.getElementById("ledColor");
const colorPreview = document.getElementById("colorPreview");

function selectColor() {
  const color = colorInput.value;
  colorPreview.style.backgroundColor = color;
}

colorInput.addEventListener("change", selectColor);
