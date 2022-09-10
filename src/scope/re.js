// CON VAR
// declarar y asignar
var firstName; // Undefined
firstName = 'Oscar';
console.log(firstName);

// reasignar
var lastName = 'David';
lastName = 'Ana';
console.log(lastName);

// redeclarar
var secondName = 'David';
var secondName = 'Ana';
console.log(secondName);

// ***********************
// CON LET
//Se puede reasignar
let fruit = 'Apple';
fruit = 'Kiwi';

//Con let no se puede redeclarar variables, solo reasignar
// let fruit = 'Banana';

// ***********************
// CON CONST
const animal = 'dog';
// animal = 'cat';
// const animal = 'snake';
console.log(animal);
