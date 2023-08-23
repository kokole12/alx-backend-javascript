const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment');
const Utils =  require('./utils');
const assert = require('chai').assert;


describe('sendPaymentRequestApi', function() {
    it('check if utils is called', function() {
        const spy = sinon.spy(console, "log");
        const stub = sinon.stub(Utils, "calculateNumber").returns(10);
        sendPaymentRequestToApi(100, 20);
        spy.restore();
    });
});
