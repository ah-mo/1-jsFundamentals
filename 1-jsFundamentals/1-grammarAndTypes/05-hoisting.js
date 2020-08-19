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

/*
HOISTING

*/

//example 1:
console.log(scissors);
var scissors = 'blue';

//example 1 breakdown: all variables and functions are pulled to the top automatically
var scissors;
console.log(scissors);
scissors = 'blue';

//example 2:
function hoistTest(){
    console.log(testVar);
    var testVar = 10;
    console.log(testVar);
}

hoistTest();

//example 2 breakdown:

function hoistTest(){
    var testVar;
    console.log(testVar);
    testVar = 10;
    console.log(testVar);
}

hoistTest();
