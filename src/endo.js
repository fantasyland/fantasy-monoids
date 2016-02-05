'use strict';

const {tagged} = require('daggy');
const {compose, identity} = require('fantasy-combinators');
const {empty, of, concat, map} = require('fantasy-land');

const Endo = tagged('f');

Endo[of] = x => Endo(x);
Endo[empty] = () => Endo(identity);

Endo.prototype[concat] = function(y) {
    return Endo(x => this.f(y.f(x)));
};

Endo.prototype[map] = function(f) {
    return Endo(compose(f)(this.f));
};

module.exports = Endo;