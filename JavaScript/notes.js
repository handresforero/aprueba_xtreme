/**
 * arrow functions =>
 */

const sumar = (a,b) => a+b;

const saludar = () => {

};

/**
 * MANIPULACIÓN DE DATOS -- ARRAYS
 * 
 */

const autos = []

// push para agregar elemento
// pop para quitar un elemento. >> pop() quita el último
// slice partir el arreglo >> slice(0,3) anterior al index 3

let frutas = ["peras", "manzanas", "naranjas", "mango"];

for (let i = 0; i < frutas.length; i++) {
    frutas[i]
};

// for each necesita como parámetro una función

frutas.forEach(function(fruta) {
    fruta
});

// con arrow function

frutas.forEach((fruta) => fruta);

/**
 * Map crea un nuevo array con los llamados en la función
 */

let almuerzos = [
    {principal: "arepa", postre: "helado"},
    {principal: "tacos", postre: "torta de queso"},
    {principal: "pizza", postre: "galletas"},
];

let PlatosPrincipales = almuerzos.map(function(almuerzo){
    return almuerzo.principal
});

let PlatosArrow = almuerzos.map(almuerzo => almuerzo.principal);

let numeros = [15,20,25,30];

// filter
let dato = numeros.filter(num => num>20);

// find // encuentra el primer número dependiendo la condición especificada
let mydato = numeros.find(num => num>20);
// ubicar el primer impar
let impar = numeros.find(num => num%2 ===1);

// includes: evalua que el valor sea igual al buscado
let myInclude = numeros.includes(30); //retunr boolean

// some; permite comobravar si al menos un elemendo de mi array cumple com alguna condición
let mySome = numeros.some(num => num>29); // return booblean

// every: compara si todos los elementos cumplen la condicion

let myevery = numeros.every(num => typeof nume === "string");

/**
 * Manipulación de strings
 */

let texto = "Aprendiendo JavaScript en Aprueba Extreme";

let datost = texto.slice(5) // corte desde 0 hasta 4 y devyekve lo posterior

Object.values(almuerzos);
Object.keys(almuerzos);

// para saber si un objeto esta vacio se accede a las keys

const mynum = Math.random();

const mydate = new Date()

mydate.getFullYear() // solo el año
mydate.getUTCDay() // day of week

/**
 * DOM
 * Document Object Model
 * Interfás para documentos HTLM y XML
 * 
 * documet > element > nodeList > attribute > NamedNodeMap
 */