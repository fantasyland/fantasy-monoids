'use strict';

const {tagged} = require('daggy');
const {empty, of, concat, equals} = require('fantasy-land');

const Max = tagged('x');

Max[of] = x => Max(x);
Max[empty] = () => Max(Number.MAX_VALUE);

Max.prototype[equals] = function(y) {
    return this.x === y.x;
};
Max.prototype[concat] = function(y) {
    return Max(Math.max(this.x, y.x));
};

module.exports = Max;
