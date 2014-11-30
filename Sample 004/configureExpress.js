(function(app){
	var path = require('path');

	app.configure = function(app, express) {

		var publicFolder = path.join(path.dirname(module.parent) , "/public");

		console.log("Configuring public folder to: " + publicFolder);

        var oneYear = 31557600000;
        app.use(express.static(publicFolder, {
            maxAge: oneYear
        }));

		app.set("view engine", "vash");
		var viewsFolder = path.dirname(module.parent) + '/views';
		console.log(viewsFolder);
		app.set('views', viewsFolder);
	};

})(module.exports);