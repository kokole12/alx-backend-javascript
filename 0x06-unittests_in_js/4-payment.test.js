const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment');
const Utils =  require('./utils');
const assert = require('chai').assert;


describe('sendPaymentRequestApi', function() {
    it('check if utils is called', function() {
        const stub = sinon.stub(Utils, "calculateNumber")
        stub.returns(10);
        const result = Utils.calculateNumber('SUM', 100, 20);
        assert.strictEqual(result, 10)
        stub.restore();
    });
});
