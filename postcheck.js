const express = require('express')
const app = express()
var port = process.env.port || 4000;

app.use (function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    var data='';
    req.setEncoding('utf8');
    req.on('data', function(chunk) { 
       data += chunk;
    });

    req.on('end', function() {
        req.body = data;
        next();
    });
});

app.post('/', (req, res) => res.send(req.body));

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
