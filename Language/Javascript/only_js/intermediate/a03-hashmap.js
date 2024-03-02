/**
 * * a_03: HashMap
 * 
 * HashMap is a data structure constructed with key value based type.
 */

// # case 1: generate hashmap

function case1(){
    let map = {};
    map['greet'] = 'hello!!';
    console.log(map['greet']);
    console.log('greet' in map)
    delete map['greet'];
    console.log(map);
}case1();

// # case 2: another way to generate hashmap

function case2(){
    let map = new Map();
    map.set(1,[1,1])
    map.set(1,'하');
    map.set({1:1})
    console.log(map.get(1))
}case2()