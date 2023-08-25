function calculateNumber(a, b=0) {
    const val1 = Number(a);
    const val2 = Number(b);

    if (Number.isNaN(val1) || Number.isNaN(val2))
    throw TypeError('Parameters must be numbers');
    return (Math.round(val1) + Math.round(val2));
}

module.exports = calculateNumber;
