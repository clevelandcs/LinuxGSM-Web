var path = require('path');
var file = require('../models/index.js');

module.exports.listen = function (io, socket) {
    io.on('connection', function (socket) {
        socket.emit('news', { hello: 'world' });
        socket.on('my other event', function (data) {
            //console.log(data);
        });
        io.on('serverList', function () {
            var servers = db.selectServerList();
            console.log(servers);
            socket.emit('returnserverList', servers);
        });
        io.on('updateServerInfo', function (data) {
            if (data.serverName != undefined) {
                console.log(data);
                if (data.createdBy != undefined) {
                    file.db.updateServerCreatedBy(data.serverName, data.createdBy);
                }
                if (data.description != undefined) {
                    file.db.updateServerDescription(data.serverName, data.description);
                }
            }
        });
    });
}