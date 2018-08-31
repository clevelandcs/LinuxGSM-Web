const fs = require('fs');
const execSync = require('child_process').execSync;
const url = require('url');
const shell = require('shelljs')


exports.download = function (uri) {
    var file_name = url.parse(uri).pathname.split('/').pop();

    //var wget = spawn('wget', [uri]);
    wget = execSync("wget -P ../data/" + uri);
    return fs.existsSync(file_name);
}

exports.installServer = function (filename, serverName) {
    if(shell.exec('chmod 700 ' + filename).code !== 0){
        console.log("Error setting permissions on " + filename);
        return false;
    }else{
        if( shell.exec('../data/' + filename + ' ' + serverName).code !== 0){
            console.log("Error running server install for " + serverName);
            return false;
        }else{
            if(shell.exec('../data/' + serverName + ' auto-install').code !== 0){
                console.log("Error running auto-install for " + serverName);
                return false;
            }
        }
    }
    return fs.existsSync(serverName);
}