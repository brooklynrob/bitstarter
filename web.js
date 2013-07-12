var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());

app.get('/', function(request, response) {

	var buf = fs.readFile('index.html', 'utf8', function (err) {
  		if (err) throw err;
  		console.log('It\'s saved!');
	});

	

  	response.send(buf);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
