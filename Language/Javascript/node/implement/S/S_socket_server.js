const net = require('net');
const server = net.createServer((socket) => {
    console.log('Client connected');

    socket.on('data', (data) => {
        console.log('Received:', data.toString());
        socket.write('Hello, client!');
    });

    socket.on('end', () => {
        console.log('Client disconnected');
    });

    socket.on('error', (err) => {
        console.error('Error', err);
    })
})

const PORT = 12345;

server.listen(PORT, ()=>{
    console.log(`Server listening on port ${PORT}`);
})