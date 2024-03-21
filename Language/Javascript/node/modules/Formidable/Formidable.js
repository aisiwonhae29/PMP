/**
 * Formiadable
 *
 *  # About
 *
 *  - Used for parsing from data, especially for handling file uploads in web applications. It simplifies the process of parsing incoming from data from HTTP requests, particularly multipart/form-data, which is commonly
 *    used when uploading files through HTML forms
 *
 *  # Key Features
 *
 *  1. File Uploads: exel in handling file uploads by parsing mutipart form data
 *  2. Easy Parsing: simplifies process
 *  3. Asynchronous Processing
 *  4. Supports HTTP Requests
 * 
 *  # data listener
 *  
 *  1. form.on('fileBegin'  , (formname, file) =>     { ... });
 *  2. form.on('file'       , (formname, file) =>          { ... });
 *  3. form.on('field'      , (fieldName, fieldValue) =>  { ... });
 *  4. form.on('data'       , ({name, key, value...}) =>  { ... });
 *  5. form.once('end'      , () =>                          { ... });
 */

const http = require('http');
const formidable = require('formidable');
const fs = require('fs');

// # case 1: basic formidable

http.createServer((req, res) => {
  if (req.url === '/upload' && req.method.toLowerCase() === 'post') {
    const form = new formidable.IncomingForm();

    form.parse(req, (err, fields, files) => {
      if (err) {
        // Handle error
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Error occurred during file upload');
      } else {
        const oldPath = files.file[0].filepath;
        const newPath = "C:/Users/line/Desktop/새 폴더" + files.file.name + ".jpg";

        fs.rename(oldPath, newPath, (err) => {
          if (err) {
            // Handle file renaming error
          } else {
            // File uploaded and renamed successfully
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('File uploaded and moved!');
          }
        });
      }
    });
  } else {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<form action="/upload" method="post" enctype="multipart/form-data">' +
      '<input type="file" name="file"><br>' +
      '<input type="submit" value="Upload">' +
      '</form>');
  }
}).listen(3000);

