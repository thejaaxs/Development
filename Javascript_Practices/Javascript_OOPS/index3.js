class Shape {
    describe() {
        console.log("This is a Shape !");
    }
}
class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    getArea() {
        return Math.PI * this.radius ** 2;
    }
}
class Square extends Shape {
    constructor(side) {
        super();
        this.side = side;
    }
    getArea() {
        return this.side ** 2;
    }
}

const square = new Square(4);
square.describe();
console.log(square.getArea());

const circle = new Circle(3)
circle.describe();
console.log(circle.getArea());

// Employee & Manager

class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }
}
class Manager extends Employee {
    constructor(name, salary, teamSize) {
        super(name, salary);
        this.teamSize = teamSize;
    }
    getDetails() {
        console.log(`${this.name} earns ${this.salary}, manages ${this.teamSize} People`);
    }
}
const mgr = new Manager("Thejas", 250000, 150);
mgr.getDetails();

// User Authentication (with private field)
class User {
    #password;
    constructor(username, password) {
        this.username = username;
        this.#password = password;
    }

    login(inputPassword) {
        return this.#password === inputPassword;
    }
    changePassword(oldPass, newPass) {
        if (this.#password === oldPass) {
            this.#password = newPass;
            console.log("Password Changed");
        }
        else {
            console.log("Old Password Incorrect !");
        }
    }
}
const user = new User("Thejas", "@123");
console.log("Login : " + user.login("@123"));
user.changePassword("@123", "@abc");
console.log(user.login("@abc"));

console.log("\n");

// Product & Shopping Cart

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}
class Cart {
    constructor() {
        this.products = [];
    }
    addProduct(product) {
        this.products.push(product);
    }
    removeProduct(productName) {
        this.products = this.products.filter(p => p.name !== productName);
    }

    getTotal() {
        return this.products.reduce((sum, p) => sum + p.price, 0);
    }
}

const cart = new Cart();
cart.addProduct(new Product("Book", 200));
cart.addProduct(new Product("Pen", 20));
console.log("Total : " + cart.getTotal());
cart.removeProduct("Pen");
console.log("Total " + cart.getTotal());