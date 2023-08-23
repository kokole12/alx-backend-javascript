const expect = require('chai').expect;
const sendPaymentRequestApi = require('./5-payment')

describe('sendPaymentRequestToAPI', function() {
    it('testing the return from console', function() {
        const val = sendPaymentRequestApi(100, 20);
        console.log(val)
        expect(val).to.equal('The total is: 20');
    });
});
