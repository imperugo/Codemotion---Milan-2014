(function(controller) {

    controller.init = function(app) {
        
        app.get("/", function(req, res) {
            res.render("home/index", { 
            	title: 'My Codemotion Home Page',
            	author: 'Ugo Lattanzi',
            	twitter: '@imperugo',
            	blog: 'http://tostring.it'
            });
        });

        app.get("/about", function(req, res) {
            res.render("home/index", { 
            	title: 'My Codemotion About Page',
            	author: 'Ugo Lattanzi',
            	twitter: '@imperugo',
            	blog: 'http://tostring.it'
            });
        });
    };

})(module.exports);