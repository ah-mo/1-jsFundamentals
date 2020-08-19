// CALLING OR INVOKING FUNCTIONS
//syntax
/*











function greeting() {
    console.log('Hello');
};

greeting; //does nothing
greeting(); //prints "Hello";
console.log(greeting); //[Function: greeting] --> info on value; not invoked
console.log(greeting()); // Hello undefined 

// we are getting undefined because we are not returning any data from our function.



function listNumbers() {
    for (let x = 0; x <= 10; x += 1){
        console.log(x);
    }
}

listNumbers();

*/

let arr = ['This', 'is', 'really', 'cool'];
function listValues() {
    for (word in arr) {
        console.log(arr[word]);
    }
}
listValues();
