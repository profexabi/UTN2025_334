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

