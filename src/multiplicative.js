'use strict';

const {tagged} = require('daggy');
const {empty, of, concat, map, equals} = require('fantasy-land');

const Multiplicative = tagged('x');

Multiplicative[of] = x => Multiplicative(x);
Multiplicative[empty] = () => Multiplicative(1);

Multiplicative.prototype[equals] = function(y) {
    return this.x === y.x;
};
Multiplicative.prototype[concat] = function(y) {
    return Multiplicative(this.x * y.x);
};

Multiplicative.prototype[map] = function(f) {
    return Multiplicative(f(this.x));
};

module.exports = Multiplicative;