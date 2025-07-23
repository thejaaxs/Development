class Car {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }
    startEngine() {
        console.log(`${this.brand} : ${this.model} engine started !`);
    }
}

let tesla = new Car("tesla", "Model-Y");
console.log(tesla);
tesla.startEngine();

let bmw = new Car("BMW", "X7-M");
console.log(bmw);
bmw.startEngine();