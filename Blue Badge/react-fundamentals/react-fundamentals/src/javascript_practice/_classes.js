//ES6 JS Classes
class User {
    constructor(first, last, e){
        this.f = first;
        this.l = last;
        this.email = e;
    }
    //Method 1
    greet(){
        console.log('Welcome back, ' + this.name);
    }
    //Method 2
    status(){
        console.log('Current status: ' + this.type);
    }
}

// //Instance of the class/new object
// var anonDude = new User("Anonymous dude");

// //we can now use the instance and the . operator to access the 2 mentods
// anonDude.greet();
// anonDude.status();

// //Another instance of the class
// var anonLady = new User("Anonymous lady");
// anonLady.greet();
// anonLady.status();

// var jeff = new User("Jeff");
// jeff.greet();
// jeff.status();

// var austin = new User("Austin");
// austin.greet();
// austin.status();

// var rico = new User("Rico");
// rico.greet();
// rico.status();

var userOne = new User("Paul", "O'Connor", "poconnor@elevenfifty.org");
console.log(userOne.first);//undefined
console.log(userOne.f); //Paul
console.log(userOne.l);//O'Connor
console.log(userOne.e);//poconnor@elevenfiftty.org
console.log(userOne);

class Player {
    constructor(name, number, averagePoints){
        this.name = name;
        this.num = number;
        this.avg = averagePoints;
    }
    greet(){
        console.log('Welcome to the stage, Player #' + this.num + ', ' + this.name + '!' + ' They average ' + this.avg + ' points per game!')
    }
}

var playerOne = new Player("Austin", "17", "250");
playerOne.greet();

class Car {
    constructor(year, make, model, mileage, feature){
        this.y = year;
        this.mk = make;
        this.mo = model;
        this.mil = mileage;
        this.f = feature;
    }
    carDetails(){
        console.log('This ' + this.y + ' ' + this.mk + ' ' + this.mo + ' comes equipped with ' + this.f + ' and only has ' + this.mil + ' miles on it!') 
    }
}

var myCar = new Car(2008, "Honda", "Element", 300000, "bluetooth sound" );
myCar.carDetails();