
//What I need to get this server working(dependicies)//
var express = require("express");
var bodyParser = require("body-parser");



// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;




app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Routes
require("./routing/htmlRoutes");
require("./routing/apiRoutes");

  // Log (server-side) when our server has started
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});


