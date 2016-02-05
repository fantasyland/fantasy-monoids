'use strict';

const {tagged} = require('daggy');
const {empty, of, concat, map, equals} = require('fantasy-land');

const Additive = tagged('x');

Additive[of] = x => Additive(x);
Additive[empty] = () => Additive(0);

Additive.prototype[equals] = function(y) {
    return this.x === y.x;
};
Additive.prototype[concat] = function(y) {
    return Additive(this.x + y.x);
};

Additive.prototype[map] = function(f) {
    return Additive(f(this.x));
};

module.exports = Additive;