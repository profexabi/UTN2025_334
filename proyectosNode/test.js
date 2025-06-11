//////////////
// Node.js //

////////////////////
// Importaciones //
// Para usar y trabajar con un modulo, primero tenemos que importarlo
// Cada vez que usamos require() lo que hacemos es improtar un modulo para poder usar sus funciones en nuestro archivo actual

let fs = require("fs"); // Importar (traer una funcionalidad) el modulo de sistema de archivos (File System o fs)

let path = require("path"); // El modulo path nos ayuda a manejar y manipularrutas de archivos y directorios de forma mas segura y comoda

let os = require("os"); // El modulo os (Operative System) nos permite obtener informacion del sistema operativo en el que estamos ejecutando Node.js (obtener cantidad de memoria libre disponible o tipo de sistema operativo)

// Aca estamos trayendo el codigo que exportamos en saluda.js
// Esto nos ayuda a organizar mejor nuestro codigo, evitando que tdoo este en un solo archivo y permitiendo que podamos reutilizar funciones o clases en diferentes parets de nuestro proyecto
let saludar = require("./saluda.js");


// Ejemplo con el modulo file system
fs.readFile("mensaje.txt", "utf-8", (err, data) => {
    if (err)  {
        console.log("Ocurrio un error!:", err);
        return;
    }

    console.log("Contenido del archivo:", data);
});


// Ejemplo con el modulo path
let rutaArchivo = "/home/usuario/proyectos/archivo.txt";
let nombreArchivo = path.basename(rutaArchivo); // el metodo basename nos permite obtener solo el nombre del archivo de la ruta completa
console.log(nombreArchivo);


let memoriaLibre = os.freemem(); // Obtener la memoria libre en bytes
let tipoSistema = os.type(); // Obtener el tipo de sistema operativo

console.log("Memoria libre:", memoriaLibre);
console.log("Tipo de sistema operativo:", tipoSistema);


// Vamos a usar la funcion que definimos en saluda.js
console.log(saludar("Gabi"));