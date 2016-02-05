'use strict';

const {tagged} = require('daggy');
const {identity} = require('fantasy-combinators');
const {empty, of, concat} = require('fantasy-land');

const Endo = tagged('f');

Endo[of] = x => Endo(x);
Endo[empty] = () => Endo(identity);

Endo.prototype[concat] = function(y) {
    return Endo(x => this.f(y.f(x)));
};

module.exports = Endo;
