# ejs 

>quote: https://www.tutorialspoint.com/how-to-use-ejs-in-javascript

### setting

- npm install ejs

- const ejs = require('ejs');

### usage

- create EJS template

const template = '<h1> Hello <%= name %></h1>';

- simple render

const data = { name: 'World'};
const html = ejs.render(template, data);