let student = {
    name: 'Peter',
    awesome: true,
    cohort: 'JavaScript',
    week: 1,
}

for (info of student) {
    console.log(info);
}

let dogArray = ["german shepherd", "golden retriever", "newfoundland", "labrador", "boxer"];

for (dog of dogArray) {
    console.log(dog, "says woof");
}