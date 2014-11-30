var express = require("express");
var app = express();

// respond with "Codemotion Rocks!" on the homepage
app.get('/', function (req, res) {
  res.send('Codemotion Rocks!');
});

app.get('/about', function (req, res) {
  res.send('something about me!');
});

var port = Number(process.env.PORT || 5000);

app.listen(port, function() {
    console.log("Listening on " + port);
});
