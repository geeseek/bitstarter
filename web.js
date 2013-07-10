var express = require('express');
var fs = require('express');
var app = express.createServer(express.logger());
var contents = fs.readFileSync('./index.html');
var buffer = new Buffer(50);
buffer.write(contents);
app.get('/', function(request, response) {
  response.send(buffer.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
