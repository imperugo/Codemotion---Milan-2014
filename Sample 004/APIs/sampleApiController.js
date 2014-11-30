(function(controller) {

    controller.init = function(app) {
        
        app.get("/api/index", function(req, res) {
            res.json({ 
            	title: 'My Codemotion Home Page',
            	author: 'Ugo Lattanzi',
            	twitter: '@imperugo',
            	blog: 'http://tostring.it'
            });
        });

        app.post("/api/join", function(req, res) {

            req.assert('email', 'Field required').notEmpty();
            req.assert('email', 'Invalid email format').isEmail();

            var errors = req.validationErrors();
            var mappedErrors = req.validationErrors(true);

            if (errors) {
                console.log("Wrong request: ", errors);
                res.json(400, errors);
            }

            //do something

            res.send("Thanks for signing up!");
        });
    };

})(module.exports);