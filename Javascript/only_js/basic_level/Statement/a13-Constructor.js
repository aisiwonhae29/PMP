// a13 - Constructor

// case 1: create js class

class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

let siwon = new Person('siwon, 33');
console.log(siwon)


// case 2: Constructors with Contructor Functions

function Person2(name, age){
    this.name = name;
    this.age = age;
}

let jinyoung = new Person2('jinyoung', 35);
console.log(jinyoung);