class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hi, I'm ${this.name} & I'm ${this.age} Years Old !!`);
    }

    birthDay() {
        this.age++;
        console.log(`Happy Birthday ${this.name} !, You are now ${this.age} Years Old !`);
    }
}

let man = new Person("Thejas", 20);
man.greet();
man.birthDay();

console.log("\n");

// Inheritance (Subclassing)

class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(`${this.name} makes a sound !`);
    }
}
class Dog extends Animal {
    constructor(name) {
        super();
        this.name = name;
    }
    speak() {
        console.log(`${this.name} barks !`);
    }
}
let cat = new Animal("Tim");
cat.speak();

let dog = new Dog("Jimmy");
dog.speak();

// Use of Encapsulation ( # - Ecma script )

class BankAccount {
    #balance = 0;

    deposit(amount) {
        if (amount > 0) this.#balance += amount;
    }

    withdraw(amount) {
        if (amount > 0 && amount <= this.#balance) this.#balance -= amount;
    }

    getBalance() {
        return this.#balance;
    }
}
const acc = new BankAccount();
acc.deposit(100);
console.log(acc.getBalance());
acc.deposit(100);
console.log(acc.getBalance());
acc.withdraw(100);
console.log(acc.getBalance());

// Person Class

class PersoN {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        console.log(`Hey ${this.name} ! and I'm ${this.age} years old !`);
    }
}
let women = new PersoN("Priyanka", 20);
women.introduce();

//  Circle Class

class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    getArea() {
        return Math.PI * this.radius ** 2;
    }
    getCircumference() {
        return 2 * Math.PI * this.radius;
    }
}
let c = new Circle(10);
console.log(`Area : ` + c.getArea());
console.log(`Circumference : ` + c.getCircumference());

console.log('\n');

// Temperature Converter

class Temperature {
    constructor(celcius) {
        this.celcius = celcius;
    }
    toFahrenheit() {
        return this.celcius * (9 / 5) + 32;
    }
    toKelvin() {
        return this.celcius + 273;
    }
}
let temp = new Temperature(100);
console.log("Kelvin : " + temp.toKelvin());
console.log("Fahrenheit : " + temp.toFahrenheit());

// Movie Class

class Movie {
    constructor(title, director, year) {
        this.title = title;
        this.director = director;
        this.year = year;
    }

    isClassic() {
        return this.year < 2000;
    }
}
let kgf = new Movie("Kantara", "Rishab Shetty", 2024);
let matrix = new Movie("Matrix", 'Wachonski', 1999);
console.log(`Is Classic : ` + kgf.isClassic());
console.log("Is Classic : " + matrix.isClassic());

// Rectangle Comparator

class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    getArea() {
        return this.width * this.height;
    }
    getPerimeter() {
        return 2 * this.width * this.height;
    }
}
function compareRectangles(r1, r2) {
    return r1.getArea() > r2.getArea() ? r1 : r2;
}
let r1 = new Rectangle(10, 20); 
let r2 = new Rectangle(20, 30);
console.log("Bigger : " + compareRectangles(r1, r2).getArea())
// console.log(`Area : ` + r1.getArea());
// console.log(`Perimeter : ` + r1.getPerimeter());