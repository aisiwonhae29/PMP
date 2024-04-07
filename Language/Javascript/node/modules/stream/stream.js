/**
 * * stream
 * 
 * # Four types of streams in Node.js
 * 
 * - Readable   : streams from which data can be read
 * - Writable   : strams to which data can be written
 * - Duplex     : streams that are both readable and writable(e.g., network socket)
 * - Transform  : streams that manipualate data while it is read or written(e.g., compression)
 */

let Stream  = require('stream');
let fs      = require('fs');

// # case 01: readable stream

function t01(){
    let readableStream = fs.createReadStream("../zz_asset/test.txt");

    readableStream.on('data', (chunk) => {
        console.log(`Receive ${chunk.length} bytes of data.`);
    });
}

// # case 02: writable stream

function t02(){
    let writableStream = fs.createWriteStream('../zz_asset/test_output.txt');

    writableStream.write('Hello, worlds!');
    writableStream.end();
}

// # case 03: duplex stream
// - A duplex stream is commonly used in network communication, like TCP sockets.

function t03(){
    const net = require("net");
    
    const server = net.createServer((socket) => {
        socket.write("Hello from the server!");
        socket.pipe(socket);
    });
    
    server.listen(8000, () => {
        console.log("Server is listening on port 8000");
    });
    
    server.on('error', (err)=>{
        console.error(err);
    })
}

