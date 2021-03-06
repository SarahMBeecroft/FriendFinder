// Pulls data from friends.js
let friendsArray = require('../data/friend.js');

module.exports = (app) => {
  // Returns friends data from friends.js in JSON format
  app.get('/api/friends', function(req, res) {
    res.json(friendsArray);
  });

  app.post('/api/friends', function(req, res) {
    console.log(req.body.scores);

    // Creates variable for user's input
    let userInput = req.body;

    // For loop to gather user's scores and parse to integers
    for (let i = 0; i < userInput.scores.length; i++) {
      userInput.scores[i] = parseInt(userInput.scores[i]);
    }

    // Creates variable for closest match and minimum difference (40) 10*4
    let closestMatch = 0;
    let minDifference = 40;

    // For loop to compare user's scores with friend data to determine the total difference
    for (let i = 0; i < friendsArray.length; i++) {
      // Creates variable for total difference
      var totalDifference = 0;

      for (let j = 0; j < friendsArray[i].scores.length; j++) {
        //Creates variable for difference to determine total difference
        let difference = Math.abs(
          userInput.scores[j] - friendsArray[i].scores[j]
        );

        // Total difference equals difference but total
        totalDifference += difference;
      }

      // Changes closest match and sets new minimum difference for next comparison if needed
      if (totalDifference < minDifference) {
        closestMatch = i;
        minDifference = totalDifference;
      }
    }

    // Sends the best match back to user
    res.json(friendsArray[closestMatch]);
    console.log(friendsArray[closestMatch]);

    // Adds user's scores to friends array
    friendsArray.push(userInput);
  });
};
