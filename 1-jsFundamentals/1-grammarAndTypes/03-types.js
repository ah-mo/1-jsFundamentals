//  booleans
//  - a boolean has two possible values of either true or false;
// false != 'false';

let on = true;
console.log(on);

let off = false;
console.log(off);

// Null
// - null is an empty value. This of it as an empty container: nothing is in it, but it still exists as a space to fill.

let empty = null;
console.log(empty);

// Undefined
//  - no value is assigned and does not act like an empty container 

let undef = undefined;
console.log(undef);

let correct;
console.log(correct);

//  NUlL VS UNDEFINED
/*
    - null is a container with nothing in it
    - undefined is when a variable has never been set or hasn't been created yet.
*/

// Numbers
// - numbers are literally just numbers.

let degrees = 90;
console.log(degrees);

let precise = 999999999999999;
console.log(precise);

let rounded = 9999999999999999;
console.log(rounded);

let notQuite = 0.2 + 0.1;
console.log(notQuite);

let javaScriptMath = (0.2 * 10 + 0.1 * 10) / 10;
console.log(javaScriptMath);

let convert = Number('123');
console.log(convert);

console.log(typeof convert);

// Strings
// - strings are used to represent text and they are wrapped in either single or double quotes ''""

let stringOne = "double quotes";
let stringTwo = 'single quotes';
console.log(stringOne, stringTwo);

console.log('"dont\'t!" said the person');//putting quotes in there

console.log('"dont\'t!" \\\\\\ said the person'); //how to print back slashes

// numbers vs strings
let first = 1050 + 100; //number - addition
let second ='1050' + '100'; //string - concatenated

console.log(first);
console.log(second);

let third = 1050 + '100';
console.log(third);//coercion

//Objects
//-Objects are used to store many values instead of a singular value

let frodo = {
    race: 'hobbit',
    rings: 1,
    cloak: true,
};

// Arrays
// - Arrays are containers that hold lists of items

let burritos = ['large', 4, true];

/*
    Challenge:
    Set 7 (or 8) variables:
    firstName
    lastName
    houseNumber
    aptNumber (if applicable)
    street
    city
    state
    zipcode
    Set each variable to its respective type.
    console.log your whole address (with a space between variables).
*/

let houseNumber = 1117;
let firstName = 'Austin';
let lastName = 'Morse';
let zipcode = 46360;
let city = 'Michigan City';
let street = "Wabash St.";
let state = 'IN';

console.log(firstName, lastName + ',', houseNumber, street + ',', city + ',', state, zipcode);

//Strings - properties
//- properties are qualities associated with a data type
//- strings have properties

let myName = 'Austin';
console.log(myName.length)

//Strings - Methods
// - methods are tools that help us maniuplute data
// - .property vs .methods()

let myName = 'Austin';
console.log(myName.toUpperCase()); //method changes string to uppercase

let home = 'My home is in MC';
console.log(home.includes('MC')); //method checks if a certain string is included in another string

let sentence = 'This sentence will be split into individual parts.';
console.log(sentence.split(' '));
