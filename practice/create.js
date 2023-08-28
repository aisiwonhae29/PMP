var path = require('path');
var express = require('express');

var app = express();

app.set('im', 'iron man');

console.log(app.get('im'));

