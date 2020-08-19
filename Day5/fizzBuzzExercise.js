/*
for (let x = 0; x <= 100; x += 1) {
    if (x === 0) {
        console.log(0);
    } else if ((x % 5 === 0) && (x % 3 === 0)) {
        console.log('FizzBuzz');
    } else if (x % 5 === 0) {
        console.log('Buzz');
    } else if (x % 3 === 0) {
        console.log('Fizz');
    } else {
        console.log(x);
    }
}
*/

function fizzBuzz() {
    for (let x = 0; x <= 100; x += 1) {
        if (x === 0) {
            console.log(0);
        } else if ((x % 5 === 0) && (x % 3 === 0)) {
            console.log('FizzBuzz');
        } else if (x % 5 === 0) {
            console.log('Buzz');
        } else if (x % 3 === 0) {
            console.log('Fizz');
        } else {
            console.log(x);
        }
    }
}

fizzBuzz();