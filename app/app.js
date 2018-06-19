var app = require('express')();
var http = require('http').Server(app);
var controller = req('./routes/controller.js');
var file = req('./routes/file.js');
var args = process.argv;
//Defaults
var port = 80;

if (args.indexOf('-p') != -1) {
    port = args[args.indexOf('-p') + 1];
}

app.get('/', function (req, res) {
    res.sendFile('views/index.html', { root: __dirname });
});

http.listen(port, function () {
    console.log('listening on *:' + port);
    file.installServer("linuxgsm.sh","arkserver");
});