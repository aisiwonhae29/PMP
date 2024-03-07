let { WebSocketServer } = require('ws');
let ws = require("ws");

// const wss = new WebSocketServer({ port: 8080});
const wss = new ws({ port: 8000});

wss.on('connection', function connection(ws){
    ws.on("error", console.error);
    ws.on("message", function message(data) {
        console.log("received: %s", data);
    });
    ws.send('something');
});

