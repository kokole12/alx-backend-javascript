const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment');
const Utils =  require('./utils');
const assert = require('chai').assert;


describe('sendPaymentRequestApi', function() {
    it('check if utils is called', function() {
        const spy = sinon.spy(Utils, 'calculateNumber');
        sendPaymentRequestToApi(100, 20);
        assert(spy.calledOnce);
        spy.restore();
    });
});
