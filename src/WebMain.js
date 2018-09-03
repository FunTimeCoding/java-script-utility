var $ = require('jquery');
var JavaScriptUtility = require('./JavaScriptUtility.js');

$().ready(function () {
    var application = new JavaScriptUtility();
    console.log(application.hello());
});
