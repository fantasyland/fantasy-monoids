'use strict';

const {tagged} = require('daggy');
const {empty, of, concat, equals} = require('fantasy-land');

const Conjunction = tagged('x');

Conjunction[of] = x => Conjunction(x);
Conjunction[empty] = () => Conjunction(true);

Conjunction.prototype[equals] = function(y) {
    return this.x === y.x;
};
Conjunction.prototype[concat] = function(y) {
    return Conjunction(this.x && y.x);
};

module.exports = Conjunction;
