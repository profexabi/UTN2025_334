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
