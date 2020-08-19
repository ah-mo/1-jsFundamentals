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

/*SCOPE

What is scope?
JS has both LOCAL and GLOBAL scope
*/

//example 1
var x = 12;

function scope(){
    var x = 33;
    //var y = 10;
    console.log(x);
}
scope(); //logs 33
//console.log(y); //undefined because it's not globally scoped 
console.log(x); //logs 12

//example 2
var x = 12;

function scope(){
    x = 33;
    console.log(x);
}
scope(); //33 because the local change affects what happens later
console.log(x); //33 because it has been affected

//example 3:
var x = 1;

function scope(){
    var x = 2;
    function scope(){
        var x = 3;
        console.log(x); //3
    }
    scope();
    console.log(x); //2
}
scope();
console.log(x); //1


//example 4 contrasts with 5:
var x = 12;

function scope(){
    var x = 33;
    if (true){
        let x = 45;
        console.log(x); //45
    }
    console.log(x); //33
}

scope();
console.log(x); //12

//example 5 contrasts with 4:
var x = 12;

function scope(){
    var x = 33;
    if (true){
        var x = 45;
        console.log(x); //45
    }
    console.log(x); //45 -> var doesn't obey 'block' scope
}

scope();
console.log(x); //12
