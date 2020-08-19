//syntax


/*
    switch (case/evaluation that needs to be met) {
        case "condition":
            run some code;
            break;
        case "other condition":
            run more code;
            break;
        default:
            run default code;
    }
*/

//Notes on Switch Statements
/*
    - switch statements execute a block of code depending on different cases.
    - the switch statement is often used together with a break or a default keyword (or both). These are both optional.
    - The break keyword breaks out of the switch block. This will stop the execution of more code or case testing inside of the block. If a breakis omitted, the next code block in the switch statement is executed.
    - The default keyword specifies some code to run if there is no case match. There can only be ONE default keyword in a switch. While this is optional, we recommend that you use it as it takes care of unexpected cases.
*/

let officeCharacter = "Jim ";

switch(officeCharacter) {
    case "Michael":
        console.log("My mind is going a mile an hour");
        break;
    case "Dwight":
        console.log("Perfektenschlag");
        break;
    case "Jim":
        console.log("Bears. Beets. Battlestar Galactica");
        break;
    default:
        console.log(`I'm sorry, ${officeCharacter}, but do I know you?`)
}

/*
CHALLENGE
************
    Write a dessert menu;
    If the dessert is pie, console.log 'Pie, pie, me oh my!'
    If the dessert is cake, console.log 'Cake is great!'
    If the dessert is ice cream, console.log 'I scream for ice cream!'
    Otherwise, have your switch statement console.log 'Not on the menu.'
*/

let dessert = "ice crea"
switch(dessert) {
    case "pie":
        console.log("Pie, pie, me oh my!")
        break;
    case "cake":
        console.log("Cake is great!")
        break;
    case "ice cream":
        console.log("I scream for ice cream!")
        break;
    default:
        console.log("Sorry, but " + dessert + " is not on the menu.")
}

