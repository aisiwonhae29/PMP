// * http module
let http = require("http");
let url = require("url");
let fs = require("fs");

// # case 1: basic http
function test1() {
	http
		.createServer((req, res) => {
			res.write("hi");
			res.end();
		})
		.listen(3000);

	console.log("server listen on 3000");
}

/**
 * # case 2: req.url
 *
 * req.url: whole url path.
 * url.parse(req.url).query: query json file store.
 *
 * */

function test2() {
	http
		.createServer((req, res) => {
			let q = url.parse(req.url, true).query;
			console.log(url);
			res.write(req.url + "\n\n");
			res.write(q.name + " is " + q.nickname);
			res.end();
		})
		.listen(3000);
}

// # case 3: simple routes with http request

function test3() {
	http
		.createServer((req, res) => {
			console.log("create successfully");
			let q = url.parse(req.url, true).query;
			// fs.readFile('./http.js', (err, data) => {
			//     console.log(data.toString());
			// })
			fs.readFile(
				"../../../../../front-end/jquery/JQ_find_func.html",
				(err, data) => {
					res.writeHead(200);
					res.write(data.toString());
					res.end();
				}
			);
		})
		.listen(3000);
}

// # case 4: get methods 4-1: JSON option break out triggers, 4-2 make get methods

function test4(type) {
	switch (type) {
		case 1:
			t4_1();
			break;
		case 2:
			t4_2();
			break;
	}
	function t4_1() {
		let options = {
			hostname: "webcode.me",
			port: 80,
			path: "/",
			method: "GET",
		};
		let req = http.request(options, (res) => {
			console.log(`statusCode: ${res.statusCode}`);
			res.on("data", (d) => {
				process.stdout.write(d);
			});
		});
		req.on("error", (err) => {
			console.error(err);
		});
		req.end();
	}
	function t4_2() {
        let req = http.get({ host: 'webcode.me', path: '/' }, (res)=>{
			let content = '';
			res.on('data', (chunk) => {
				console.log(chunk)
				content += chunk;
			})

			res.on('end', () => {
				console.log(content);
			});
		});
    }
}
test4(2);