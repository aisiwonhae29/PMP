/**
 * # CORS
 * 
 * - Cross-Origin Resource Sharing 
 */

let express = require('express');
let cors = require('cors');
let app = express();

// # case 1: Enable All CORS Requests
app.use(cors());

// # case 2: Enable CORS for a Single Route (From whole origins)
app.get('/products/:id', cors(), function (req, res, next){
    res.json({msg: 'This is CORS-enabled for a Single Route'})
})

// # case 3: Enable Cors for a Single Route and specified origins
let corsOptions = {
    origin: ['http://example.com', 'http://another.com'],
    optionsSuccessStatus: 200
}
app.get("/products/:id", cors(corsOptions), function (req, res, next) {
	res.json({ msg: "This is CORS-enabled for a Single Route" });
});

// # case 4: Configuring CORS w/ Dynamic Origin

// let corsOptions_4 = {
//     origin: function (origin, callback) {
//         debugger.loadORigins(function  (error, origins) {
//             callback(error, origins)
//         })
//     }
// }
app.get("/products/:id", cors(corsOptions_4), function (req, res, next) {
	res.json({ msg: "This is CORS-enabled for a Single Route" });
});
