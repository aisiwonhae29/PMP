let wss = require('ws');                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            


let ws = new wss('http://localhost:8080');

ws.on('error', console.error);
ws.on('open', function open(){
    ws.send('something');
});
ws.on('messages', function message(data){
    console.log(data);
})