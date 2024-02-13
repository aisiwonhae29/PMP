// # public

let express = require("express");
let bp = require("body-parser");
const app = express();
app.use(express.static('public'))