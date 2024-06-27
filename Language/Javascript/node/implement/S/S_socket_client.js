const net = require('net');
const client = new net.Socket();

client.connect(12345, '127.0.0.1', () => {
    console.log('Connected to server');
    client.write('Hello, server!');
});

client.on('data', (data) => {
    console.log('Received:', data.toString());
    client.destroy();
});

client.on('close', ()=>{
    console.log('Connection closed');
})

client.on('error', (err) => {
    console.error('Error:', err);
})