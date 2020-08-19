// What is a variable?
// A variable is a named containter used for storing data values.
// we name the variables so that we can refer to them again.

let a = 2;

/*
    - a variable name must begin with a letter, underscore, or a dollar sign
    - numbers may foolow the above characters, but cannot come first
    - jacaScript is case sensitive - 'hello' and 'Hello' are different variable names
    - no spaces are allowed in varaible names
    -camelCase is the best practive for naming variables
    - camelCasing is a good practve for readability - let meName = 'Austin'
*/

/*
    var, let , and const
    
    -var: 'old' keyword for variables
    -let: 'new' keyword for variables. This was introduced in ES6. This is the best practice.
    -const: also 'new' keyword; declares unchangeable varaibles 


*/

let x; //declaration
console.log(x); //value of x is undefined;

x = 10;
console.log(x); //value of x is 10;

x = 33;
console.log(x); //value of x is 33;

let today = 'Great!';
const elevenfifty = 'Wonderful!';
console.log(today, elevenfifty);

today = 'Lovely';
console.log(today, elevenfifty);

elevenfifty = 'Super';
console.log(today, elevenfifty); // ERROR!
