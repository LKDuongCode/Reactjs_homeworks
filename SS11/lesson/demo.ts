// overriding
class Person {
    name: string;
    constructor(nameCln:string){
        this.name = nameCln;
    }
    printName(){
        console.log(this.name);
    }
}
//lớp con
class Doan extends Person {
    constructor(name:string){
        super(name)

    }
    printName(): void {
        console.log(this.name);
    }
}
let doan1 = new Doan("doan");
let person1 = new Person("hoang")

doan1.printName()
person1.printName()

//overload
class Animal{
    sound(val1:number):number;
    sound(val1:number,val2:number):number;
    sound(val1:number,val2?:number):any{
      return val2?val1+val2:val1;
    }

}

let animal1 = new Animal();
console.log(animal1.sound(7));
console.log(animal1.sound(2,3));