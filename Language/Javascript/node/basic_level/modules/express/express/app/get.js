var express = require('express');
var app = express();

app.set('title', 'lord of the ring');
app.set('protagonist', 'prodo');
app.set('antagonist','sauron');
app.set('test', 'test')
app.get('/', (req, res)=>{
    res.send(123);
})
app.get('func')
console.log(app.get('title'));
console.log(app.get('protagonist'));
console.log(app.get(('antagonist')));
console.log(app.get('test'));
