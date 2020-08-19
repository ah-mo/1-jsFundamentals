//function expressions

//syntax
/*
    (1)
    let hi = function greeting() {
        console.log('something')

    }
    1 The variable 'hi' is now representative of the function 'greeting()'

*/

let hi = function greeting() {
    console.log('Hello');
}

console.log(hi());

//Notes
/*
    - difference between declaration and expression
    *declaration gets hoisted
    *expression does not
*/