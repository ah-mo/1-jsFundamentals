/*
************
  ELSE IF
************
*/
/*
CHALLENGE
************
    Look up the format for an Else If statement
    Set a variable of age and give it a number of your choice
    Create an else if statement that checks the following:
    If the age is 17 or younger, console.log 'Sorry, you're too young to do anything.'
    If the age is at least 18, console.log 'You can vote!'
    If the age is at least 21, console.log 'You can drink!'
    If the age is at least 25, console.log 'You can rent a car!'

*/
/*
let age = 19;

if (age >= 18 && age < 21){
    console.log('You can vote!')
} else if (age >= 21 && age < 25){
    console.log('You can drink!')
} else if (age >= 25 && age < 55) {
    console.log('You can rent a car!')
} else if (age >= 55) {
    console.log('You\'re eligible for the Senior Citizen discount!')
} else {
    console.log('Sorry, you\'re too young to do anything.')
}
*/

//let age2 = 19;
//(age2 === 19) ? (age2 >= 18 && age < 21) console.log('You can vote!') : ? (age2 >=21 && age2 < 25) console.log('You can drink!') : ? (age2 >= 25 && < 55) console.log('You can rent a car!') : ? (age2 >= 55) console.log('You get the senior discount!') : console.log('Sorry, you\'re too young to do anything cool.')

let age = '56';
let vote = 'You can vote';
let drink = 'You can drink';
let rent = 'You can rent a car';
let discount = 'You can get the senior citizen discount';

(age >= 55) ? console.log(`${vote} and ${drink.toLowerCase()} and ${rent.toLowerCase()} and ${discount.toLowerCase()}!`)
    : (age >= 25) ? console.log(`${vote} and ${drink.toLowerCase()} and ${rent.toLowerCase()}.`)
    : (age >= 21) ? console.log(`${vote} and ${drink.toLowerCase()}.`)
    : (age >= 18) ? console.log(`${vote}.`)
    : (age < 18 && age >= 0) ? console.log('Sorry, you are too you to do anything cool.')
    : console.log('Please use a valid age.')
