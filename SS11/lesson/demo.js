"use strict";
// overriding
class Person {
    constructor(nameCln) {
        this.name = nameCln;
    }
    printName() {
        console.log(this.name);
    }
}
//lớp con
class Doan extends Person {
    constructor(name) {
        super(name);
    }
    printName() {
        console.log(this.name);
    }
}
let doan1 = new Doan("doan");
let person1 = new Person("hoang");
doan1.printName();
person1.printName();
//overload
class Animal {
    sound(val1, val2) {
        return val2 ? val1 + val2 : val1;
    }
}
let animal1 = new Animal();
console.log(animal1.sound(7));
console.log(animal1.sound(2, 3));
