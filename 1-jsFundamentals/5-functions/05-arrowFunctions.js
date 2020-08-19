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