var express = require('../../../../../새 폴더/node_modules/express');
var app = express();

app.set('title', 'lord of the ring');
app.set('protagonist', 'prodo');
app.set('antagonist','sauron');
app.set('test', 'test')
console.log(app.get('title'));
console.log(app.get('protagonist'));
console.log(app.get(('antagonist')));
console.log(app.get('test'));