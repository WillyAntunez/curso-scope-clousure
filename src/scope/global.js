// variables

// Conceptos básicos:

var a; // declarando
var b = 'b'; // declarar y asignar (inicializar)
b = 'bb'; // reasignar variable
var a = 'aaa'; //redeclaración

// Global Scope:
// Son accesibles desde cualquier parte del código
var fruit = 'Apple';

function bestFruit() {
    console.log(fruit);
}

bestFruit();

// Otra forma de declarar variables globales
// Si se asigna un valor a una variable que no ha sido declarada, entonces esta variable va a tener un scope global
function countries() {
    country = 'Colombia';
    console.log(country);
}

console.log(country);
