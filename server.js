var express = require("express");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;









app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});