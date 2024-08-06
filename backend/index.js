import { onEvent, startServer } from "soquetic";

onEvent("colorSeleccionado", (color) => {
  console.log("Color seleccionado:", color);
});

startServer();
