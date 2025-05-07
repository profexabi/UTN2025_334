# UTN2025_334 :books:
Repositorio de la TUP UTN 2025, Comision 334

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