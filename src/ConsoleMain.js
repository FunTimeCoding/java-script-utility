var JavaScriptUtility = require('./JavaScriptUtility.js');

var consoleMain = function() {
    this.returnCode = 0;
};

consoleMain.prototype.run = function () {
    var javaScriptUtility = new JavaScriptUtility();
    console.log(javaScriptUtility.hello());

    return this.returnCode;
};

module.exports = consoleMain;
