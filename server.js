//--------------------------------------
//Dependencies
//--------------------------------------
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();

//--------------------------------------
//Port
//--------------------------------------
var PORT = process.env.PORT || 3000;

//--------------------------------------
//body-parser
//---------------------------------------
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



//---------------------------------------
//Main Logic
//---------------------------------------
module.exports.findingFriends = function() {
  var scoreArray = [];
  var currentUser = apiRoutes.user;

	//For loop to iterate through the friend array
  for (var i=0; i < friends.array.length; i++) {

    var friendScore = 0;

    if(friends.array[i].name !== currentUser.name) {

      for (var i=0; i < friends.array[i].scores.length; j++) {

      	var score = friends.array[i].scores[j];
      	var diff = Math.abs(score - currentUser.scores[j])
      	friendScore+=difference
      }

      var friendObj = {};
      friendObj.friend = friends.array[i];
      friendObj.score = friendScore;
      scoreArray.push(friendObj);
    }

  }

  scoreArray.sort(function(a,b) {
  	return a.score - b.score;
  });

  return scoreArray[0];
}

//-------------------------------------
//The app listens...
//-------------------------------------
app.listen(PORT, function() {
  console.log(`The app is listening on Port: ${PORT}`)
});