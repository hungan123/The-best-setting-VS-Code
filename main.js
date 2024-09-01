class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    display() {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}

function greet(person) {
    console.log(`Hello, ${person.name}!`);
}

const people = [
    new Person("Alice", 30),
    new Person("Bob", 25),
    new Person("Charlie", 35)
];

for (const person of people) {
    greet(person);
    person.display();
}

let sumAges = 0;
for (const person of people) {
    sumAges += person.age;
}

const averageAge = sumAges / people.length;
console.log(`Average age: ${averageAge}`);