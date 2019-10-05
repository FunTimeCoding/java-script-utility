var javaScriptUtility = function() {
    this.name = 'friend.';
};

javaScriptUtility.prototype.hello = function () {
    return 'Hello ' + this.name;
};

module.exports = javaScriptUtility;
