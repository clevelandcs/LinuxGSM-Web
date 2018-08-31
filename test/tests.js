var expect = require("chai").expect;
var file = require("../app/models/file.js");
var fs = require('fs');
describe("File IO", function () {
    describe("Download a file", function () {
        it("can download the server script file", function () {
            var lgsm = file.download("https://linuxgsm.com/dl/linuxgsm.sh");
            var fileExists = fs.existsSync("../data/linuxgsm.sh");
            expect(lgsm).to.equal(true);
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