/** Main Server **/

/** Import Libs **/
var express = require('express');

/** Global Vars **/
var app = express();
var port = 2200;

/** Main Thread **/
app.set('port', 2200);
// Send Index.html
app.get('/', function (req, res) {
   res.sendFile( __dirname + "/index.html" );
})
// app.use('/index.html', express.static(__dirname + '/index.html'));
app.use('/_front/_gameStage/', express.static(__dirname + '/_front/_gameStage/'));
app.use('/_front/_assets/', express.static(__dirname + '/_front/_assets/'));
app.use('/player.js', express.static(__dirname + '/player.js'));
app.use('/gameplay.js', express.static(__dirname + '/gameplay.js'));
app.use('/item.js', express.static(__dirname + '/item.js'));
app.use('/boardspace.js', express.static(__dirname + '/boardspace.js'));



// Set Port & Listen (Heroku Support)
app.listen(port);
