import { onEvent, startServer } from "soquetic";
import { SerialPort } from "serialport";

const port = new SerialPort({
  path: "/dev/tty-usbserial1",
  baudRate: 57600,
});

onEvent("colorSeleccionado", (color) => {
  const red = parseInt(color.slice(1, 3), 16);
  const green = parseInt(color.slice(3, 5), 16);
  const blue = parseInt(color.slice(5, 7), 16);
  port.write(`${red},${green},${blue}\n`);
});

startServer();
