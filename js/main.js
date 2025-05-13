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


