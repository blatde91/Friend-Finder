var friends = require('../data/friend.js');
var server = require('../../server.js');

module.exports = function(app) {
	var user;

	//Post route for user info
	app.post("/api/friend", function(req, res) {
		module.exports.user = req.body;
		friends.array.push(req.body);
		console.log(`${req.body.name} added to friend array`)
		res.json({});
	});

	//Get route to get highest match
	app.get("/bestMatch", function (req, res) {
		var bestMatch = server.findingFriends();
		res.json(bestMatch);
	});

	//Get route to display friend array as json
	app.get("/api/:friend?", function(req, res) {
		res.json(friends.array);
	})
}