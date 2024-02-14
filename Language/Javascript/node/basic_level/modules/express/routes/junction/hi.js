let express = require('express');

module.exports = function() {
    let router = express.Router();

    router.get('/', function(req, res, next){
        res.send('hello worlds');
    })
    router.get('/ho', function(Req, res, next){
        res.send('etet');
    })

    return router;
}