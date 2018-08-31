const fs = require('fs');
const Datastore = require('nedb');
var serverdb;
exports.loadDb = function () {
    serverdb = new Datastore({ filename: './app/data/servers.db', autoload: true });
}

exports.insertServer = function (serverName, game) {
    var doc = {
        kind: 'lgsm - server',
        name: serverName,
        game: game,
        created: new Date(),
        createdBy: null,
        description: null,
    };

    serverdb.insert(doc, function (err, newDoc) {   // Callback is optional
        // newDoc is the newly inserted document, including its _id
        // newDoc has no key called notToBeSaved since its value was undefined
    });
}
exports.deleteServer = function (serverName) {
    serverdb.remove({ name: serverName }, function (err, numRemoved) {
    });
}

exports.selectServerList = function(){
    serverdb.find({ kind: 'lgsm - server' }, function (err, docs) {
      });
    return docs;
}
module.exports.serverdb;