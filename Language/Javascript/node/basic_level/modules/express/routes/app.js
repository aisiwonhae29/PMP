var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var http = require('http');
var debug = require("debug")('haha');

let app = express();
let server = http.createServer(app);
server.listen(3000);
server.on('listening', onListening);

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "html");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use('/', function(req, res, next){
	res.send('123');
	res.end();
	next()
})

app.use(function (req, res, next) {
	next(createError(404));
});
function normalizePort(val) {
	var port = parseInt(val, 10);
	if (isNaN(port)) {
		// named pipe
		return val;
	}
	if (port >= 0) {
		// port number
		return port;
	}
	return false;
}
function onListening() {
	var addr = server.address();
	var bind = typeof addr === "string" ? "pipe " + addr : "port " + addr.port;
	debug("Listening on " + bind);
}
