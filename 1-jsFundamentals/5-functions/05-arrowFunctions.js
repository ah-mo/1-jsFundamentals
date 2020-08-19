/*
    (1)     (2)
let hi = () => {
    console.log('hi');
}

1. Fat arrow functions are function expressions, and therefore must be placed in a variable.
2. We use a reserved JS symbol called the fat arrow (=>)
*/

let hello = () => {
    console.log('Hello');
};
hello('austin');

let hey = () => console.log('hey');
hey();

//normal function declaration
function coffee(){
    return 'coffee is good';
}

//normal function expression
let tea = function(){
    return 'tea is healthy';
}

console.log(coffee());
console.log(tea());

//arrow functions are *always* anonymous
//arrow function expression 
//ARROW FUNCTIONS DO NOT GET HOISTED

let hotChocolate = () => {
    return 'hot chocolate is king';
};

console.log(hotChocolate());

let animals = (kittens, puppies) => {
    return `I have ${kittens} cat(s) and ${puppies} dog(s)`;
};

console.log(animals(3,2));
console.log(animals(0,0));

//concise vs. block body 
//concise body SINGLE PARAMATERS (here, it's (x)) DON'T NEED THE ()
let apples = (x) => `There are ${x} apples`;
console.log(apples(10));

//block body SINGLE PARAMATERS (here, it's (x)) DON'T NEED THE ()
let bananas = (x) => {
    return `There are ${x} bananas`;
}
console.log(bananas(5));

//return must explicitly be written in block-body function

let func = () => 'hi';
console.log(func());

let secondFunc = () => 'hi';
console.log(secondFunc());