'use strict';

const {tagged} = require('daggy');
const {empty, of, concat, equals} = require('fantasy-land');

const Dual = M => {

    const Dual = tagged('x');

    Dual[of] = x => Dual(M[of](x));
    Dual[empty] = () => Dual(M[empty]());

    Dual.prototype[equals] = function(y) {
        return this.x[equals](y.x);
    };
    Dual.prototype[concat] = function(y) {
        return Dual(y.x[concat](this.x));
    };

    return Dual;
};

module.exports = Dual;
