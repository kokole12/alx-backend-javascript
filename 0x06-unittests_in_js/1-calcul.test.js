const assert =  require('assert');
const calculateNumber =  require('./1-calcul');


describe('calculateNumber with  type SUM', function() {
    it('test adding 2 and 4', function() {
        assert.equal(calculateNumber('SUM', 2, 4), 6);
    });

    it('testing adding decimals', function() {
        assert.equal(calculateNumber('SUM', 1.2, 2.7), 4);
    });

    it('testing adding negatives', function() {
        assert.equal(calculateNumber('SUM', -2, -10), -12);
    });
});


describe('calculateNumber with SUBTRACT', function() {
    it('subtracting integers', function() {
        assert.equal(calculateNumber('SUBTRACT', 4, 3), 1);
    });

    it('subtracting from 0', function() {
        assert.equal(calculateNumber('SUBTRACT', 0, 4), -4);
    });

    it('subtracting negatives', function() {
        assert.equal(calculateNumber('SUBTRACT', -4, -6), 2);
    });

    it('subtracting decimals', function() {
        assert.equal(calculateNumber('SUBTRACT', 1.5, 2.8), -1);
    });
});

describe('calculator with DIVIDE', function() {
    it('dividing constants', function() {
        assert.equal(calculateNumber('DIVIDE', 4, 2), 2);
    });

    it('diving by zero', function() {
        assert.equal(calculateNumber('DIVIDE', 2, 0), 'Error');
    });

    it('diding two negtive values', function() {
        assert.equal(calculateNumber('DIVIDE', -10, -5), 2);
    });
});
