var JavaScriptUtility = require('./JavaScriptUtility.js');

var consoleMain = function() {
    this.returnCode = 0;
};

consoleMain.prototype.run = function () {
    var javaScriptSkeleton = new JavaScriptUtility();
    console.log(javaScriptSkeleton.hello());

    return this.returnCode;
};

module.exports = consoleMain;
