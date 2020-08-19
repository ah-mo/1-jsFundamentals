/*

let hi = () => {
      (1)
    return "hi";
};

       (2)     (3)
let newName = hi();

1- the keyword that brings our data out of our function and sends the data back to where it was called
2- we need a new variable to hold the value of the return
3- when called, the function becomes the value of the return

*/

let name = () => {
    return "Austin";
};

let myFirstName = name();
console.log(myFirstName);

function capitalizeName(name) {
    let capName = "";
    for (firstLetter in name) {
        if (firstLetter == 0) {
            capName += name[firstLetter].toUpperCase();
        } else {
            capName += name[firstLetter].toLowerCase();
        }
    }
    console.log(capName);
    return capName;
}

const myName = capitalizeName('aUStIn');
console.log(myName);

//concise body functions return by default
let concise = () => 'hello'

let greeting = concise();
console.log(greeting);


