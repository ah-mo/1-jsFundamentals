// - scope is how a computer keeps track of all the variables in a program
// - scopes can also be nested, where there is an outer scopt(think global) that encloses a inner scope (think local)

let x = 12;

function scope() {
    let x = 35;
    console.log("local:", x);
    return x;
}

scope();
console.log("global:", x);

//difference between var and let
// var is scoped to the nearest function block
//let is scoped to the nearest enclosing block

var x = 12;

function varTest() {
    var x = 33;
    if (true){
        var x = 45;
        console.log('Conditional:', x);
    }
    console.log('Function', x);
}

varTest();
console.log('Global:', x);

let object = {hi: 'hi', hello: 'hello'}

for (item in object) {
    console.log(item);
}
console.log(item);

//no keyword usually defaults to var