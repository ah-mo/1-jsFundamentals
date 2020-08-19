/*
first pass: stores our variable declarations (essentially says, "hey, I know a variable of x is defined, so let me store that in my memory so I know it is there"), but does not assign them their value. Anything that needs hoisting, gets hoisted. 

second pass: assigns the values of our variable and executes any hoisted source code

- let/const does not get hoisted while var does
*/

console.log(name);
var name = "Austin";

b();

function b() {
    console.log('I have been hoisted!');
}

newFunction();

let newFunction = () => {
    console.log('I have not been hoisted!')
}