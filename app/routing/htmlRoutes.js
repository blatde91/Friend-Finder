module.exports = function(app, path) {
	//takes user to home page
	app.get("/", function(req, res) {
		res.sendFile(path.join(__dirname, "../public/home.html"));
	});
	//takes user to survey page
	app.get("/survey", function(req, res) {
		res.sendFile(path.join(__dirname, "../public/survey.html"));
	});
}