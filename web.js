var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());
var b = fs.readFileSync("index.html");
var s = b.toString('utf-8');

app.get('/', function(request, response) {
  response.send(s);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
