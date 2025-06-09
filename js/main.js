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


// TODO, callbacks y Web APIs