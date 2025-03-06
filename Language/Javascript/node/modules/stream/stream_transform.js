const {Transform } = require('stream');

// Create a custom Transform stream
class UppercseTransform extends Transform {
	_transform(chunk, encoding, callback) {
        const uppercased = chunk.toString().toUpperCase();;
        this.push(uppercased);;
        callback();
    }
}

const transformStream = new UppercseTransform();
process.stdin.pipe(transformStream).pipe(process.stdout);