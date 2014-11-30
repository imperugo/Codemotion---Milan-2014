var express = require("express");
var app = express();

app.get('/', function (req, res) {
	
	//read parameter name from querystring
	var name = req.query.name;

	if(name === undefined)
	{
		name = 'Codemotion';
	}

	res.send('<html><body><h1>' + name + '</h1></body></html>');
});

var port = Number(process.env.PORT || 5000);

app.listen(port, function() {
    console.log("Listening on " + port);
});
