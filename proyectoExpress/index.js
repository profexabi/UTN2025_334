/* Explicacion del codigo

1. Importamos express: Primero traemos la libreria express al archivo

2. Creamos una aplicacion: Llamamos a la funcion express() que devuelve una isntancia de la aplicacion

3. Definir una ruta: Usamos app.get para definir que cuando alguien visita la raiz de nuestro servidor "/", responderemos con un mensaje

4. Escuchar desde un puerto: De igual forma que como hicimos con el servidor http nativo, nuestro servidor express va a estar escuchando en el puerto 3000 y va a estar listo para aceptar conexiones.
*/


// Importamos express
const express = require("express");

// Creamos una aplicacion de Express
const app = express();

// Definimos la ruta principal
app.get("/", (req, res) => {
    res.send("Hola mundo desde Express.js!!!");
});

// Escuchamos en el puerto 3100 y arrancaremos nuestro servidor
let puerto = 3100;
app.listen(puerto, () => {
    console.log(`Servidor express.js corriendo en el puerto ${puerto}`);
})