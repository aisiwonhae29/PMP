/**
 * * route
 *
 * # Routing refers to how an application's endpoints (URLs) respond to client requests.
 */
const { normalizePort, onError } = require("./func");
var debug = require("debug");
let http = require("http");
let glob = require('glob');
const express = require("express");

const app = express();

var port = normalizePort(process.env.PORT || "3000");

app.set("port", port);
app.set("serverMode", "dev");

// app.use('/', function(req, res, next){
// 	res.send('123');
// })

let routes = glob.sync('junction/**/*.js')
routes.forEach(el => {
	let route = el.substr(8, el.length-11);
	app.use(route, require('./'+el)(app));
});

var server = http.createServer(app);

server.on("error", onError);
server.on("listening", () => { onListening(server); });

server.listen(port);

function onListening() {
	var addr = server.address();
	var bind = typeof addr === "string" ? "pipe " + addr : "port " + addr.port;
	debug("Listening on " + bind);
}
