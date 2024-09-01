// Type annotations
let isDone: boolean = false;
let age: number = 30;
let username: string = "John";

// Arrays and tuples
let numbers: number[] = [1, 2, 3];
let user: [string, number] = ["Alice", 25];

// Enum
enum Color { Red, Green, Blue }
let c: Color = Color.Green;

// Interface
interface Person {
    name: string;
    age: number;
    greet(): void;
}

// Class implementing interface
class Employee implements Person {
    constructor(public name: string, public age: number, private position: string) {}
    greet() {
        console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
    }
    getPosition(): string {
        return this.position;
    }
}

// Generics
function getArray<T>(items: T[]): T[] {
    return new Array<T>().concat(items);
}

let stringArray = getArray<string>(["one", "two", "three"]);
let numberArray = getArray<number>([1, 2, 3]);

// Union types
function combine(input1: string | number, input2: string | number) {
    if (typeof input1 === 'string' || typeof input2 === 'string') {
        return input1.toString() + input2.toString();
    }
    return input1 + input2;
}

// Using the class and function
const emp = new Employee("Alice", 30, "Developer");
emp.greet();
console.log(emp.getPosition());
console.log(combine(10, 20));
console.log(combine("Hello, ", "World!"));
