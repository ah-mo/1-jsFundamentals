// The for in statement loops over an object's enumerable properties
// -enumerable means "countable"

let student = {
    name: 'Peter',
    awesome: true,
    cohort: 'JavaScript',
    week: 1,
}

for (info in student) {
    console.log(info);
    console.log(student[info])

}

let dogArray = ["german shepherd", "golden retriever", "newfoundland", "labrador", "boxer"];

for (dog in dogArray) {
    console.log(dog);
    console.log(dogArray[dog]);
}

let name = "zaCH";

for (cap in name) {
    console.log((name.toUpperCase()[cap]) + name.substring(1).toLowerCase());
}

let name = "auSTIn";
let capName;

for (i in name) {
    if (i == 0) {
        capName = name[i].toUpperCase();
    } else {
        capName += name[i] .toLowerCase();
    }
}
console.log(capName);