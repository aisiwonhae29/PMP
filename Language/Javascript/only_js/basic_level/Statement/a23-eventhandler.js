/**
 * * a23: event handler
 * 
 * # Event Emitter: provides us with multiple functionalities to work with events, such as teh creation of events, management of communication channels, and emission of events, among other features.
 * 
 * # basic event handling methods
 * 
 * - Event Subscription: On
 * - Event Publishing: Emit
 * 
 */

const event = require('events');

// # case 1: basic event cycle

function case1(){
    class Animal extends event.EventEmitter {}
    let animal = new Animal();

    animal.on('dog', ()=>{
        console.log('멍멍!');
    });
    animal.on('cat', ()=>{
        console.log('야옹야옹!');
    })
    animal.emit('dog');
    animal.emit('cat');
}
// case1();

// # case 2: with out EventEmitter, donesn't make sense.

function case2(){
    class test{};
    let t1 = new test();
    t1.on('hi', ()=>{
        console.log('how are you');
    })
    t1.emit('hi');
}

// # case 3: various function usecase

function case3(){
    class test extends event.EventEmitter {};
    
}
