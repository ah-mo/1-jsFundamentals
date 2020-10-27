class User {
    constructor(username, password){
        this.name = username;
        this.password = password;
        this.type = "Trial User"
    }
    greet(){
        console.log('Welcome back, ' + this.name);
    }
    status(){
        console.log('Current status: ' + this.type);
    }
}

//Instance of the class/new object
var anonDude = new User("Anonymouse");
anonDude.greet();
anonDude.status();

//super 
class BronzeLevelUser extends User {
    //We add CCinfo property to the user here...
    constructor(username, password, ccinfo, favColor) {
        super(username, password);
        this.type = "Bronze User";
        this.ccinfo = ccinfo;
        this.col = favColor;
    }

    getInfo(){
        console.log(this.username, this.password, this.type, this.ccinfo, 'favorite color: ' + this.col);
    }
}

var bronzeGuy = new BronzeLevelUser("Bronze Dude", "bronze7589", "4242424242424242", "blue");
bronzeGuy.greet();
bronzeGuy.getInfo();
console.log(bronzeGuy);