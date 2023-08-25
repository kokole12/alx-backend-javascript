const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment');
const Utils =  require('./utils');
const assert = require('chai').assert;


describe('sendPaymentRequestApi', function() {
    it('check utils stubbed', function() {
        const stub = sinon.stub(Utils, "calculateNumber")
        const spy = sinon.spy(console, 'log');
        stub.returns(10);
        const result = Utils.calculateNumber('SUM', 100, 20);
        assert.equal(result, 10);
        stub.restore();
    });
});
