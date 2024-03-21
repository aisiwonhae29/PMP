 // # a01_get

let express = require('express');
let bp = require('body-parser')
const app = express();
app.use(bp.json());

app.get('/', (req, res) => {
    res.send('hello worlds');
})
app.set('/hi', 'there');
app.get('/hi', (req, res) => {
    console.log(app.get('/hi'))
    res.send(`worlds ${req.body.name}`)
})

app.listen(3000, ()=> {
    console.log('hihihi')
})