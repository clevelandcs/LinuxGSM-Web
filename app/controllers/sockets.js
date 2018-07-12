var path = require('path');
var file = require('../models/index.js');

module.exports.listen = function(io, socket){
    io.on('connection', function(socket){
        socket.emit('news', {hello: 'world'});
        socket.on('my other event', function(data){
            console.log(data);
        });
    });
}