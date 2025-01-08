/**
 * * Backpressure
 * 
 * 
 */

const fs = require("fs");

// Create a readable stream(source)
const readableStream = fs.createReadStream('./backpressure_ex.txt', { highWaterMark: 16 * 1024 });

// Create a writable stream(destination)
const writableStream = fs.createWriteStream('./backpressure_output.txt');

// Manage backpressure mannuallly (Used when the data scale is too big to handle)
function manualProcess(){
    readableStream.on('data', (chunk) => {
        const canWrite = writableStream.write(chunk);
        if (!canWrite){
            console.log('Backpressure');
            readableStream.pause();
        }
    });
    
    writableStream.on('drain', () => {
        console.log('drain event');
        readableStream.resume();
    });
    
    readableStream.on('end', () => {
        console.log('end event');
        writableStream.end();
    });
}

// Manage backpressure automatically
function autoProcess(){
    readableStream.pipe(writableStream);
}
autoProcess();