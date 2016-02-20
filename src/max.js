'use strict';

const {tagged} = require('daggy');
const {empty, of, concat, equals} = require('fantasy-land');

const Max = tagged('x');

Max[of] = x => Max(x);
Max[empty] = () => Max(Number.MIN_VALUE);

Max.prototype[equals] = function(y) {
    return this.x === y.x;
};
Max.prototype[concat] = function(y) {
    return Max(this.x > y.x ? this.x : y.x);
};

module.exports = Max;
