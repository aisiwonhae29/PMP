# WebSocket

### What is WebSocket

- full duplex communication technique


### javascript

- use websocket module for construct.

- clients controlled by json clients = { name:address }

- in connection flow, we can contraint users with const connection = request.aacept(null, request.origin);

- when we send msg, use clients[key].sendUTF(msg.utf8Data); // for statement makes to give all msg to everyone.

**required elements**

1. server set

<details><summary>code</summary>
```
const server = http.createServer();
server.listen(webSocketsServerPort);
```
</details><br>


2. websocketServer instance set

<details><summary>code</summary>
```
const wsServer = new webSocketServer({
    httpServer: server
});
```
</details><br>


3. make react function with receive msg.

- essential point

need connection logic

<details><summary>'on' case</summary>

```
   wsServer.on('request', function (request) {
     var userID = getUniqueID();
     console.log((new Date()) + ' Recieved a new connection from origin ' + request.origin + '.');

     // You can rewrite this part of the code to accept only the requests from allowed origin
     const connection = request.accept(null, request.origin);
     clients[userID] = connection;
     console.log('connected: ' + userID + ' in ' + Object.getOwnPropertyNames(clients));

     connection.on('message', function(message) {
       if (message.type === 'utf8') {
         console.log('Received Message: ', message.utf8Data);

         // broadcasting message to all connected clients
         for(key in clients) {
           clients[key].sendUTF(message.utf8Data);
           console.log('sent Message to: ', clients[key]);
         }
       }
     })
   });
```
</details><br>

<details><summary>'onmessage' case</summary>

```

```
</details><br>