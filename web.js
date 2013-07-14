var express = require('express');

var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
   fs.readFileSync('./index.html', 'utf8', function(err, data) {
   if (err) throw err;
   var buffer = new Buffer(data);
   console.log(buffer.toString('utf8'));
   response.send(buffer.toString('utf8'));
   });
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
