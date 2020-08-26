var express = require("express")
var path = require("path");


var app = express()

var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
// n

app.use(express.static("public"));

//html routes
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "/public/index.html"));
});
app.get("/about", function (req, res) {
    res.sendFile(path.join(__dirname, "/public/about.html"));
});

app.listen(PORT, function () {
    console.log("Server is listening on PORT: " + PORT);
})