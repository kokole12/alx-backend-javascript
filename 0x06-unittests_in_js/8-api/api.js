const chai = require('chai');
const request = require('request');
const app = require('./app'); // Path to your app.js file

chai.use(chaiHttp);
const expect = chai.expect;

describe('Express App', () => {
    it('should return status code 200 and welcome message', (done) => {
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
