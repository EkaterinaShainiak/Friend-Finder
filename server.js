var express = require("express");
var app  = express();
var htmlRoutes = require("./app/routing/htmlRouting");
var apiRoutes = require("./app/routing/apiRouting");
 
app.use("/", htmlRoutes);
app.use("/api", apiRoutes);

app.listen(process.env.PORT || 3000);