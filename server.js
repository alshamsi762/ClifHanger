/** Main Server **/

/** Import Libs **/
var express = require('express');

/** Global Vars **/
var app = express();

/** Main Thread **/
// Send Index.html
app.get('/', function (req, res) {
   res.sendFile( __dirname + "/" + "index.html" );;
})

// Set Port & Listen (Heroku Support)
var port = 2200
app.listen(port);
