var express = require("express");
var app = express();

var expressConfiguration = require('./configureExpress');
expressConfiguration.configure(app, express);

var sampleApiController = require("./controllers/homeController");
sampleApiController.init(app);

var homeController = require("./APIs/sampleApiController");
homeController.init(app);

// console.log("Configuring 404 page");
// app.use(function(req, res, next) {
//     res.statusCode = 404;
//     res.description = "Not found";
//     res.render("404");
// });

// console.log("Configuring 500 page");
// app.use(function(err, req, res, next) {
//     console.log(err.stack);
//     res.statusCode = 500;
//     res.description = "Internal server error";
//     res.render("500");
// });

var port = Number(process.env.PORT || 5000);

app.listen(port, function() {
    console.log("Listening on " + port);
});
