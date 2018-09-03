// var request = require('request');

describe("Request", function () {
    it("can fetch a website", function () {
        // Source: https://github.com/request/request

        // TODO: Cannot test because Jasmine does not wait for asynchronous callbacks. May need jasmine-node? https://github.com/mhevery/jasmine-node
        // request('http://example.org', function (error, response, body) {
        //     console.log('error:', error);
        //     console.log('statusCode:', response && response.statusCode);
        //     console.log('body:', body);
        //     expect(error).toEqual("null");
        //     expect(response.statusCode).toEqual(200);
        //     expect(body).not.toEqual("");
        // });

        // TODO: Decide on which way to write it.
        // request.get({
        //     url: 'http://example.org'
        // }).on('response', function (response) {
        //     console.log(response.statusCode);
        //     console.log(response.headers['content-type']);
        // }).on('data', function (data) {
        //     console.log(data);
        // });

        expect(true).toEqual(false);
    });
});
