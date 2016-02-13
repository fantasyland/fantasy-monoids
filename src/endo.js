'use strict';

const {tagged} = require('daggy');
const {identity, compose} = require('fantasy-combinators');
const {empty, of, concat} = require('fantasy-land');

const Endo = tagged('f');

Endo[of] = x => Endo(x);
Endo[empty] = () => Endo(identity);

Endo.prototype[concat] = function(y) {
    return Endo(compose(this.f)(y.f));
};

module.exports = Endo;
