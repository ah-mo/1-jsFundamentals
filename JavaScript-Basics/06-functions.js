function hello() {
    console.log("Hello, world!");
}
hello();

hello();
hello();

function bullsWin(){
    console.log("Bulls win! Bulls win!");
}
bullsWin();
bullsWin();
bullsWin();
bullsWin();
bullsWin();

function numberEntered(num){
    console.log("The number you entered was: ", num)
}

numberEntered(5);
numberEntered(4);
numberEntered(3);
numberEntered(2);
numberEntered(1);

function addAnyTwoNumbers(x,y){
    console.log(x + y);
}

addAnyTwoNumbers(4, 5);
addAnyTwoNumbers(6, 11);
addAnyTwoNumbers(7, 8);

function twoNumberDifference(x,y){
    console.log(x - y);
}
twoNumberDifference(5, 7);

function subractTwoNumbers(firstNum, secondNum){
    console.log(firstNum - secondNum);
}
subractTwoNumbers(5, 7);

function getMyBattingAverage(atBats, numberOfHits){
    let myAverage = numberOfHits / atBats;
    return myAverage;
}
console.log(getMyBattingAverage(250, 91));

function add(x, y){
    let sum = x + y;
    return sum;
}
console.log(add(2,6));

function govName(first, last){
    let fullName = last + ", " + first;
    return fullName;
}
console.log(govName("Austin", "Morse"))

function cost(quantity, price){
    let totalCost = "$" + (quantity * price)*1.07;
    return totalCost;
}
console.log(cost(2, 2.00));



