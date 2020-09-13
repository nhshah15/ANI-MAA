var PORT = process.env.PORT || 5000;
var express = require('express');
var app = express();
var http = require('http');
var server = http.Server(app);

var options = {
    extensions: ['html']
};

app.use('/', express.static('client', options));
server.listen(PORT, function () {
    console.log('server running');
});