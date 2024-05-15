# express()

### structure

1. require module
2. configuration express
3. session setting
4. route setting
5. error handler

### function

**express.json([options])**

It parses incoming requests with JSON payloads and is based on body-parser.

- limit: controls the maximum request body size ex) express.json({limit: '500mb'})

**express.static(root, [options])**

This specifies the root directory from which to serve static assets. 
The function determines the file to serve by combining req.url with the provided directory.
when file is not founded send 404 response.

- ex) 
  ```
  var options = {
        dot files: 'ignore',
        etag: false,
        extensions: ['htm', 'html'],
        ,,,
  }

  app.use(express.static(path.join(__dirname, 'public'));
  ```

**express.urlencoded([options])**

**express.Router([options])**

the behavior of the router.

- ex) var router = express.Router([options])


### Application

**app.mountpath**

var express = require('express')
var app = express()
var admin = express()

admin.get('/', function (req, res) {
    console.log(admin.mountpath)
    res.send('Admin Homepage)
})

app.use('/admin', admin)

**app.on('mount', callback(parent))**

var admin = express()

admin.on('mount', function(parent)){
    console.log('Admin Mounted)
    console.log(parent)
}

### node .bin.dev sequence

