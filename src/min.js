'use strict';

const {tagged} = require('daggy');
const {empty, of, concat, equals} = require('fantasy-land');

const Min = tagged('x');

Min[of] = x => Min(x);
Min[empty] = () => Min(Number.MIN_VALUE);

Min.prototype[equals] = function(y) {
    return this.x === y.x;
};
Min.prototype[concat] = function(y) {
    return Min(Math.min(this.x, y.x));
};

module.exports = Min;
