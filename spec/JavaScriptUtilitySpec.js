var ExampleModule = require('../src/JavaScriptUtility.js');

describe("JavaScriptUtility", function () {
    it("can greet the world", function () {
        var em = new ExampleModule();
        expect(em.hello()).toEqual("Hello friend.");
    });
});
