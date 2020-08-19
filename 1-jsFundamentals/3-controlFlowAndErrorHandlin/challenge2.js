/*
CHALLENGE
************
    Use this string: let name = 'zAchARy';
    Bronze:
    Write an if else statement that looks at the first letter of a string. If it is uppercase, console.log the string;
    If it is not console.log 'hey, this isn't written correctly'
    Silver:
    If the first letter of a string is uppercase, only console.log that letter
    if it is not, console.log the rest of the string Without the first letter, and change them to lowercase
    Gold:
    If the first letter of a string is uppercase, console.log that that first letter of a string  plus the rest of the string to lowercase
    If it is not, console.log the first letter of the string to uppercase plus the rest of the string to lowercase
*/

let name = 'zAchARY';
let firstLetter = name.charAt(0);


if (firstLetter === firstLetter.toUpperCase()) {
    console.log(name);
} else {
    console.log('Hey, this isn\'t written correctly.')
}

if (firstLetter === firstLetter.toUpperCase()) {
    console.log(firstLetter);
} else {
    console.log(name.substring(1).toLowerCase())
}

if (firstLetter === firstLetter.toUpperCase()) {
    console.log(firstLetter + name.substring(1).toLowerCase())
} else {
    console.log(firstLetter.toUpperCase() + name.substring(1).toLowerCase())
}

let myName = 'Ingeborg';
console.log(myName.substring(1, 6)); //second arg is position
console.log(myName.substr(0, 2)); //second arg is # of chars

