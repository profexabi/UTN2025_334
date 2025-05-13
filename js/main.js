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

// TODO -> Retomar desde Objetos globales
