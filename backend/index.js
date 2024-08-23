import { onEvent, sendEvent, startServer } from "soquetic";
import { SerialPort } from "serialport";

const port = new SerialPort({
  //Completar con el puerto correcto
  path: "COM3",
  baudRate: 9600,
});

onEvent("colorSeleccionado", (color) => {
  const red = parseInt(color.slice(1, 3), 16);
  const green = parseInt(color.slice(3, 5), 16);
  const blue = parseInt(color.slice(5, 7), 16);
  port.write(`${red},${green},${blue}\n`);
});

port.on("data", function (data) {
  let status = data.toString().trim();
  let ledOn = status === "on";
  sendEvent("boton", { on: ledOn });
});
startServer();
