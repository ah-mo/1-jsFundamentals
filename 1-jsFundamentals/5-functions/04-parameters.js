//parameters

/*
 let name="Austin";

 function greeting(name) {
     console.log("My name is", name);
 }
 greeting('Austin');

 1 - the parameter(s) that the function is accepting or holding;
 2- Use string interoplation or concatonation to refer to the parameter we gave to the function
 3- this si where we defined what that patameter's value is


function greeting(name, beverage) {
    console.log(`My name is ${name} and I love to drink ${beverage}!`)
    console.log(typeof name)
}

greeting('Austin', 'beer');
*/

function nameChallenge(firstName, lastName) {
    let fullName = firstName + " " + lastName;
    console.log('Hello, my name is ' + fullName + ".");
}
nameChallenge('Austin', 'Morse');
nameChallenge('Richard', 'Nixon');
