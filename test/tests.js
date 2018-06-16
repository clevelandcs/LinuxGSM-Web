var expect = require("chai").expect;
var file = require("../app/routes/file.js");
var fs = require('fs');
describe("File IO", function () {
    describe("Download a file", function () {
        it("can download a simple file", function () {
            var lgsm = file.download("./linuxgsm.sh", "https://linuxgsm.com/dl/linuxgsm.sh");
            var fileExists = fs.existsSync("./linuxgsm.sh");
            expect(lgsm).to.equal(0);
            expect(fileExists).to.equal(true);
        });
    });
    /*describe("Install a server", function(){
        it("can install a linux game server", function(){

        });
    });*/
});