// Dependencies
// =============================================================
var path = require('path');

// Routes
// =============================================================
module.exports = function(app) {
  // Gets survey page
  app.get('/survey', function(req, res) {
    res.sendFile(path.join(__dirname + '/../public/survey.html'));
  });

  // Gets home page
  app.get('/home', function(req, res) {
    res.sendFile(path.join(__dirname + '/../public/home.html'));
  });

  // Use displays the home page by default
  app.use(function(req, res) {
    res.sendFile(path.join(__dirname + '/../public/home.html'));
  });
};
