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