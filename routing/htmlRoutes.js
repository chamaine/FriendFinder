//stores html for server*//


var path = require("path");


module.exports = function(app) {
	app.get("/", function(req, res) {
		console.log("GET index page");
		res.sendFile(path.join(__dirname, ".public/home.html"));
	});
}

app.get("/survey", function(req, res) {
		console.log("GET Survey page");
		res.sendFile(path.join(__dirname, "./public/survey.html"))
	});
};