var args = process.argv;
var path = require('path');
var favicon = require('serve-favicon');
var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var socketController = require(path.join(__dirname,'controllers','sockets'));

//Defaults
var port = 8080;

if (args.indexOf('-p') != -1) {
    port = args[args.indexOf('-p') + 1];
}
//uncomment when favicon has been added
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
/*app.use(function(req, res, next){
    res.io = io;
    next();
});
*/
var controller = require(path.join(__dirname, 'routes','pages'));

app.use(express.static('public'));
app.use('/', require('./routes/pages').pages);

server.listen(port);

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

io.sockets.on('connection', function(socket){
    console.log("client connected");
    socketController.listen(io, socket);
})