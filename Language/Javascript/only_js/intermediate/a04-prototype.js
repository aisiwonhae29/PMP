/** 
 * * a04: prototype: Object Property
 * 
 * # description
 * 
 * - prototypes are the mechanism by which JavaScript objects inherit features from one another.
 * - every Object is linked to a prototype object from which it can inherit properties and methods.
 * - The 'prototype' property allows you to add now properties and methods to objects constructors.
 * - When we create an object using a constructor function, the object automatically inherits properties and methods from the constructor's prototype.
 */

// * case 0: basic

function Factory(vehicle, name){
    this.vehicle    = vehicle;
    this.name       = name;
}

/** 
 * * script sequence is must conformed.
 * 
 * let Goliath = new Factory("Goliath", "veteran");
 * Goliath.salute(); > doesn't work.
 * 
 */

Factory.prototype.salute = function(){
    console.log('Ready to Roll out')
}

let vulture = new Factory("vulture", "thunder");
// vulture.salute();
let tank = new Factory("tank", "reaper");
// tank.salute();

// * case 1: prototype chain.

