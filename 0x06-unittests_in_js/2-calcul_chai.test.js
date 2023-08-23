const expect = require('chai').expect;
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber with SUM', function() {
    it('testing addition of two valid integers', function() {
        const result = calculateNumber('SUM', 2, 4);
        expect(result).to.equal(6);
    });

    it('testing SUM with decimals', function() {
        const result = calculateNumber('SUM', 2.1, 3.9);
        expect(result).to.equal(6);
    })

    it('testing SUM with negatives', function() {
        const result = calculateNumber('SUM', -3, -9);
        expect(result).to.equal(-12);
    });
});


describe('calculateNumber with SUBTRACT', function () {
    it('testing subtract with integers', function() {
        const result = calculateNumber('SUBTRACT', 3, 4);
        expect(result).to.equal(-1);
    });

    it('testing subtract with decimals', function() {
        const result = calculateNumber('SUBTRACT', 2.2, 1.9);
        expect(result).to.equal(0);
    });

    it('testing with negatives', function() {
        const result = calculateNumber('SUBTRACT', -3, -5)
        expect(result).to.equal(2);
    });
});

describe('calculateNumber with DIVIDE', function() {
    it('testing diving by zero', function() {
        const result = calculateNumber('DIVIDE', 3, 0);
        expect(result).to.equal('Error');
    });

    it('dividing negatives', function() {
        const result = calculateNumber('DIVIDE', -3, -3);
        expect(result).to.equal(1);
    });

    it('testing dividing integers', function() {
        const result = calculateNumber('DIVIDE', 3, 2);
        expect(result).to.equal(1.5);
    });
});
