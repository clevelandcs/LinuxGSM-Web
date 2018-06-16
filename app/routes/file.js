const fs = require('fs');
const execSync = require('child_process').execSync;
const url = require('url');

exports.download = function (uri) {
    var file_name = url.parse(uri).pathname.split('/').pop();

    //var wget = spawn('wget', [uri]);
    wget = execSync("wget " + uri, function(error, stdout, stderr){
        /*if(error){
            return error.code;
        }else{
            return 0;
        }*/
    });
    return fs.existsSync(file_name);
    //Output stdout and stderr to logs and/or ui 
    //child.stdout.on('data', function (data) {   process.stdout.write(data.toString());  });
    //child.stderr.on('data', function (data) {   process.stdout.write(data.toString());  });
    //wget.on('close', function(code){
    //    return code
    //});
}

exports.installServer = function (filename, serverName) {
    fs.chmodSync(filename, 764);

    /*chmod = execSync("chmod +x " + filename, function (error, stdout, stderr) {
        if (error) {
            console.log(error.code);
        }
    });*/
    download = execSync('./' + filename + ' ' + serverName, function (error, stdout, stderr) {
        if (error) {
            console.log(error.code);
        }
    });

    install = execSync('./' + serverName + ' auto-install', function (error, stdout, stderr) {
        if (error) {
            console.log(error.code);
        }
    });
    return fs.existsSync(serverName);
}