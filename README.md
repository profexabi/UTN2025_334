# UTN2025_334 :books:
Repositorio de la TUP UTN 2025, Comision 334

---


## JavaScript VIII
```js
//////////////////////
// JavaScript VIII //
// JSON, asincronia, promesas, fetch, async/await y try/catch

///////////
// JSON //
/* 
JavaScript Object Notation o JSON es un formato ligero de intercambio de datos que es el estandar para la comunicacion entre aplicaciones en la web.
Si bien se basa en la notacion de objetos de JavaScript, es independiente de lenguaje y ampliamente utilizado en todo tipo de sistemas y lenguajes de programacion.
Es facil de leer, ligero, facil de parsear y generar e independiente del lenguaje.

JSON es un formato de texto que representa datos estructurados basados en dos estructuras fundamentales

    1. Coleccion de pares nombre/valor (equivalente a un objeto en JavaScript)
    2. Lista ordenada de valores (equivalente a un array en JavaScript)

{
    "nombre": "Juan Perez",
    "edad": 30,
    "esEstudiante": false,
    "direccion": {
        "calle": "Cochabamba 1614, 2o piso del lado de la sombra",
        "ciudad": "CABA"
    },
    "telefonos" : ["1111-2345", "2222-3456"]
}


// Reglas de sintaxis_____

    - Los datos estan en pares nombre/valor (clave/valor)
    - Los datos estan separados por comas
    - Las llaves {} representan objetos
    - Los corchetes [] represetan arrays
    - Las comillas dobles "" son obligatorias para nombres de propiedades y strings


// Tipos de datos_______
    1. Strings: "texto" (siempre con comillas dobles)
    2. Numbers: 42 o 3.1416
    3. Booleans: true o false
    4. Null: representa un valor nulo
    5. Objects: {"clave": "valor"}
    6. Arrays: ["valor1", "valor2"]


// JSON vs Objectos JavaScript

    - Comillas: Siempre dobles en JSON, en JS pueden ser simples o dobles
    - Valores de texto: Siempre entre comillas, en JS puede estar sin comillas
    - Funciones: No estan permitidas en JSON, en JS son permitidas
    - Fechas: No soportadas directamente, en JS tienen soporte nativo
    - Comentarios: No permitidos en JSON, en JS si son permitidos


Para que usaremos JSON?
    -   Usaremos JSON para la comunicacion cliente-servidor 

    -   Almacenamiento local para guardar datos en el navegador

-   -   Para configuraciones, ya que muchas herramientas usan JSON para configuraciones como package.json en Node.js
*/

// JSON.stringify() permite convertir un objeto JavaScript a una cadena JSON
let usuario = {
    nombre: "Gabi",
    edad: 22,
    habilidades: ["HTML", "CSS", "JavaScript"]
};
console.log(usuario);

let jsonUsuario = JSON.stringify(usuario);
console.log(jsonUsuario);


// JSON.parse nos permite convertir una cadena JSON a un objeto JS
let estudiante = `
    {
        "nombre": "Juan Perez",
        "edad": 30,
        "esEstudiante": false,
        "direccion": {
            "calle": "Cochabamba 1614, 2o piso del lado de la sombra",
            "ciudad": "CABA"
        },
        "telefonos" : ["1111-2345", "2222-3456"]
    }
`;

console.log(estudiante);

let objetoEstudiante = JSON.parse(estudiante);
console.log(objetoEstudiante);
console.log(objetoEstudiante.nombre);


///////////////////////////////
// Asincronia en JavaScript //
/*
Es la capacidad de un programa de ejecutar tareas que toman tiempo (acceder a una API, esperar a un temporizador) sin bloquear la ejecucion del resto del codigo

En JavaScript es clave porque es un lenguaje de un solo hilo (single-threaded), por lo que podemos ejecutar solo una tearea a la vez. Pero para evitar que el hilo principal de ejecucion se bloquee, usaremos mecanimos asincronicos para delegar operaciones que tomaran tiempo y continuar ejecutando el resto del codigo mientras esas tareas se completan.


// Herramientas de JavaScript para asincronia
- Callbacks: funciones que se pasan como argumento para ejecutarse despues de completar una operacion

- Promises: Objeto que representa un valor que puede estar disponible ahora, en el futuro o nunca
    Estados: pending, fulfilled, rejected


Diferencias entre fetch() y Promesas
    - fetch es una funcion WebAPI que devuelve una promesa
    - Promesa es un objeto nativo de JS que puede ser usada en fetch

    - fetch() es una funcion para hacer peticiones HTTP
    - Promesa es un objeto para manejar resultados asincronicos

    - fetch() devuelve una promesa
    - Promesa devuelve un valor, exito o error futuro

*/

// Ejemplo Promise
let promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Datos listos!");
    }, 2000);
});

promesa.then(data => console.log(data));



//////////////
// fetch() //
/*
- fetch() es una funcion incorporada en los navegadores modernos que permite realizar peticiones HTTP de forma asincronica utilizando promesas

- Es parte de las Web APIs prooporcionadas por el navegador

- Fue introducida como parte del Fetch API para reemplazar al viejo XMLHttpRequest


Caracteristicas tecnicas
    - Devuelve un objeto Promise, que se resuelve con un objeto Response
    - Usa el estandar HTTP: metodos como GET, POST, PUT y DELETE
    - Funcion bien con async/await
    - Es mas limpia y moderna que XMLHttpRequest
    - Soporta CORS, cabeceras, envio de JSON, etc


Sintaxis
Parametros:
    - url: string, se refiere a la URL donde estamos haciendo la solicitud
    
    - options: OPCIONAL, es un objeto que especifica configuracion adicional, como metodos (method), cabeceras (headers), cuerpo (body)

fetch(url, options)
    .then(response => {
        // respuesta cruda del sewrvidor
    })
    .catch(error => {
        // error de red o fallo total
    })


Casos de uso comunes
    - Consumir APIs REST (obtener datos de usuarios, productos, etc)
    - Enviar formularios con POST
    - Cargar contenido dinamico en una SPA (Single Page Application)
    - Interacciones cliente-servidor en tiempo real
*/

// Ejemplo completo de fetch con GET

fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => {
        if (!response.ok) {
            throw new Error("Error HTTP: " + response.status);
        }
        return response.json(); // Transformamos a objeto JS
    })
    .then(data => {
        console.log("Usuarios:", data);
    })
    .catch(error => {
        console.error("Error al obtener los datos:", error);
    });

// TODO, ver ejemplo con opciones POST cuando veamos protocolo HTTP y arquitectura cliente-servidor

/* El objeto Response
La promesa devuelta por fetch() se resuelve con un objeto Response que tiene
    .ok             booleano (true si status esta entre 200 y 299)
    .status         codigo HTTP (200, 299, 404)
    .statusText     texto del estado("OK", "not found")
    .headers        cabeceras HTTP de la respuesta
    .json()         para leer el contenido de la respuesta
*/

async function cargarUsuarios() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/users");

        if(!response.ok) throw new Error("Error HTTP: " + response.status);

        let data = await response.json();

        console.log("Usuarios:", data);

    } catch(error) {
        console.error("Error al obtener datos", error);
    }
}


// TODO, falta repasar async/await y manejo de errores con try/catch
// Luego saltar a Node.js
```

---

## [JavaScript VII](https://youtu.be/vsaXOvH8LbI)
```js
/////////////////////
// JavaScript VII //
// High order functions, destructuring, spread operator, closures, funciones anidadas, callbacks y web APIs


///////////////////////////
// High order functions //
/*
Las HOF o Funciones de orden superior son funciones que pueden hacer al menos una de estas dos cosas

1. Recibir una o mas funciones como argumentos
2. Devolver una funcion como resoltado

Las HOF operan sobre otras funciones, ya sea tomandolas como parmetros o retornandolas. JavaScript le da una importancia primaria a las funciones, considerandolas `ciudadanos de primera clase`, `first-class citizens`, lo que significa que podemos hacer de todo, asignar funciones a variables, apsarlas como argumentos o retornarlas desde otras funciones.


Por que usar funciones de orden superior?

- Abstraccion: Permiten escribir codigo mas abstracto y reutilizable

- Composicion: Facilitar combinar funcionaliades pequeñas en lógicas más complejas
*/

// 1. Aceptando una funcion como argumento

// Funcion de alto nivel que acepta un callback
function funcionAltoNivel(callback) {
    console.log("Ejecutando una funcion de alto nivel");

    // Sarasa ...

    callback(); // Llamada a la funcion callback
}

function funcionCallback() {
    console.log("Ejecutando la funcion callback");
}

funcionAltoNivel(funcionCallback);


// 2. Funcion de alto nivel que devuelve una funcion
function crearSaludo(saludo) {

    // Devolvemos una nueva funcion
    return function(nombre) {
        console.log(`${saludo}, ${nombre}`);
    }
}

// Creamos una funcion saludo
let saludaHolis = crearSaludo("Holis");
saludaHolis("Gabi");

// Creamos una funcion despedida
let saludaChau = crearSaludo("Chauchis");
saludaChau("Joaquin");


// 3. Ejempo de abstraccion en una HOF
// La idea de este ejemplo es promover la reutilizacion del codigo y la abstraccion al permitir que se realicen distintas operaciones
function ejecutarOperacionArray(array, operacion) {
    return array.map(operacion);
}

// Funcion callback que duplica cada elemento en el array
function dobles(numero) {
    return numero * 2;
}

let numeros = [1, 2, 3, 4, 5];
let numerosDobles = ejecutarOperacionArray(numeros, dobles);
console.log(numerosDobles);


////////////////////////////////////////////////
// Funciones de orden superior comunes en JS //

// forEach() -> Recorre todos los elementos de un array y ejecuta una funcion sobre cada uno

const nums = [1, 2, 3];
nums.forEach(function(num) {
console.log(num * 2);
});
// Output: 2, 4, 6


// map() -> Crea un array aplicando una funcion a cada elemento de array original
const alCuadrado = nums.map(x => x ** 2);
console.log(alCuadrado);
// Output: [1, 4, 9]


// filter() -> Crea un nuevo array con los elementos que cumplen una condicion
const pares = numeros.filter(n => n % 2 === 0);
console.log(pares);
// Output: [2, 4]


// reduce() -> Acumula los valores del array en un solo valor, segun una funcion reductora
const suma = numeros.reduce((acum, actual) => acum + actual, 0);
console.log(suma);


// sort() -> Ordena los elementos de un array segun una funcion de comparacion
const letras = ['d', 'a', 'c', 'b'];
letras.sort(); // Orden alfabetico
console.log(letras)

const numerosRand = [10, 2, 30, 4];
numerosRand.sort((a, b) => a - b); // Orden numerico ascendente
console.log(numerosRand);


// find() -> Devuelve el primer elemento del array que cumple una condicion
let frutas = ["manzana", "banana", "pera"];
let encontrada = frutas.find(f => f.startsWith("b"));
console.log(encontrada);


////////////////////
// Destructuring //
/*
Destructuring o "Desestructuracion" es una sintaxis que permite extraer valores de arrays o propiedades de objetos y asignarlo a variables de forma concisa

Es una forma de "descomponer" estructuras de datos como arrays y objetos en variables individuales para acceder manualmente a cada elemento o propiedad

Por que usar destructuring?
- Mejora la legibilidad del codigo
- Facilita el acceso rapido a datos de estructuras complejas
- Reduce la verbosidad (menos lineas para obtener lo mismo)
*/

let nuevosNumeros = [1, 2, 3];
let uno = nuevosNumeros[0];
let dos = nuevosNumeros[1];

// Con destructuring
let [primero, segundo] = numeros;
console.log(primero, segundo);

let persona = {nombre: "Santiago", edad: 20};
let nomPersona = persona.nombre;
let edadPersona = persona.edad;

let {nombre, edad} = persona;
console.log(nombre, edad);

// Asignamos a nuevas variables
let {nombre: n, edad: e} = persona;
console.log(n, e);


// Destructuring con valores por defecto
let {nom, ciudad = "Oculta"} = {nombre: "Carlos"};
console.log(ciudad);


// Destructuring en parametros de funcion
function saludar({nombre, edad}) {
    console.log(`Hola ${nombre} tenes ${edad} años`);
}

let companero = {nombre: "Matias", edad: 22};
saludar(companero);

// Destructuring con valores omitidos
let [prim, , terc] = [10, 20, 30];
console.log(prim, terc);


// Rest operator con destructuring
// En arrays
let [a, ...resto] = [1, 2, 3, 4];
console.log(a);
console.log(resto);

// En objetos
let {nomb, ... otros} = {nomb: "Matias", edad: 22, pais: "Argentina"};
console.log(nomb);
console.log(otros);


//////////////////////
// Spread operator //
/*
Operador de propagacion o spread operator, es una sintaxis introducida por ES6, que permite descomponer elementos iterables (como arrays, strings y objetos) en elementos individuales.

El objetivos es copiar, combinar o expandir estructuras de datos de forma eficiente

El spread operator trabaja a nivel de valores individuales extrayendo cada elemento en un iterable y colocandolos en el contexto donde se usa.

Cuando el interprete de JavaScript (el navegador en este caso) encuentra ...iterable, automaticamente

    1. Convierte el iterable en una secuencia de valores individuales

    2. Propaga (spread) esos valores en el nuevo contexto (array, objeto, llamada a funcion, etc)

    3. No modifica el original


El spread operator nos permite
- Manipulacion de arrays (copiar y concatenar)
- Combinacion de objetos (inmutabilidad y mezcla de propiedades)

*/

// Copia superficial: Los cambios en copia no afectan al original, si hay objetos anidados, si se referencian
let original = [1, 2, 3];
let copia = [...original];
console.log(copia);


// Concatena arrays -> Mas eficiente que concat()
let arr1 = [1, 2];
let arr2 = [3, 4];
let combinado = [...arr1, ...arr2];
console.log(combinado);

// Uso con otros iterables -> En este caso hace lo mismo que el metodo split() de los strings
let str = "Holis";
let caracteres = [...str];
console.log(caracteres);

// Copiamos objetos
let obj1 = {a: 1, b: 2};
let obj2 = {...obj1};
console.log(obj2);

// Combinacion de objetos -> Propiedades posteriores sobreescriben las anteriores
let defaults = {theme: "dark", fontSize: 14};
let userSettings = {fontSize: 16};
let finalConfig = {...defaults, ...userSettings};
console.log(finalConfig);

// Spread operator en funciones
function sum(a, b, c) {
    return a +  b + c;
}

let numbers = [1, 2, 3];
console.log(
    sum(...numbers)
);

// Recoger argumentos restantes (rest parameters)
function logArgs(primero, ...resto) {
    console.log(primero);
    console.log(resto);
}

logArgs("a", "b", "c");



///////////////
// Closures //
/*
Una closure es una funcion que recuerda el entorno (scope) en el que fue creada, incluso despues de que ese entorno haya finalizado su ejecucion.

Esto significa que una funcion interna puede acceder a variables de su funcion externa incluso despues de que esta terminara de ejecutarse.

Técnicamente lo que está pasando es que cada vez que creamos una función DENTRO de otra función, se crea una closure. La función interna captura las variables de su entorno externo y mantiene una referencia a ellas.

En el siguiente ejemplo
    1. crearContador() retorna una funcion interna anonima
    2. Esta funcion recuerda la variable contador aunque crearContador() ya termino su ejecución
    3. Cada vez que llamamos a contar(), estamos invocando la misma closure que MANTIENE SU PROPIO ESTADO INTERNO

*/

function crearContador() {
    let contador = 0;

    return function() {
        contador++;
        return contador;
    }
}

let contar = crearContador();

console.log(contar()); // 1
console.log(contar()); // 2
console.log(contar()); // 3
console.log(contar()); // 4


// Una closure ocurre cuando una funcion interna accede a variables de su funcion externa incluso despues de que la funcion externa terminara de ejecutarse
// Las closures nos permiten recordar valores, crear funciones privadas y hacer codigo mas limpio y modular


/////////////////////////
// Funciones anidadas //
/*
Las funciones anidadas son simplemente funciones definidas dentro de otra funcion.

Es una funcion que
    - Se declara dentro de otra funcion
    - Tiene acceso a todas las variables y parametros de su funcion externa
    - Puede ser utilizada para organizar mejor el codigo, modularizar la logica o crear closures


Las funciones anidadas nos sirven para modularizar, para privacidad, para closures y para hacer una logica auxiliar interna
*/

function saludarAnidado(nombre) {

    // construirMensaje() esta anidada dentro de saludar()
    function construirMensaje() {
        // Tiene acceso a nombre, aunque esa variable no se definiera adentro de esta funcion, gracias al scope lexico de javascript
        return `Hola, ${nombre}`;
    }

    return construirMensaje();
}

console.log(saludarAnidado("Lucas"));



// Usos comunes de funciones anidadas

// Organizacion del codigo
// Vamos a definir sub-funciones internas para modularizar la logica

function procesarTexto(texto) {
    
    function limpiar(t) {
        return t.trim().toLowerCase();
    }

    function contarPalabras(t) {
        return t.split(/\s+/).length;
    }

    let limpio = limpiar(texto);
    return contarPalabras(limpio);
}


let textoPrueba = "     La 334 es la comision con mas aguante, che!  ";
console.log(procesarTexto(textoPrueba));


// Ojo a no usar demasiadas funciones anidads porque pueden dificultar la legibilidad si no estan bien organizadas


////////////////
// Callbacks //
/*
Un callback = funcion que se ejecuta despues de otra funcion, como una continuacion de esta

JavaScript históricamente fue diseñado para ejecutarse en el navegador, donde muchas operaciones (como hacer peticiones HTTP, leer archivos, esperar clicks del usuario) son ASINCRONICAS. Y como no quieremos que el programa se detenga esperando estas tareas, registramos una funcion callback que se ejecutará más adelante cuando la tarea termine.

Ventajas de los callbacks
    - Permiten la modularidad del codigo (pasar funciones como argumentos)
    - Permiten controlar el flujo en entornos asincronicos
    - Son la base de abstracciones mas complejas como promesas y async/await


Problemas comunes -> Callback hell!!
https://miro.medium.com/v2/1*Co0gr64Uo5kSg89ukFD2dw.jpeg

    - Esto sucede cuando tenemos muchas funciones anidadas dentro de otras, especialmente al hacer tareas asincronicas (leer archivos, esperar respuestas del servidor)

    - El codigo es dificil de leer, dificil de mantener y facil de ormper
*/

function saluda(nombre) {
    console.log(`Hola, ${nombre}`);
}

// Pasamos como argumento a procesarUsuario, que la invoca cuando cree necesario
function procesarUsuario(nombre, callback) {
    console.log("Procesando usuario");
    callback(nombre); // Invocando el callback
}

// Esto nos permite hacer el flujo del programa, modular y controlable
procesarUsuario("Gabi", saluda);


// Ejemplo asincronico con setTimeout()
console.log("Inicio");

// setTimeout() acepta un callback (una funcion a ejecutar)
// No detiene la ejecucion del codigo, sino que el callback se ejecuta en paralelo despues del tiempo indicado
setTimeout(() => {
    console.log("Esto se ejecuta despues de 2 segundos")
}, 2000);
// Estos callbacks asincronicos se ejecutan despues de un tiempo o de que termine una operacion externa 

console.log("Fin");


/////////////////////////
// Tipos de callbacks //

// Callbacks  sincronicos
[1, 2, 3].forEach(function(n) {
    console.log(n);
});

// Ejecuta inmediatamente dentro del mismo ciclo de ejecucion
// Se usan en funciones como forEach, map, filter, etc


///////////////////////////////
// Ejemplo de callback hell //

setTimeout(() => {
    console.log("Paso 1");
    setTimeout(() => {
        console.log("Paso 2");
        setTimeout(() => {
            console.log("Paso 3");
            setTimeout(() => {
                console.log("Paso 4");
            }, 1000)
        }, 1000)
    }, 1000);
}, 1000);

// Cada setTimeout depende del anterior. El codigo anda, pero es dificil de leer y poco manejable


////////////////////////////////////////
// Como solucionar el callback hell? //

// Usamos Promises

fetch("https://jsonplaceholder.typicode.com/users") // Traemos la informacion que nos brinda la URL
    .then(response => response.json())              // Transforma la respuesta en texto plano JSON a objetos en javascript para poder manipular estos datos
    .then(data => console.table(data))              // Los datos procesados los mostramos por consola en formato tabla
    .catch(error => console.error(error));


// Usamos async/await
async function obtenerDatos() {

    try {
        let res = await fetch("https://jsonplaceholder.typicode.com/posts"); // Traemos la informacion cruda en JSON que nos da la URL
    
        let data = await res.json(); // Procesamos la informacion y la transformamos a objetos de javascript
    
        console.table(data); // Los datos procesados los mostramos por consola
        
    } catch (error) {
        console.error(error);
    }

}

obtenerDatos();


///////////////
// Web APIs //
/*
Una API o Application Programming Interface (Interfaz de programacion de aplicaciones)
Una API es un conjunto de funciones y herramientas que podemos usar para interactuar con algo, sea el navegador, el servidor o una libreria

Que es una Web API?
En el contexto del navegador, una Web API es una funcion o conjunto de funciones que el navegador nos ofrece para usarlas con JavaScript

JavaScript por si solo es un lenguaje de programacion muy basico. Pero cuando se ejecuta en un navegador, puede acceder a funcionalidades especiales que el navegador le proporciona

API setTimeout()    ejecuta una funcion despues de un tiempo
API fetch()         permite hacer peticiones HTTP
API console.log()   muestra informacion en la consla
API document        accede al DOM (HTML)
API localStorage    guarda datos en el navegador

- JavaScript es el lenguaje
- Las Web APIs son funciones extra que el navegador le presta a JavaScript para hacer cosas utiles
- JavaScript usa estas APIs pero no las define


///////////////////
// APIs del DOM //
Nos permiten manipular elementos, eventos, clases, estilos

    - document.querySelector()
    - document.createElement()
    - element.addEventListener()
    - classList.add() / style


//////////////////
// APIs de Red //
Nos permiten comunicarnos con servidores o cargar recursos.
Para hacer peticiones HTTP, chats, notificaciones en tiempo real

    - fetch
    - XMLHttpRequest
    - WebSocket


/////////////////////////////
// APIs de almacenamiento //
Guardan informacion en el navegador
Nos permiten guardar preferencias, datos de sesion, apps sin conexion

    - localStorage
    - sessionStorage
    - IndexedDB
    - Cookies (mediante document.cookie)


/////////////
// Timers //
Permiten ejecutar funciones luego de un cierto timepo
Para retrasos, animaciones, polling, etc

    - setTimeout()
    - setInterval()
    - clearTimeout(), clearInterval()



////////////////////////////////////////
// APIs de dispositivos y multimedia //
Interaccion con hardware o medios
Para usar con apps mobiles, camara, permisos, grabaciones, notificaciones

    - navigator.getolocation -> para el GPS
    - MediaDevices.getUserMedia() -> para microfono y camara
    - Notificacion -> para notificaciones del sistema
    - Battery API, Clipboard API

    
///////////////////////////////
// APIs de Interfaz grafica //
Controlar animaciones, graficos y visualizacion
Para juegos, visualizaciones, graficos dinamicos

    - Canvas API
    - WebGL
    - Fullscreen API
    - Screen Orientation API
*/
```

#### [Link clase JavaScript simulacro parcial II](https://youtu.be/3rP-dWXVkbA)

#### [Link clase JavaScript VI parte 2](https://youtu.be/8fQcJP5wPt4)

#### [Link clase JavaScript V + VI / 19/05/25](https://www.youtube.com/watch?v=Utsti9-cd-M)

## JavaScript VI / Manipulacion del DOM en JavaScript y eventos
```html
<!DOCTYPE html>
<html>
    <head>
        <title>Mi pagina</title>
    </head>

    <body>
        <h1>Bienvenidos</h1>
        <p>Esto es un parrafo</p>
    </body>
</html>

<!-- Diagrama de arbol del DOM
    - document
        - html
                - head
                    - title
                -body
                    - h1
                    - p
-->
```

```js
////////////////////
// JavaScript VI //
// Manipulacion del DOM en JavaScript y eventos

/* Como funciona la manipulacion del DOM?

    - Con JavaScript podemos acceder y modificar cualquier elemento del DOM utilizando el objeto global document
    - Podemos:
        - Modificar el contenido
        - Añadir o eliminar elementos del DOM
        - Escuchar eventos de usuario (clicks, teclados, etc)
*/


///////////////////////////////////////
// Seleccion de elementos en el DOM //

// getElementById() -> Selecciona un unico metodo por su ID


let titulo = document.getElementById("titulo");
console.log(titulo);
console.log(titulo.textContent);

// querySelector() -> Seleccionar el PRIMER elemento que coincida con un selector CSS (clase, id, nombre etiqueta)
let primerParrafo = document.querySelector(".mensaje");
console.log(primerParrafo.textContent);

// querySelectorAll() -> Selecciona TODOS los elementos que coincidan con el selector CSS y devuelve un array (mas en detalle una NodeList)
let parrafos = document.querySelectorAll(".mensaje");
console.log(parrafos);

parrafos.forEach(parrafo => console.log(parrafo.textContent));

// Selectores EXTRA (no recomendados)
// getElementsByClassName(): Selecciona todos los elementos con una clase especifica
// getElementsByTagName: Selecciona todos los elementos de un tipo de etiqueta dado


//////////////////////////////////////
// Modificar contenido y atributos //

// textContent: Modifica el texto dentro de un elemento
let parrafo = document.getElementById("parrafo");

let boton = document.getElementById("boton");

boton.style.backgroundColor = "red"
boton.setAttribute("id", "nuevoId")

let contenedor = document.getElementById("contenedor");

/*  Crear y eliminar elementos

    - createElement(): Crear un nuevo elemento HTML
    - appendChild(): Añadir un elemento como hijo de otro
    - removeChild(): Eliminar un elemento hijo de su nodo padre
*/

contenedor.innerHTML = `<ul>
                            <li>Lista 1</li>
                            <li>Lista 2</li>
                            <li>Lista 3</li>
                        </ul>
`;

// Crear nuevo elemento parrafo y asignarle un texto
const nuevoParrafo = document.createElement("p");
nuevoParrafo.textContent = `Soy un parrafo dinamico! Wiii`;

// Insertarlo en el body
document.body.appendChild(nuevoParrafo);

/* Cuando usar cada uno

- Para insertar codigo HTML de forma rapida y simple: innerHTML (para cuando estemos seguros de que el contenido no es malicioso)

- Nos pidieran crear elementos con texto o atributos de forma segura: createElement + appendChild  (técnicamente y estrictamente es la forma más segura de manipular el DOM)
*/


//////////////
// Eventos //
/* 
Permiten a los desarrolladores detectar interacciones del usuarios con la pagina web, como hacer click en un boton, mover el mouse, escribir en un campo de texto etc.

Qué es un evento? Es una señal que se envía cuando ocurre una interacción o cambio en el documento, como un click, o una pulsación de tecla.
JavaScript nos permite escuchar (registrar) esos eventos y ejecutar funciones especificas cuando ocurren
*/

// Llamamos al elemento que va a estar escuchando (registrando) esa interaccion
// let boton = document.getElementById("boton");
boton.addEventListener("click", function() {
    console.log("Hiciste click! epa!");
});


/* Tipos comunes de eventos

- Eventos de mouse: click, dblclick, mouseover, mouseout, mousemove

- Eventos de teclado: keydown, keyup y keypress

- Eventos de formulario: submit, change, input, focus

- Eventos de ventana: resize, scroll, load unload
*/

let input = document.getElementById("input");

// Hacemos que nuestro input escuche eventos de pulsacion de tecla
// Necesitamos incluir event en nuestra funcion cuando vamos a usar informacion sobre el evento
input.addEventListener("keydown", function(event) { // El objeto event contiene todos los datos del evento que ocurrio (que tecla se presiono, que boton hico click, etc)
    console.log(`Tecla presionada: ${event.key}`);
    console.log(`Codigo fisico: ${event.code}`);

    if(event.key === "Escape") {
        alert("A donde te escapas, cobarde!");
    }
});

/* Propagacion de eventos

Cuando ocurre un evento, este se propaga a atraves del DOM en dos fases:

- Fase de captura (de arriba para abajo)
- Fase de burbuja (de abajo para arriba)

Podemos detener la propagacion de un evento usando el metodo event.stopPropagation()
*/

let padre = document.getElementById("padre");
let hijo = document.getElementById("hijo");

// Escuchamos el click en el div padre
padre.addEventListener("click", function() {
    console.log("Se hizo click en el div padre");
});

// Escuchamos el click en el button hijo
hijo.addEventListener("click", function(event) {
    event.stopPropagation(); // Detiene la propagacion
    console.log("Se hizo click en el boton hijo");
});


let formulario = document.getElementById("formulario");

// Evitamos que el formulario se envie (por defecto); event.preventDefault()
formulario.addEventListener("submit", function(event) {
    event.preventDefault();
    console.log("El formulario no se envió!");
});

/* Ejercicio en clase

1. Seleccionar los 3 elementos

2. Añadir evento click al boton

    3. Que este evento click cambie el texto del titulo
    4. Que este evento click cambie el contenido HTML del parrafo <strong>Contenido modificado y en negritaaaaa!!!!</strong>
    5. Que este evento click cambie el color del boton
*/

let boton2 = document.getElementById("boton2");
let titulo2 = document.getElementById("titulo2");
let parrafo2 = document.getElementById("parrafo2");

boton2.addEventListener("click", cambiarEstilos);

function cambiarEstilos() {

    // Consigna 1
    titulo2.textContent = "Boca el más grande (llanto de emocion)";

    // Consigna 2
    parrafo2.innerHTML = "<strong>Contenido modificado y en negritaaaaaaaaaaaa!!!!!!!!!</strong>";


    // Consigna 3
    boton2.style.backgroundColor = "yellow";
}

/* Consigna para el parcial

Tener una pagina HTML minimamente estilada. Esta va a ser la estructura a la que vamos a volcar nuestro HTML dinamico

Un <header> que se divida en 3 secciones
    - Un logo
    - Un input type text
    - un div con clase carrito

Un <main> con flex en columna con dos <section>
    - un <section> con id seccion-productos
        - este debe tener un h2 con titulo mis productos y un div con id contenedor-productos

    - un <section> con id seccion-carrito
        - este debe tener un h2, un div id items-carrito y un div id total-carrito

Estilado minimo pero maquetacion con flex, queremos dibujar la estructura a la que volcarle nuestro HTML dinamico con JavaScript usando DOM
*/
```

---

## JavaScript V / Objetos, clases y objetos globales. Almacenamiento persistente. Iteracion en arrays, objetos y arrays de objetos
```js
////////////////////
// JavaScript V //
// Objetos, clases y objetos globales. Almacenamiento persistente. Iteracion en arrays, objetos y arrays de objetos

////////////////////
// JavaScript V //
// Objetos, clases y objetos globales. Almacenamiento persistente. Iteracion en arrays, objetos y arrays de objetos


// Object literal o objeto literal es la manera mas comun de crear objetos en JavScript
let auto = {
    marca: "Toyota",
    modelo: "Corolla",
    anio: 2021
};

console.log(auto.modelo)

// la keyword o palabra clave "this" hace referencia al objeto desde el cual se esta invocando al metodo
let auto2 = {
    marca: "Renault",
    modelo: "12",
    anio: 1999,
    getInfo: function() {
        return `Este auto es un ${this.marca}, del año ${this.anio}`;
    }
};

console.log(auto2.getInfo());


///////////////////////////
// Clases en JavaScript //
// Son una forma de crear objetos y metodos
// Proporcionan una estructura clara para organizar el codigo
// Se introducen a partir de ES6 y simplifican la creacion de objetos en comparacion con las funciones constructoras anteriores

class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar() {
        return `Hola, soy ${this.nombre}, tengo ${this.edad} y aguante BOOOOOOOOOOOOOOOOOCAAAAAAAAAAA`;
    }
}

let luca = new Persona("Luca", 25);
console.log(`${luca.nombre} tiene ${luca.edad} y se presenta como: ${luca.saludar()}`);


let iara = new Persona("Iara", 23);
console.log(iara.saludar());


// Herencia
// Permite cerar nuevas clases basadas en clases existentes.
// La clase hija puede heredar propiedades y metodos de la clase padre usando la palabra clave extends

class Animal {
    constructor(nombre) {
        this.nombre = nombre;
    }

    hacerSonido() {
        console.log(`${this.nombre} hace un sonido`);
    }
}

class Perro extends Animal {
    ladrar() {
        console.log(`${this.nombre} ladra`);
    }
}

let miPerro = new Perro("Trotsky");
miPerro.hacerSonido();
miPerro.ladrar();

/* Ejercicio practico sugerido
    
    - Crear una clase Coche que tenga propiedades como marca, modelo y anio, y un metodo para mostrar la descripcion del coche

    - Crear una clase CocheDeportivo que herede de Coche y añada una propiedad velocidadMaxima y un metodo mostrarVelocidad


    
Ejercicio practico sugerido 2
    
- Crear un objeto Libro con propiedades y metodos e iterar sobre sus propiedades
    
    - Crear una clase Producto con sus propiedades y métodos, y crear una clase hija Electrodomestico que añada características adicionales

*/


//////////////////////
// Objetos globales//

// Ejemplo completo del Objeto global console

console.log("Mensaje informativo");
console.warn("Esto es una advertencia");
console.error("Esto es un error");

console.time("Tiempo de ejecucion");

for(let i = 0; i < 1000; i++) {
    // console.log(i);
}

console.timeEnd("Tiempo de ejecucion");

let usuarios = [
    { nombre: "Iara", edad: 20 },
    { nombre: "Lara", edad: 19}
];

console.table(usuarios);

let texto = "Hola";
// JavaScript trata temporalmente a tipos de datos primitivos como si fueran objetos y les asigna metodos como .toUpperCase()
console.log(texto.toUpperCase()); 

// Objetos globales localStorage y sessionStorage (mas abajo)


////////////////////////////////////////////
// Almacenamiento de datos en JavaScript //

// Almacenar datos implica elegir la estructura adecuada de acuerdo al tipo de informacion que se quiere guardar y tambien como se desea manipular

// Variables simples: Valores unicos como numeros y strings
// Objetos: Representar datos complejos con propiedades
// Arrays: Almacenar una lista de elementos (IDEALMENTE del mismo tipo)
// Arrays de objetos: Para manejar listas de elementos complejos que contienen multiples propiedades


/////////////////
// 1. Objetos //
// Los objetos son ideales para representar una unica entidad o elemento que tiene varias propiedades o atributos
let persona2 = {
    // key o clave: nombre  valor: "Lucas"
    nombre: "Lucas",
    edad: 30,
    ocupacion: "Desarrollador web"
}

/* Cuando usar objetos?
    - Cuando deseamos reppresentar una entidad unica con multiples atributos
    - Cuando sabemos que no habrá múltiples instancias o copias de estos datos en la aplicacion
    - Cuando necesitamos acceder a propiedades específicas mediante sus nombres
*/

///////////////////////////
// 2. Arrays de objetos //
// Una estructura que permite almacenar multiples objetos, donde cada objetos tiene la misma estructura o contiene atributos similares

let personas = [
    { nombre: "Rodrigo", edad: 20, ocupacion: "Desarrollador frontend"},
    { nombre: "Gaston", edad: 21, ocupacion: "Desarrollador backend"},
    { nombre: "Joaquin", edad: 22, ocupacion: "Desarrollador fullstack"},
    { nombre: "Lucas", edad: 23, ocupacion: "Desarrollador de videojuegos"}
];

/*  Cuando usar arrays de objetos?
        - Cuando necesitemos almacenar multiples instancias de una misma entidad o una estructura de datos
        - Cuando planeamos realizar operaciones sobre una lista de elementos como iteraciones, filtrados o agrupaciones
        - Si necesitamos aplicar metodos de los arrays como map, filter, reduce, find

    Ejemplos de casos de uso:
        - Listado de usuarios registrados en una plataforma
        - Inventario de productos en una tienda
        - Historial de transacciones o registros
*/

// Ejemplo
// usuario es un objeto que representa a un usuario especifico, con datos personales y carrito de compra
let usuario = { 
    id: 1,
    nombre: "Gabriel",
    email: "gabri@el.com",
    // Dentro del usuario es un array de objetos, donde cada objetos representa un producto en el carrito
    carrito: [
        { productoId: 101, nombre: "Laptop", precio: 100000, cantidad: 1 },
        { productoId: 202, nombre: "Teclado", precio: 15000, cantidad: 2 }
    ]
};

// inventario es un array de objetosque representa todos los productos disponibles en la tienda
let inventario = [
    { productoId: 101, nombre: "Laptop", precio: 100000, stock: 15 },
    { productoId: 202, nombre: "Teclado", precio: 15000, stock: 20 }
]


// Otros objetos globales del navegador: localStorage y sessionStorage

// Permiten almacenar datos de manera persistente (localStorage) o temporal (sessionStorage)

/*   ///////////////////
    // localStorage //

    // Descripcion //

- Nos permite almacenar datos de manera persistente en el navegador.

- Los datos almacenados en localStorage NO tienen una fecha de expiracion, esto significa que estaran disponilbes incluso despues de cerrar el navegador o apagar la computadora.


    // Caracteristicas //
- Capacidad de almacenamiento de 5-10 MB
- Persistencia: Los datos permanecen almacenados hasta que son eliminados manualmente
- Almacenamiento por origen (dominio y protocolo): Los datos se almacenan por dominio, lo que significa que SOLO son accesibles dentro del mismo dominio
- Datos almacenados como strings: Todos los datos almacenados en localStorage son de tipo string. Si se quiere almacenar otros tipos de datos, como objetos, deben ser convertidos a strings (generalmente JSON)


    // Metodos //
- Guardar datos: localStorage.setItem(clave, valor);
- Leer datos: localStorage.getItem(clave);
- Eliminar un dato: localStorage.removeItem(clave);
- Eliminar todos los datos: localStorage.clear();
*/

// Guaramos datos en localStorage
localStorage.setItem("nombre", "Nicolas");
localStorage.setItem("apellido", "Leipold");

// Obtener los datos de localStorage
const nombre = localStorage.getItem("nombre");
const apellido = localStorage.getItem("apellido");

console.log(nombre);
console.log(apellido);

// Eliminar un dato especifico
localStorage.removeItem("nombre");

// Eliminar todo el localStorage
localStorage.clear();


// Almacenando un objeto en localStorage
let user = {
    nombre: "Lucas",
    apellido: "Iusef",
    edad: 22
}

// Convertimos el objeto a JSON y lo almacenamos
localStorage.setItem("user", JSON.stringify(user));
console.log(localStorage.getItem("user"));

// Obtener el objeto de localStorage y lo convertimos de vuelta en un objeto
let usuarioGuardado = JSON.parse(localStorage.getItem("user"));
console.log(usuarioGuardado);
console.log(usuarioGuardado.apellido);

localStorage.clear();

// Para consumir recursos en JSON en una URL
// .fetch()
// .XMLHTTPRequest()


/*   ////////////////////
    // sessionStorage //

    // Descripcion //

- Identico a localStorage salvo que en sessionStorage los datos solo se mantienen disponibles durante la sesion del navegador

- Si cerramos pestaña o ventana, los datos se eliminan automaticamente


    // Metodos //
- Guardar datos: sessionStorage.setItem(clave, valor);
- Leer datos: sessionStorage.getItem(clave);
- Eliminar un dato: sessionStorage.removeItem(clave);
- Eliminar todos los datos: sessionStorage.clear();
*/

// Guardar datos en sessionStorage
sessionStorage.setItem("nombre", "Candela");

// Obtener datos de sessionStorage
console.log(sessionStorage.getItem("nombre"));


// Eliminar un dato especifico
sessionStorage.removeItem("nombre");

sessionStorage.clear();



/*   //////////////
    // Cookies //

    // Descripcion //

- Las cookies son pequeños fragmentos de informacion que se almacenan en el navegador y se envian con cada peticion HTTP al servidor.

- Mas antiguas que localStorage y sessionStorage y fueron ampliamente usadas, mantener la session del usuario, guardar preferencias etc


    // Caracteristicas //
- Capacidad de almacenamiento de 4KB por cookie.

- Persistencia: Pueden tener una fecha de expiracion especifica. Si no se establece una fecha de expiracion, la cookie sera eliminada al cerrar la sesion del navegador.

- Envío al servidor: A difernecia de localStorage y sessionStorage, las cookies se envian automaticamente al servidor con cada solicitud HTTP, lo que puede ser util pero tambien puede generar sobrecarga en la red



- Almacenamiento por origen (dominio y protocolo): Los datos se almacenan por dominio, lo que significa que SOLO son accesibles dentro del mismo dominio
*/

// Crear una cookie
// Cookie sin expiracion
document.cookie = "pais=Argentina; path=/;";

// Cookie con expiracion 1 enero 2026
document.cookie = "usuario=Axel; expires=Thu, 01 Jan 2026 00:00:00 UTC; path=/;";

// Eliminamos una cookie estableciendo una fecha de expiracion en el pasado
document.cookie = "usuario=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
document.cookie = "pais=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

// Leer todas las cookies
console.log(document.cookie);

// Ejemplo completo
// Crear una cookie que expira en 7 dias
function setCookie(name, value, days) {
const date = new Date();
date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
const expires = "expires=" + date.toUTCString();
document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

// Obtener el valor de una cookie
function getCookie(name) {
const decodedCookie = decodeURIComponent(document.cookie);
const cookies = decodedCookie.split(';');

for (let i = 0; i < cookies.length; i++) {

let cookie = cookies[i].trim();

if (cookie.indexOf(name + "=") === 0) {
    return cookie.substring(name.length + 1, cookie.length);
}
}
return "";
}

// Establecemos una cookie
setCookie("idioma", "es", 7);

// Ler una cookie
console.log(getCookie("idioma"));



/////////////////////////////////////////////////////////////////////
// Iteracion en arrays, objetos y arrays de objetos en JavaScript //

// Metodos de iteracion en arrays /////////////
let numeros = [1, 2, 3, 4, 5];

///////////////////////
// Bucle for clasico//

// for -> ejemplo basico
for(let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
}

// for -> modificacion de elementos
/*
for(let i = 0; i < numeros.length; i++) {
    numeros[i] *= 2;   
}
    */

console.log(numeros);


////////////////////
// Bucle for..of //
for(let numero of numeros) {
    console.log(numero)
}

// .forEach()
numeros.forEach(numero => console.log(numero));

numeros.forEach(numero => {
    console.log(numero);
});

// map() crea un nuevo array sin modificar el original
let duplicados = numeros.map(numero => numero * 2);
console.log(duplicados);

// filter() para obtener un subconjunto de datos
let mayoresQueTres = numeros.filter(numero => numero > 3);
console.log(mayoresQueTres);

// reduce() para acumular valores
let sumaTotal = numeros.reduce((acumulado, numero) => acumulado + numero, 0);
console.log(sumaTotal);

const numeros2 = [1, 2, 3, 4];
const suma = numeros2.reduce(function (resultado, elemento) {
    return resultado + elemento;
}, 0);

console.log(suma); // 10


/* Ejercicio Practico con array de numeros

    - map() para crear un array donde cada numero este al cuadrado
    - filter() para obtener solo los numeros mayores a un valor determinado
    - reduce() para encontrar el promedio de los numeros en el array
    
    Recomendado
    - Primer ejercicio sin map
    - Segundo ejercicio sin filter
    - Tercer ejercicio sin deduce
*/


////////////////////////////
// Iteracion en objetos //

// for ... in para iterar claves
let estudiante = {
    nombre: "Luca",
    edad: 22,
    curso: "JavaScript"
}

for(let propiedad in estudiante) {
    console.log(`${propiedad}: ${estudiante[propiedad]}`);
}

// Object.keys() para obtener claves
let claves = Object.keys(estudiante);

claves.forEach(clave => console.log(clave));

// Object.values() para obtener valores
let valores = Object.values(estudiante);
console.log(valores);


// Object.entries() para obtener pares clave-valor
for(let [clave, valor] of Object.entries(estudiante)) {
    console.log(`${clave}: ${valor}`);
}


/* Ejercicio Practico con un objeto libro con propiedades titulo, autor, anio y genero

    - Usar for... in para iterar y mostrar cada clave y valor
    - Usar Object.keys() y Object.values() para crear dos arrays: uno con claves y otro con valores
    - Usar Object.entries() para imprimir cada par clave-valor
*/


/////////////////////////////////////
// Iteracion en arrays de objetos //

// forEach()

let estudiantes = [
    { nombre: "Nahuel", edad: 17 },
    { nombre: "Lautaro", edad: 19 },
    { nombre: "Tehuel", edad: 20 }
];

estudiantes.forEach(estudiante => {
    console.log(`Nombre: ${estudiante.nombre}, Edad: ${estudiante.edad}`);
});

// Ejemplo con for clasico
console.log("Bucle for clasico");
for(let i = 0; i < estudiantes.length; i++) {
    console.log(`Nombre: ${estudiantes[i].nombre} ,Edad: ${estudiantes[i].edad}`);
}


// filter()
let estudiantesMayores = estudiantes.filter(estudiante => estudiante.edad > 18);
console.log(estudiantesMayores);

/* Ejercicio Practico con arrays de objetos

Creen un array de objetos que represente una lista de productos, cad auno con propiedades: nombre, precio, stock

    - .map() para reducir el precio de cada producto un 10%
    - .filter() para obtener solo los productos con stock disponibles
    - .reduce() para obtener el valor del inventario
*/



// Repaso y profundización de iteracion de estructuras de datos en JavaScript

/* for tradicional
    - Ventajas: Maximo control, podemos usar break y continue. Mayor rendimiento (mas rapido)
    - Desventajas: Mas verboso (más complejo de leer)
*/


/* forEach()

array.forEach((elemento, indice, arrayOriginal) => {
    console.log(elemento, indice);
});

    - Ventajas: Sintaxis limpia (facil de leer), no necesita contador
    - Desventajas: No se puede romper el bucle con break
*/

// Modificar un array externo
const numeros3 = [1, 2, 3];
const dobles = [];

numeros3.forEach(num => dobles.push(num * 2));
console.log(dobles);

// Actualizar propiedades
const estudiantes2 = [
    { nombre: "Candela", nota: 8 },
    { nombre: "Kevin", nota: 6 },
    { nombre: "Ignacio", nota: 9 }
];

estudiantes2.forEach(estudiante => {
    estudiante.aprobado = estudiante.nota >= 7;
});

console.log(estudiantes2);


/* map()

const nuevosValores = array.map(elemento => elemento * 2);

    - Proposito: Transformar cada elemento
    - Retorna: Nuevo array con los resultados
*/

// Crear un array de cuadrados
const nums = [1, 2, 3, 4];
const cuadrados = nums.map(num => num * num);
console.log(cuadrados);

// Convertir a strings
const edades = [25, 30, 18];
const edadesStr = edades.map(edad => `Tengo ${edad} años`);
console.log(edadesStr);

// Extraer propieades
const empleados = [
    { id: 1, nombre: "Candela", departamento: "Canelones" },
    { id: 2, nombre: "Kevin", departamento: "Montevideo" },
    { id: 3, nombre: "Ignacio", departamento: "Punta del Este" }
];

const nombresEmpleados = empleados.map(emp => emp.nombre);
console.log(nombresEmpleados);


/* filter()

const filtrados = array.filter(elemento => elemento > 10)

    - Proposito: Seleccionar elementos que cumplan una condicion
    - Retorna: Nuevo array con elementos filtrados
*/

// Filtrar numeros pares
const numeros4 = [1, 2, 3, 4, 5, 6];
const pares4 = numeros4.filter(num => num % 2 === 0);
console.log(pares4);

// Filtrar strings largos
const palabras = ["hola", "adios", "bienvenido", "ok"];
const palabrasLargas = palabras.filter(palab => palab.length > 4);
console.log(palabrasLargas);

// Filtrar por propiedad
const personas2 = [
    { nombre: "Candela", edad: 25 },
    { nombre: "Kevin", edad: 17 },
    { nombre: "Ignacio", edad: 30 }
];

const mayores = personas2.filter(persona => persona.edad >= 18);
console.log(mayores);

// Filtrar multiples condiciones
const ordenes = [
    { productoId: 101, nombre: "Laptop", precio: 100000, cantidad: 1, completada: true },
    { productoId: 202, nombre: "Teclado", precio: 15000, cantidad: 3, completada: true  },
    { productoId: 103, nombre: "Mouse", precio: 10000, cantidad: 4, completada: false  }
];

const ordenesMultiplesCompletadas = ordenes.filter(orden => {
    return orden.completada && orden.cantidad > 1
});

console.log(ordenesMultiplesCompletadas);


/* reduce()

const suma = array.reduce((acumulador, elemento) => acumulador + elemento, 0)

    - Proposito: Reducir el array a un unico valor
    - Retorna: Valor acumulado
*/

// Sumar elementos
const numeros5 = [10, 20, 30];
const suma5 = numeros5.reduce((acum, num) => acum + num, 0);
console.log(suma5);

// Concatenar strings
const palabras2 = ["Hola", "mundo", "JavaScript"];
const frase = palabras2.reduce((acum, palabra) => acum + " " + palabra);
console.log(frase);

// Arrays de objetos
const ventas = [
    { productoId: 101, nombre: "Laptop", precio: 100000, cantidad: 1, completada: true },
    { productoId: 202, nombre: "Teclado", precio: 15000, cantidad: 3, completada: true  },
    { productoId: 103, nombre: "Mouse", precio: 10000, cantidad: 4, completada: false  }
];

const totalVentas = ventas.reduce((total, item) => total + (item.cantidad * item.precio), 0);

console.log(totalVentas);


/* find() y findIndex()

const encontrado = array.find(elemento => elemento.id === 123);
const indice = array.findIndex(elemento => elemento.id === 123);

    - Proposito: Buscar el primer elemento que cumpla una condicion
    - Retorna: El elemento (find) o el indice (findIndex)
*/

// Buscar numero
const numeros6 = [5, 12, 8, 130, 44];
const encontrado = numeros6.find(num => num > 10);
console.log(encontrado);

const indice = numeros6.findIndex(num => num > 100);
console.log(indice);

//Buscar un objeto por propiedad
const usuarios2 = [
    { id: 1, nombre: "Candela", activo: true },
    { id: 2, nombre: "Kevin", activo: false },
    { id: 3, nombre: "Ignacio", activo: true }
];

const usuarioActivo = usuarios2.find(usuario => usuario.activo);
console.log(usuarioActivo);

const tareas = [
    { id: 1, descripcion: "Comprar fideos", completada: false },
    { id: 2, descripcion: "Estudiar JavaScript", completada: true },
    { id: 3, descripcion: "Andar en bici", completada: false }
];

const indiceTarea = tareas.findIndex(tarea => tarea.completada);
console.log(indiceTarea);


/* for ... of

for(const elemento of array) {
    console.log(elemento);
    if(elemento === "stop") {
        break;
    }
}

    - Ventajas: Sintaxis limpia, permite break/continue
    - Desventajas: No provee indice automatico
*/

const simbolos = ['€', '$', '¥', '£'];
for(const simbolo of simbolos) {
    console.log(simbolo);
    if( simbolo === '¥') break;
}


// Iterar objetos
const empleados2 = [
    { id: 1, nombre: "Candela", salario: 3000 },
    { id: 2, nombre: "Kevin", salario: 3500 },
    { id: 3, nombre: "Ignacio", salario: 4000 }
];

for(const empleado of empleados2) {
    if(empleado.salario > 3500) {
        console.log(`${empleado.nombre} gana mas de 3500`);
        break;
    }
}


// Iteracion en objetos
// Iterando claves de objetos con for...in
const estudiante3 = {
    nombre: "Joaquin",
    edad: 30,
    curso: "JavaScript"
};

for(const propiedad in estudiante3) {
    console.log(`${propiedad}: ${estudiante3[propiedad]}`);
}

// Object.keys() para obtener claves
const claves2 = Object.keys(estudiante3);
console.log(claves2);
claves2.forEach(clave => console.log(clave));

// Object.values() para obtener valores
const valores2 = Object.values(estudiante3);
console.log(valores2);
valores2.forEach(valor => console.log(valor));

// Object.entries() para obtener pares clave-valor
for(const [clave, valor] of Object.entries(estudiante3)) {
    console.log(`${clave}: ${valor}`);
}


/* Metodos de comparacion con some() y every()

const algunoCumple = array.some(elemento => elemento > 0);
const todosCumples = array.every(elemento => elemento > 0);

    Proposito: Verificar si algunos/todos cumplen la condicion
    Retorna: Booleano
*/

// Verificar si hay numeros pares
const numeros7 = [1, 3, 5, 7, 8];
const hayPares  = numeros7.some(num => num % 2 === 0);
console.log(hayPares);

// Verificar si son todos positivos
const todosPositivos = numeros7.every(num => num > 0);
console.log(todosPositivos);

// Verificar si hay usuarios admin
const usuarios3 = [
    { id: 1, nombre: "Candela", salario: 3000, rol: "user" },
    { id: 2, nombre: "Kevin", salario: 3500, rol: "admin" },
    { id: 3, nombre: "Ignacio", salario: 4000, rol: "user" }
];

const existeAdmin = usuarios3.some(user => user.rol === "admin");
console.log(existeAdmin);



// Verificar si todos aprobaron
const estudiantes3 = [
    { nombre: "Candela", nota: 8 },
    { nombre: "Kevin", nota: 6 },
    { nombre: "Ignacio", nota: 9 }
];

const todosAprobaron = estudiantes3.every(estudiante => estudiante.nota >= 7);
console.log(todosAprobaron);

/*  Comparacion de rendimiento

        1. Bucles clasicos (for, while) son los mas rapidos
        2. Metodos funcionales (map, filter) son mas lentos pero mas expresivos
        3. for...of ofrece un buen equilibrio entre rendimiento y legibilidad

    Recomendaciones de uso

        - Transformar un array: map()
        - Filtrar elementos: filter()
        - Reducir a un valor: reduce()
        - Buscar elemento: find() o findIndex()
        - Para romper un bucle: for o for...of
        - No necesitamos romper un bucle: forEach()
        - Verificar condiciones: some() o every()
*/
```

---

## JavaScript IV / Introduccion a arrays y objetos. Metodos de strings y arrays
```js
////////////////////
// JavaScript IV //

// Introduccion a arrays y objetos. Metodos de strings y arrays
// Estructuras de datos fundamentales. 

/////////////
// Arrays //
// Lista ordenada de elementos, donde cada elemento tiene una posicion o indice (indice 0()
// Pueden contener cualquier tipo de dato (numeros, cadenas, booleanos, otros arrays, objetos, funciones, etc)

let frutas = ["manzana", "banana", "pomelo"];

console.log(frutas[0]); // manzana
console.log(frutas[2]); //pomelo


//////////////
// Objetos //
// Coleccion de pares clave-valor
// Las claves son cadenas que identifican cada valor

let persona = {
    nombre: "Gabriel",
    equipo: "River",
    edad: 22,
    ciudad: "Lomas de Zamora",

    agitar: function() {
        // this hace referencia al objeto desde el cual se esta invocando el metodo
        console.log(`Aguante ${this.equipo} manga de caretas`);
    }
}

// Notacion de punto
console.log(persona.nombre);

// Notacion de corchete
console.log(persona["equipo"]);

persona.agitar();

persona.pais = "Argentina";
console.log(persona);

delete persona.pais;
console.log(persona);


// Ejemplo completo con un libro
let libro = {
    titulo: "El eternauta",
    autor: "Héctor Germán Oesterheld",
    anio: 1957,
    detalles: function() {
        return `${this.titulo} es un libro escrito por ${this.autor} en el año ${this.anio}.`;
    }
}

console.log(libro.detalles());

/* Comparacion entre arrays y objetos
Uso principal
    Arrays: Lista ordenada de elementos
    Objeto: Coleccion pares clave-valor

Acceso a datos
    Arrays: Por indice, indice 0
    Objeto: Por clave (objeto.clave o objeto["clave"])

Metodos
    Arrays: .push(), .pop(), .map(), .forEach()
    Objeto: Metodos personalizados y funciones

Iteracion
    Arrays: .forEach(), .map(), etc
    Objeto: for.. in, Object.keys(), Object.values()
 */


// EXTRA

// Map: Coleccion clave-valor donde las claves pueden ser de cualquier tipo
const mapa = new Map();
mapa.set("nombre", "Ana");
mapa.set(123, "ID");
mapa.set(true, "activo");

console.log(mapa.get("nombre")); // "Ana"
console.log(mapa.has(123)); // true

// Set: Coleccion de valores UNICOS (no permite elementos duplicados)
const conjunto = new Set([1, 2, 2, 3]);
conjunto.add(4);
console.log(conjunto);


// Date: Una estructura muy usada para manejar fechas y horas
const fecha = new Date("2025-01-02");
console.log(fecha.getFullYear());



/////////////////////////
// Metodos de strings //

let hola = "Hola";
let js = "JavaScript";
let saludo = "Hola mundo";
let espacio = "Mucho     espacio";
let frutas2 = "Manzana, Pera, Pomelo";

// Devuelve la longitud del string
console.log(hola.length);

// Devuelve el caracter en la posicion especificada
console.log(hola.charAt(1));

// Concatena strings
console.log(hola.concat(" ", "Mundo")); // concat(str1, string2, ...)

// Verifica si el substring esta en el string
console.log("JavaScript".includes("Javi"));

// Comprueba si el string comienza con el substring
console.log("Hola mundo".startsWith("Hola"));

// Comprueba si el string termina con el substring
console.log("Hola mundo".endsWith("mundo"));

// Devuelve el indice de la primera aparicion del substring
console.log("banana".indexOf("a"));

// Devuelve el indice de la ultima aparicion del substring
console.log("banana".lastIndexOf("a"));

// Reemplazar una parte del string
console.log(saludo.replace("mundo", "JavaScript"));

// Reemplazar TODAS las apariciones
console.log(espacio.replaceAll(" ", ""));
console.log(js.replaceAll("a", "e"));
console.log(js.replace("a", "e"));

// Convertir a minusculas
console.log("JAVASCRIPT".toLowerCase());

// Convertir a mayusculas
console.log("javascript".toUpperCase());

// Eliminamos espacios al inicio y final (tambien combinables con trimStart y trimEnd)
console.log("        hola        ".trim());

// Extrae parte del string
console.log("JavaScript".slice(0, 4));

// Dividir el string en un array
console.log(frutas2.split(", "))

// Repetir el string
console.log("ji".repeat(3));

// Devuelve coincidencias con una expresion regular -> Regular Expression (REGEX)
console.log(frutas2.match(/[A-Z]/g)); // Extrae las letras con mayusculas


console.log("/////////////////////////");

////////////////////////
// Metodos de arrays //

let ejemploArr = [1, 2, 3];

console.log(ejemploArr);

// Ver la longitud del array
console.log(ejemploArr.length);

// Agregar un elemento AL FINAL del array
ejemploArr.push(4);
console.log(ejemploArr);

// Eliminar el ULTIMO elemento de un array
ejemploArr.pop();
console.log(ejemploArr);

// Agregar un elemento AL PRINCIPIO del array
ejemploArr.unshift(0);
console.log(ejemploArr);

// Eliminar el PRIMER elemento de un array
ejemploArr.shift();
console.log(ejemploArr);

// Concatenar (unificar) arrays -> GENERA UN NUEVO ARRAY
// console.log([1, 2, 3].concat([4, 5, 6]));
let nuevoArr = ejemploArr.concat([4, 5, 6]);
console.log(nuevoArr);

// Unificar los elementos en un string
console.log(nuevoArr.join(","));
console.log(nuevoArr);

// Extrae una copia parcial del array
console.log(nuevoArr.slice(1, 4));

// Devuelve la PRIMERA posicion del elemento
console.log(nuevoArr);
console.log(nuevoArr.indexOf(4));

// Devuelve la ULTIMA posicion del elemento
console.log([1, 2, 2, 3, 4, 5, 6, 2, 4, 3, 1].lastIndexOf(3));

// Verificar si un elemento existe
console.log(nuevoArr.includes(7));

// Ordenamos el array
console.log([1, 2, 2, 3, 4, 5, 6, 2, 4, 3, 1].sort());
console.log(["b", "c", "a", "j", "k" ,"z"].sort());

// Revertimos el array original con reverse(), y podemos ligarlo al sort para invertir el orden alfabetico o numerico
console.log([1, 2, 2, 3, 4, 5, 6, 2, 4, 3, 1].sort().reverse());
console.log(["b", "c", "a", "j", "k" ,"z"].sort().reverse());

```

---

## JavaScript III / Scope y ambito, funciones, tipos, parametros y argumentos
```js
////////////////////////////////////////////////////////
// JavaScript III: Scope y ambito. Funciones y tipos //
// Scope y ambito, funciones, tipos de funciones, parametros y argumentos, funciones flecha

/////////////////////
// Scope (Ambito) //

// 1. Global scope -> Ambito global, accesible desde cualquier parte del codigo
var globalVar = "Soy global!";

function mostrarGlobal() {
    console.log(globalVar);
}

mostrarGlobal();
console.log(globalVar);


// 2. Local Scope o Function Scope -> Ambito local o de funcion
function mostrarLocal() {
    var localVar = "Soy local!";
    console.log(localVar);
}

mostrarLocal();
// console.log(localVar); //main.js:26 Uncaught ReferenceError: localVar is not defined


// 3. Block scope -> Ambito de bloque (let y const)
// Solo son accesibles dentro del bloques que se declararon {}
if(true) {
    let bloqueVar = "Soy de bloque!";
    console.log(bloqueVar);
}

// console.log(bloqueVar); // Uncaught ReferenceError: bloqueVar is not defined


console.log("////////////////////");

//////////////////
// Scope chain //
// Cadena de ambito

var globalVar2 = "Soy global!";

function externa() {
    var externaVar = "Soy de externa";

    function interna() {
        var internaVar = "Soy de interna";

        console.log(globalVar);
        console.log(externaVar);
        console.log(internaVar);
    }

    interna();
    // console.log(internaVar); // Uncaught ReferenceError: internaVar is not defined

}

externa();


// Function scope vs Block scope
// Las variables declaradas con var tienen ambito de funcion, por tanto no son accesibles fuera de esa funcion, pero no estan limitadas por bloques

function scopeFunction() {
    if (true) {
        var funcionVar = "Soy de funcion";
    }

    console.log(funcionVar);
}

scopeFunction();


// Las variables declaradas con let y const estan limitadas por el bloque en el que se declaran
function scopeBloque() {
    if(true) {
        let bloqueLet = "Soy de bloque";
        const bloqueConst = "Tambien soy de bloque!";
    }

    // console.log(bloqueLet); // Uncaught ReferenceError: bloqueLet is not defined
    // console.log(bloqueConst); // Uncaught ReferenceError: bloqueConst is not defined
}

scopeBloque();

console.log("////////////////////");

///////////////
// Hoisting //
// Variables con var: Se ELEVAN y se INICIALIZAN con undefined
console.log(elevadaVar); // undefined
var elevadaVar = "Soy una var elevada!";
console.log(elevadaVar); // Soy elevada!

// Variables con let y const: Se ELEVAN pero NO SE INICIALIZAN
// console.log(elevadaLet); // Uncaught ReferenceError: Cannot access 'elevadaLet' before initialization
let elevadaLet = "Soy una let elevada";
console.log(elevadaLet);


// Diferencias entre var, let y const
// var: Ambito de funcion. Permite la redeclaracion y la reasignacion

// let: Ambito de bloque (if, bucle, funcion). Permite la redeclaracion pero no la reasignacion

// const: Ambito de bloque. No permite la reasignacion y la redeclaracion

function foo() {
    let x = 1;
    {
        let y = 2;
        console.log(y);
    }

    console.log(x);
    // console.log(y);
}

foo();

/* RESUMEN

var:
    - Ambito global o ambito de funcion
    - Puede ser redeclarado y reasignado
    - Tiene elevacion a nivel de funcion, por lo que puede utilizarse antes de la declaracion

let:
    - Ambito de bloque (dentro de un bucle, una condicional o una funcion)
    - Se puede volver a declarar pero no reasignar
    - Tiene elevacion a nivel de bloque, por lo que no es accesible antes de la declaracion

const: 
    - Ambito de bloque
    - No se puede volver a declarar ni reasignar
    - Tiene elevacion a nivel de bloque, por lo que no es accesible antes de la declaracion


Buenas practicas:
- const para variables de solo lectura, como constantes u objetos inmutables

- let para variables que puedan cambiar con el tiempo pero que no deban volver a declararse

- var lo evitaremos por su ambiot lo que puede dar lugar a conflictos y bugs
*/

// Algunos ejemplos
const PI = 3.1416; // const para una variable de solo lectura

let contador = 0;
contador++;
console.log(contador); // let para variables que pueden cambiar



////////////////////////
// Template literals //

// En lugar de '' o "" usaremos ``
const mensaje = `Hola, mundo`;
console.log(mensaje);

// Interpolacion de variables y expresiones

// Ejemplo con concatenacion, tedioso y propenso a errores
let nombre1 = "Joaquin";
let edad1 = 25;
let mensaje1 = "Hola, me llamo " + nombre1 + " y tengo " + edad1 + " años";
console.log(mensaje1);

// Ejemplo con template literals
let nombre2 = "Gabriel";
let edad2 = 22;
let mensaje2 = `Hola, me llamo ${nombre2} y tengo ${edad2} años`;
console.log(mensaje2);

// dentro de las llaves ${} interpolamos cualquier expresion JavaScript
let cinco = 5;
let diez = 10;

console.log(`La suma de ${cinco} + ${diez} es ${cinco + diez}`);

const esAdulto = edad2 >= 18 ? "mayor de edad" : "menor de edad";
console.log(`Gabriel es ${esAdulto}`);


let textoEngorroso = "Primera linea\n" +
                    "Segunda linea\n" +
                    "Tercera linea";

console.log(textoEngorroso);

let textoPiola = `Primera linea piola
Segunda linea piola
Tercera linea piola
`;

console.log(textoPiola);

let nombre3 = "Ivan";
let producto3 = "laptop";
let precio3 = 60000;

let mensaje3 = `Hola! ${nombre3}
Gracias por tu compra de la ${producto3} del gobierno!
El precio total es de ${precio3}$.

Que tengas una excelente semana!
`;

console.log(mensaje3);


console.log("////////////////////////");

////////////////
// Funciones //
function sumar(a, b) {
    let resultado = a + b;
    console.log(`El resultado es: ${resultado}`);
}

// Invocacion o llamada a la funcion
sumar(3, 7); // Llamada a la funcion con los valores 3 y 7
sumar(4, 14);
sumar(5, 25);


// Ejemplo con return
function multiplicar(a, b) {
    return a * b;
}

//console.log(multiplicar(4, 5));
let producto = multiplicar(5,5);
console.log(producto);


// parametros y argumentos
function saludar(nombre) { // 'nombre' es el parametro
    console.log(`Hola, ${nombre}`);
}

saludar("Candela"); // 'Candela' es el argumento


function saludar(nombre = "maestro") { // Valor predeterminado para los parametros
    console.log(`Como le va ${nombre}`);
}

saludar("Matias");
saludar();

// multiples parametros (lor argumentos se pasan en el mismo orden)
function sumarTresNumeros(a, b, c) {
    return a + b + c;
}


console.log(sumarTresNumeros(3, 3, 4));



///////////////////////
// Funciones flecha //

/* Una forma mas compacta de escribir funciones y se introdujeron en ES6 para proporcionar una sintaxis mas concisa

function nombreDeFuncion1(parametros) {
    // Bloque de codigo
}

const nombreDeFuncion2 = (parametros) => {
    // Bloque de codigo
};
*/

// Ejemplo 1 sin parametros
const saludarFlecha1 = () => {
    console.log("Hola mundo desde la funcion saludarFlecha1!");
}
saludarFlecha1();

const saludarFlecha2 = () => console.log("Hola desde la funcion saludarFlecha2!");
saludarFlecha2();

// Si la funcion solo devuelve un valor, NO ES NECESARIO return ni llaves { }


// Ejemplo 2 con parametros (con 1 parametro las parentesis son opcionales)
//const cuadrado = (x) => x * x;

/* Declaracion tradicional
function cuadrado1(x) {
    return x * x;
}
 */
const cuadrado = x => x * x;
console.log(cuadrado(4));

// Ejemplo 2 con mas de un parametro
const sumar2 = (a, b) => a + b;
console.log(sumar2(2, 3));


// Ejemplo 3, mas de una instruccion en la funcion (debemos usar return y {})
const saludarPersona = nombre => {
    const saludo = `Hola, ${nombre}`;
    return saludo;
}

console.log(saludarPersona("Nahuel"));

// 3 metodos para mostrar o solicitar info por pantalla
/*
alert("Soy un molesto mensaje!");
confirm("Entendes JavaScript?");
let num1 = prompt("Escriba un valor");
console.log(num1);
*/

/* EJERCICIO SUGERIDO PARA PRACTICAR EN LA SEMANA//////////

    Sugerencia para repasar las 2 primeras unidades:


    Elaborar con prompt() una calculadora personalizada que pida tipo de calculo: sumar, restar, multiplicar, dividir

    Guarde un primer valor con prompt en una variable y otro valor en otra variable

    Manejense con un switch para seleccionar de esas cuatro opciones y que les devuelva por consola el calculo correcto

    Usen condicionales para filtrar los datos que piden por prompt

    EXTRA: Por cada operacion que definan, usen un tipo de funcion diferente    */


///////////////////////////////////////
// Tipos de funciones en JavaScript //

/////////////////////////
// 1. Funcion declarada -> Named funcion o Basic funcion

// Declaracion basica de javascript, usa la keyword function
// Las funciones declaradas con la palabra clave funcion se pueden elevar (hoisting);
saludar3();

function saludar3() {
    console.log("Hola mundo desde saludar3!");
}


/////////////////////////
// 2. Funcion expresada -> Function expression

// Es una funcion que esta dentro de una variable
// Utiles para funciones anonimas, para cuando se quiere controlar donde va a estar disponible la funcion o si va a ser usada como argumento para otra funcion

const saludar4 = function() {
    console.log("Hola mundo desde saludar4!");
}
saludar4();


/////////////////////////
// 3. Funcion anonima -> Anonymous function

// No tiene nombre y se usan como callbacks generalmente
setTimeout(function() {
    console.log("Hola mundo desde una funcion anonima!");
}, 500);


/////////////////////////
// 4. Funcion de flecha -> Arrow function

// Utiles para funciones de una linea

const sumar3 = (a, b) => a + b;
console.log(sumar3(5, 6));
```

---

## JavaScript II / Estructuras de control de flujo

```js
//////////////////////////////////////
// JavaScript II: Control de Flujo //
// Estructuras de control de flujo (condicionales, bucles, control de flujo avanzado)

////////////////////
// Condicionales //

/*if (condicion) {
    // codigo que se ejecuta si la condicion es verdadera
} else if (condicion2) {
    // codigo que se ejecuta si la condicion 2 es verdadera
}else {
    // codigo que se ejecuta si la condicion es falsa
}*/

/*
// Ejemplo 2
let edad = -15;

if (edad >= 18) { // mayor o igual a 18
    console.log("Sos mayor de edad");

} else if (edad < 18 && edad > 0) {
    console.log("Sos menor de edad");

} else {
    console.log("Edad invalida");
}


// Ejemplo 3
let hora = 18;

// Verificar si es mañana, tarde o noche
if (hora < 12) {
    console.log("Es de mañana");

} else {
    if (hora >= 12 && hora <= 18) {
        console.log("Es de tarde");
    } else {
        console.log("Es de noche");
    }
}
*/


/////////////////////////
// Operadores logicos //

// AND  && : Ambas condiciones deben ser verdaderas
// OR   || : Al menos una condicion debe ser verdadera
// NOT  !  : Niega el valor de una condicion. Es el operador de negacion logica

// Ejemplo 4
let edad = 37;
let tieneLicencia = false;

if (edad >= 18 && tieneLicencia) {
    console.log("Puede manejar");   
}

if (edad < 18 || !tieneLicencia) {
    console.log("No puede manejar");
}

// Ejemplo 5 de negacion logica basica !
// El operador ! invierte el valor booleano de una expresion. Si la expresion es true, se convierte en false y viceversa

let toggle = true;

console.log(toggle);    // true
console.log(!toggle);   // false 

toggle = !toggle; // Aca invertimos el valor de la variable

console.log(toggle);    // false
console.log(!toggle);   // true


console.log("//////////////////");

// Ejemplo 6
// Usando ! para verificar si una variable es falsy
let valor1 = 0;         // 0 es un valor falsy
let valor2 = "Hola";    // Una cadena no vacia es un valor truthy

console.log(!valor1); // true   ->  0 es falsy, asi que se convierte en true
console.log(!valor2); // false  ->  Una cadena no vacia es truthy, asi que se convierte en false


/* Valores Truthy y Falsy en JS

    En JavaScript, los valores truthy y falsy se utilizan para determinar el contexto booleano de las expresiones, lo que resulta especialmente útil en las sentencias condicionales. Un valor verdadero se evalúa como `true` en un contexto booleano, mientras que un valor falso se evalúa como `false`.

    Los valores falsos en JavaScript son
    - false
    - Una cadena vacía ("" o '')
    - undefined
    - null
    - NaN (Not a Number)
    - 0 (tanto +0 como -0)

    Cualquier valor que no aparezca como falso se considera verdadero. Esto incluye cadenas no vacías, números no nulos, objetos, matrices, etc.

    Por ejemplo, los siguientes valores son verdaderos:
    - true
    - "Hola"
    - 1
    - [] (un array vacío es false, pero un array no vacio es true)
    - {} (un objeto vacío es false, pero un objeto no vacío es true)

    Al utilizar estos valores en sentencias condicionales, JavaScript los convertirá automáticamente en valores booleanos. Por ejemplo, en una sentencia `if`, un valor verdadero hará que se ejecute el bloque de código dentro de la sentencia `if`, mientras que un valor falso no lo hará
    onditional statements and logical operations

    Para comprobar explícitamente si un valor es verdadero o falso, puedes utilizar el operador lógico NOT (`!`) o la función constructora `Boolean

    Por ejemplo:
    ``javascript
    function truthyOrFalsy(a) {
    return !!a; // Usando el operador doble NOT para convertir a booleano
    }
    ``
    Esta función devolverá `true` para valores verdaderos y `false` para valores falsos.

    Entender los valores verdaderos y falsos es esencial para escribir código JavaScript limpio, eficiente y libre de errores, especialmente cuando se trata de sentencias condicionales y operaciones lógicas.
*/

let esActivo = true;

if(!esActivo) { // If not es activo -> si fuera false
    console.log("La cuenta esta inactiva");

} else {
    console.log("La cuenta esta activa");
}

console.log("/////////////////");


// Ejemplo 7
let estado = true;

// La funcion es un bloque de codigo reutilizable
// Declaramos la funcion alternarEstado
function alternarEstado() {
    estado = !estado;
    console.log("Nuevo estado: ", estado);
}

alternarEstado(); // Nuevo estado:  false
alternarEstado(); // Nuevo estado:  true
alternarEstado(); // Nuevo estado:  false


//////////////////////////
// Operadores ternario //

// Una forma mas compacta de escribir una condicion if...else

let edad2 = 20;
let mensaje = ( edad2 >= 18 ) ? "Sos mayor de edad" : "Sos menor de edad";
console.log(mensaje);


let temperatura = 19;
let mensaje2;

// Condicion con el operador ternario
/*
if (temperatura > 25) {
    mensaje = "Hace un lorca tremendo";
} else {
    mensaje = "Hace un lorca tremendo";
}
*/

mensaje2 = (temperatura > 25) ? "Hace un lorca tremendo" : "Esta frio como culo de pingüino";
console.log(mensaje2);

console.log("/////////////////");


/////////////
// Bucles //

////////////////
// Bucle for //

// El bucle for lo usamos cuando conocemos de antemano el numero de iteraciones
/* Sintaxis basica
for (inicializacion; condicion; incremento) {
    // Codigo a ejecutar en cada iteracion
}*/

// Ejemplo 1
console.log("Va a arrancar el bucle");

for (let i = 1; i <= 3; i++) {
    console.log(i); // 1, 2, 3
    // cualquier otro tipo de instruccion
    // al termino de la ejecucion del codigo en la iteracion, se incrementa
}

console.log("Termino la ejecucion del bucle");
    
// Ojo con la indexación base cero!!


// Anidando bucles for 
// Ejemplo 2
console.log("Previo al bucle for anidado");
for(let i = 0; i < 3; i++) {

    // Aca se va a ejecutar una instruccion previa al segundo bucle
    for(let j = 0; j < 3; j++) {
        console.log(i + " - " + j);
    }
}
console.log("Posterior al bucle for anidado");


// Ejemplo 3
console.log("Triple bucle for anidado papa!!");
for(let x = 0; x < 3; x++) {

    for(let y = 0; y < 3; y++) {

        for(let z = 0; z < 3; z++) {
            console.log(x + " - " + y + " - " + z);
        }
    }
}


//////////////////
// Bucle while //

/*
while (condicion) {
    // codigo a ejecutar mientras la condicion sea verdadera
}
*/
console.log("Ejemplo de bucle while");

let i = 0;

while(i < 3) {
    console.log("Iteracion: " + i);
    i++;
}

let contadorWhile = 0;

while (contadorWhile < 3) {
    console.log(contadorWhile);
    contadorWhile++;
}


///////////////////////
// Bucle do...while //

/*
do {
    // Codigo a ejecutar
} while(condicion);
*/

console.log("Bucle do while");
let doWhile = 0;

do {
    console.log(doWhile);
    doWhile++;
} while (doWhile < 3);


//////////////////////////////////////////////////
// Control de flujo avanzado: break y continue //

// Palabra clave/keyword: break que usamos para salir de un bucle o estructura de control

console.log("Arranca nuestro ultimo bucle for hasta 10");

for(let i = 0; i < 10; i++) {

    if(i === 5) {
        break; // Detiene el bucle por completo
    }

    console.log("Iteracion: " + i);
}

console.log("Termina nuestro ultimo bucle for hasta 10");


// Palabra clave/keyword: continue que salta a la siguiente iteracion del bucle

for(let i = 0; i < 10; i++) {

    if(i % 2 === 0) {
        continue; // Nos salteamos las iteraciones pares
    }

    console.log("Numero: " + i);
}


/////////////
// Switch //

/* Switch es otra estructura de control que permite evaluar una expresion y ejecutar el bloque correspondiente si coincide

switch (expresion) {
    case valor1:
        // Se ejecuta si la expresion es igual a valor1;
        break;

    case valor2:
        // Se ejecuta si la expresion es igual a valor2;
        break;

    case valor3:
        // Se ejecuta si la expresion es igual a valor3;
        break;

    default:
        // Codigo que se ejecuta si ninguno de los casos coincide
           
}
*/

let diaSemana = 1;

// Verificar que dia de la semana es
switch(diaSemana) {
    case 1:
        console.log("Lunes");
        break;

    case 2:
        console.log("Martes");
        break;

    case 3:
        console.log("Miercoles");
        break;

    case 4:
        console.log("Jueves");
        break;

    case 5:
        console.log("Viernes");
        break;

    default:
        console.log("Fin de semana");
}
```