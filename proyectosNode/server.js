/* Explicacion de nuestro servidor

1. Importamos el modulo http: Esto nos da acceso a todas las funcionalidades necesarias para crear un servidor

2. Crear un servidor: Usamos el metodo http.createServer para definir un servidor que ESCUCHE las solicitudes de los clientes y les responda

3. Respuesta del servidor: El servidor siempre respondera con el mensaje 'Hola mundo desde un servidor en Node.js!!!'

4. Escuchar en un puerto: Nuestro servidor se ejecuta en el puerto 3000 y muestra un mensaje en la consola cuando esta listo
*/


// Importamos el modulo HTTP que nos permite crear un servidor web sin necesidad de instalar nada adicional
const http = require("http");


// Creamos el servidor
const servidor = http.createServer((req, res) => {

    // Configurar la respuesta de nuestro nuevo servidor Node.js
    res.statusCode = 200; // Codigo 200 significa que la peticion fue exitosa

    res.setHeader("Content-type", "text/plain"); // Indicamos que vamos a responder con texto (plano)

    res.end("Hola mundo desde un servidor en Node.js!!!");
});


// Definimos el puerto y arrancamos el servidor
const puerto = 3000;

servidor.listen(puerto, () => {
    console.log(`Servidor corriendo en http://localhost:${puerto}`);
});