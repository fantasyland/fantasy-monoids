'use strict';

const {tagged} = require('daggy');
const {empty, of, concat, map, equals} = require('fantasy-land');

const Dual = M => {

    const Dual = tagged('x');

    Dual[of] = x => Dual(M[of](x));
    Dual[empty] = () => Dual(M[empty]());

    Dual.prototype[equals] = function(y) {
        return this.x[equals](y.x);
    };
    Dual.prototype[concat] = function(y) {
        return Dual(this.x[concat](y.x));
    };

    Dual.prototype[map] = function(f) {
        return Dual(this.x[map](f));
    };

    return Dual;
};

module.exports = Dual;