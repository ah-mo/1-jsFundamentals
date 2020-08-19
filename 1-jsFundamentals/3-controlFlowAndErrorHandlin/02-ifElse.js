// IF ELSE statements
// syntax
/*
if (condition) {
    something cool halppens here
} else {
    something else happens
}
*/
/* -----WEATHER
let weather = 75;
if (weather < 70) {
    console.log('Wear a jacket');
} else {
    console.log('No jacket necessary');
}
------WEATHER*/
/*
CHALLENGE
************
    Bronze:
    Write an if else statement that checks your name;
    If it is your name, console log '<name>'
    If the name does not match, console.log 'Hello, what is your name?'
    Silver:
    If It is your name, console log 'Hello, my name is <name>'
    Gold:
    If it is not your name, console log 'Hello, is your name <name here> ?'
*/

let name = 'Austin';
if (name === 'Austin') {
    console.log('Hello, my name is ' + name + '.');
} else {
    console.log('Hello, what is your name?');
}
name = 'Jack';
if (name === 'Austin') {
    console.log('Hello, my name is ' + name + '.');
} else {
    console.log('Hello, what is your name?');
}
if (name === 'Austin') {
    console.log(`Hello, my name is ${name}.`);
} else {
    console.log(`Hello, is your name ${name}?`);
}

