class User {
    constructor(name) {
        this.name = name;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        if (value.length < 4) {
            console.log("Name is too Short !");
            return;
        }
        this._name = value;
    }
}

let boy = new User("Aman");
console.log(boy.name);

boy.name = "Thejas";
console.log(boy.name);

// InstanceOf is used to know the object of the class !