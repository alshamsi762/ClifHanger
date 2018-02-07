/** Main Server **/

/** Import Libs **/
var express = require('express');

/** Global Vars **/
var app = express();

/** Main Thread **/
// Send index.html
app.get('/', function (req, res) {
  res.sendFile( __dirname + "/" + "index.html" );;
})

// Send style.css
app.get('/style.css', function (req, res) {
  res.sendFile( __dirname + "/" + "style.css" );;
})

// Send yodabust.stl
app.get('/yodabust.stl', function (req, res) {
  res.sendFile( __dirname + "/" + "yodabust.stl" );;
})

// Send moveAnimation.js
app.get('/moveAnimation.js', function (req, res) {
  res.sendFile( __dirname + "/" + "moveAnimation.js" );;
})

// Set Port & Listen (Heroku Support)
var port = 80
app.listen(port);
