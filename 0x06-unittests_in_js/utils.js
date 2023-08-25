class Utils {
    static calculateNumber(type, a, b) {
        const val1 = Math.round(a);
        const val2 = Math.round(b);
    
        if (type === 'SUM') {
            return (val1 + val2);
        }
    
        if (type === 'SUBTRACT') {
            return (val1 - val2);
        }
    
        if (type === 'DIVIDE') {
            if (val2 === 0) {
                return 'Error';
            }
            return (val1 / val2);
        }
    }    
}

module.exports = Utils;
const Utils = {
    isNegZero(n) {
      const num = Number(n);
      return num === 0 && 1 / num === -Infinity;
    },
    calculateNumber(type, a, b = 0) {
      let aNum = Number(a);
      let bNum = Number(b);
  
      if (Number.isNaN(aNum) || Number.isNaN(bNum))
        throw TypeError('Parameters must be numbers or able to coerce to number');
  
      aNum = Math.round(aNum);
      bNum = Math.round(bNum);
  
      let quotient;
  
      switch (type) {
        case 'SUM':
          return aNum + bNum;
        case 'SUBTRACT':
          return aNum - bNum;
        case 'DIVIDE':
          if (bNum === 0) return 'ERROR';
          quotient = aNum / bNum;
          return this.isNegZero(quotient) ? 0 : quotient;
        default:
          throw Error(
            'Invalid operation type. Valid types are "SUM", "SUBTRACT", and "DIVIDE".'
          );
      }
    }
};
  
module.exports = Utils;
