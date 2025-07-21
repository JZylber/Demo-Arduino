import { subscribePOSTEvent, realTimeEvent, startServer } from "soquetic";
import { ReadlineParser, SerialPort } from "serialport";

const port = new SerialPort({
  //Completar con el puerto correcto
  path: "/dev/cu.usbserial-130",
  baudRate: 9600,
});

const parser = new ReadlineParser();
port.pipe(parser);

port.on("open", () => {
  console.log("Puerto serial abierto");
});

subscribePOSTEvent("colorSeleccionado", (color) => {
  const red = parseInt(color.slice(1, 3), 16);
  const green = parseInt(color.slice(3, 5), 16);
  const blue = parseInt(color.slice(5, 7), 16);
  port.write(`${red},${green},${blue}\n`);
});

parser.on("data", function (status) {
  let ledOn = status.trim() === "on";
  realTimeEvent("boton", { on: ledOn });
});
startServer();
