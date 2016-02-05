'use strict';

const {tagged} = require('daggy');
const {empty, of, concat, equals} = require('fantasy-land');

const Disjunction = tagged('x');

Disjunction[of] = x => Disjunction(x);
Disjunction[empty] = () => Disjunction(false);

Disjunction.prototype[equals] = function(y) {
    return this.x === y.x;
};
Disjunction.prototype[concat] = function(y) {
    return Disjunction(this.x || y.x);
};

module.exports = Disjunction;
