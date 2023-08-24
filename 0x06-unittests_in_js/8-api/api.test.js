const { expect } = require('chai');
const app = require('./api');
const sinon = require('sinon');
const request = require('request');

describe('Index page', function() {
    before('stubbing the request', function() {
        sinon.stub(request, 'get').yields(null, { statusCode: 200 }, 'Welcome to the payment system');
    });

    after(function() {
        sinon.restore();
    });

    it('testing index page status code', function(done) {
        request(app)
        .get('/')
        .end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            expect(res.text).to.equal('Welcome to the payment system');
            done();
        });
    });
});
