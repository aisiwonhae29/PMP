const redis = require("redis");
const client = redis.createClient();

client.on("connect", function () {
	console.log("Connected to Redis");
});

client.set("key", "value", function (err, reply) {
	if (err) {
		console.error(err);
	} else {
		console.log("Set key:", reply);
	}
});

client.get("key", function (err, reply) {
	if (err) {
		console.error(err);
	} else {
		console.log("Get key:", reply);
	}
});
