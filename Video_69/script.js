// let obj = {
//     a: 1,
//     b: "Thejas"
// };
// console.log(obj);

// let animal = {
//     eat: true
// }
// let rabbit = {
//     jumps: true
// }

// rabbit.__proto__ = animal;  // This is the Setting the prototype

// Animal Class 
class Animal {
    constructor(name) {
        this.name = name;
        console.log("Class Is Created !");
    }
    eats() {
        console.log("I'm Eating !");
    }
    jumps() {
        console.log("I'm Jumping !");
    }
}

class Lion extends Animal {
    constructor(name) {
        super(name);
        console.log("Object is Created And He's a Lion !");
    }
    eats() {
        super.eats(); // to call the above ones and also the second one !
        console.log("Eating Animals !");
    }
}
let leapord = new Animal("Jimmy");
console.log(leapord);

let lion = new Lion("Shera");
console.log(lion);