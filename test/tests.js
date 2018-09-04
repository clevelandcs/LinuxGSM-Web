var expect = require("chai").expect;
var file = require("../app/models/file.js");
var fs = require('fs');
var db = require('../app/models/db.js');
describe("File IO", function () {
    describe("Download a file", function () {
        it("can download the server script file", function () {
            //var lgsm = file.download("https://linuxgsm.com/dl/linuxgsm.sh");
            var fileExists = fs.existsSync("../app/data/linuxgsm.sh");
            //expect(lgsm).to.equal(true);
            expect(fileExists).to.equal(true);
        });
    });
    /* Figure out how to test server install
    describe("Install a server", function(){
        it("can install a linux game server", function(){
            var installed = file.installServer("linuxgsm.sh","arkserver");
            expect(installed).to.equal(true);
        }).timeout(3000);
    });
    **/
});
describe("Database Store", function(){
    describe("Create datastore", function(){
        it("can initialize a nedb database", function(){
            db.loadDb();
            databaseExists = fs.existsSync("../app/data/servers.db");
            expect(databaseExists).to.equal(true);
        });
    });
    describe("Load and retrieve data from database", function(){
        it("can insert a server into the database", function(){
            db.insertServer("ArkServer","Ark: Survival Evolved");
            serverExists = db.selectServerList();
            expect(serverExists).to.not.equal(undefined);
        });
    });
});
