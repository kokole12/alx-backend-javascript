const assert = require('assert');
const calculateNumber = require('./0-calcul')

describe('calculateNumber', function() {
    it('adding to positve integers', function() {
        assert.equal(calculateNumber(3, 5), 8);
    });

    it('adding number and decimal', function() {
        assert.equal(calculateNumber(1, 3.7), 5);
    });

    it('adding two decimals', function() {
        assert.equal(calculateNumber(1.2, 3.7), 5);
    });

    it('adding negative values', function() {
        assert.equal(calculateNumber(-1, -3), -4);
    });
})
