# Demo Arduino

Esta es una demo de SoqueTIC utilizado para enviar y recibir mensajes de un arduino a una web frontend.

## Frontend

Para correr el frontend, alcanza con abrir `index.html` en cualquier browser.

## Arduino

Para correr el arduino, hay que armar el circuito tal cual está provisto y enchufarlo a la máquina que va a ejecutar el backend.

## Backend

Para ejecutar el backend, hay que: 

1) instalar las dependencias del proyecto: `npm install`
2) conectar el arduino
3) escribir en el `path` del `port` el puerto en donde se conectó el arduino (en `index.js`).
4) iniciar el proyecto: `npm run dev`