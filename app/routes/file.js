const fs = require('fs');
const execSync = require('child_process').execSync;
const url = require('url');

exports.download = function (uri) {
    var file_name = url.parse(uri).pathname.split('/').pop();

    //var wget = spawn('wget', [uri]);
    wget = execSync("wget " + uri);
    return fs.existsSync(file_name);
}

exports.installServer = function (filename, serverName) {
    async.series([
        async.apply(fs.chmod(filename,'700')),
        async.apply(exec, './' + filename + ' ' + serverName),
        async.apply(exec, './' + serverName + ' auto-install')
    ],
    function(err,results){
        console.log(results);
    }
);
    return fs.existsSync(serverName);
}