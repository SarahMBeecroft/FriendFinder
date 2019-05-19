// Dependencies
// =============================================================
var express = require("express");
var path = require("path")

// Links to routing file
require("./app/routing/htmlRoutes")(app);

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "/app/public")));

// Requires js files for routing
require('./app/routing/htmlRoutes.js')(app);

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});

