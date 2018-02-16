/** Main Server **/

/** Import Libs **/
var express = require('express');

/** Global Vars **/
var app = express();
var port = 2200;

/** Main Thread **/
app.set('port', 2200);
app.use('/static', express.static(__dirname + '/static'));

// Send Index.html
app.get('/', function (req, res) {
   res.sendFile( __dirname + "/" + "index.html" );;
})

// Set Port & Listen (Heroku Support)
app.listen(port);
