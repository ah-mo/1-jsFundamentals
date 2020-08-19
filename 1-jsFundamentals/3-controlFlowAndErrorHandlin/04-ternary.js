//TERNARY
//- Ternaries are a shortcut to writing if, if/else, else/if statements

// SYNTAX
/*
 ? ==> if
 : ==> else

 (condition) ? console.log('run code') : console.log('default');
*/

let num = 6;
(num > 0) ? console.log('yes') : console.log('no');

if (num > 6) {
    console.log('yes');
} else {
    console.log('no');
}

(num === 0) ? console.log('Hello') : (num < 0) ? console.log('Hi') : console.log('Goodbye');

(num === 0) ? console.log('Hello')
    : (num < 0) ? console.log('Hi')
    : console.log('Goodbye');
