// Pulls data from friends.js
var friendsArray = require("../data/friend.js");

module.exports = function (app) {

  app.get("/api/friends", function (req, res) {
    res.json(friendsArray);
  });

  app.post("/api/friends", function (req, res) {

    res.json({
       "name": friendsArray[0].name,
       "photo": friendsArray[0].photo
    });


  })
};

