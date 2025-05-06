# UTN2025_334 :books:
Repositorio de la TUP UTN 2025, Comision 334

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