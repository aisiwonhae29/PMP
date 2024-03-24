/**
 * * Line By Line: This module helps you to read large text files, line by line without buffering the files into memory.
 * 
 */

let LineByLineReader = require('line-by-line');
let lr = new LineByLineReader('test.txt');

// # case 01: Synchronous processing of lines

function test1(){
    lr.on('error', function (err){
        console.log(err);
    });
    lr.on('line', function(line){
        console.log(line);
    });
    lr.on('end', function() {
        
    })
}

// # case 02: Asynchronous processing of lines
function test2(){
    lr.on('error', function (err){
        console.log(err);
    });
    lr.on('line', function (line){
        lr.pause();
        setTimeout
    })
};