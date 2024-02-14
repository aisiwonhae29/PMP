let express = require('express');

module.exports= function () {
    let router = express.Router();

    router.get('/', function(req, res, next){
        res.send('hello there');
    });
    router.get('/ho', function(req, res, next){
        console.log(123);
        res.send('hello there');
    })
    return router;
}