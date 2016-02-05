'use strict';

const {tagged} = require('daggy');
const {empty, of, concat, map, equals} = require('fantasy-land');

const Disjunction = tagged('x');

Disjunction[of] = x => Disjunction(x);
Disjunction[empty] = () => Disjunction(false);

Disjunction.prototype[equals] = function(y) {
    return this.x === y.x;
};
Disjunction.prototype[concat] = function(y) {
    return Disjunction(this.x || y.x);
};

Disjunction.prototype[map] = function(f) {
    return Disjunction(f(this.x));
};

module.exports = Disjunction;