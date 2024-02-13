// # a02_get

let express = require("express");
const app = express();

app.use(express.urlencoded( { extended: true}));
let bp = require("body-parser");
app.use(bp);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dir, 'public', 'index.html'));
})