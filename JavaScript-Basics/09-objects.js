let bobAlcorn = {
    name        : "Bob Alcorn",
    age         : 59,
    vocation    : "Chief Operating Officer",
    isRetired   : false
};

console.log(bobAlcorn);
console.log(bobAlcorn.name);
console.log(bobAlcorn.age);

console.log(bobAlcorn.middleName);

let player = {
    username        : "NoRemorse",
    power           : "Archer",
    toughness       : 98
}

console.log(player.username);

let friend = {
    name        : "Nek",
    age         : 29,
    job         : "Medical Doctor",
    isCool      : true,
    pokemonCollected : 151
}

console.log(friend.name + " has collected " + friend.pokemonCollected + " Pokemon. Congratulations!");

let movie = {
    name    : "Django Unchained",
    year   : 2012,
    runtime : "2 hours and 45 minutes"
}

console.log("The film " + movie.name +  " was released in the year " + movie.year + " and has a runtime of " + movie.runtime + ".");

let car = {
    make        : "Honda",
    model       : "Element",
    year        : 2008,
    trim        : "LX",
    mileage     : 349102,
    mpg         : 19.72
}
console.log("I'm currently driving a " + car.year + " " + car.make + " " + car.model + " " + car.trim + ". It currently has " + car.mileage + " miles on it.")