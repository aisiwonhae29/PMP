/**
 * a01: Object_about
 * 
 * # case 0: Obeject concept
 * # case 1: Object.create()
 * # case 2: Object.keys()
 * # case 3: Object.values()
 * # case 4: Object.entries()
 * # case 5: Object.assign()
 * # case 6: Object.defineProperty()
 * 
 */

// # Object Concept

let example = {
    name    : ["bob", "smith"],
    age     : 32,
    act     : function(){ console.log("play bascket ball"); },
    intro   : function(num){ console.log(`Hi, Myname is ${this.name[num]}`) } // In object, "this" refers about object.
}

// # case 1: Object.create()

function test1(){
    const personPrototype = {
        greet(){
            console.log("hello");
        }
    }

    let person = Object.create(personPrototype);
    // person.greet(); 
}test1();

function warcraft(soldier){
    this.soldier = soldier;
    console.log(`${soldier} is serve for my man..`)
}

let footman = new warcraft("footman");

function nothing(){
    console.log("nothing can be a constructor?")
};
let yes = new nothing();