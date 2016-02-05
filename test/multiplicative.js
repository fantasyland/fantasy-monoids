'use strict';

const {adapters: {nodeunit: λ}} = require('fantasy-check');
const {identity} = require('fantasy-combinators');

const f = require('fantasy-land/laws/functor');
const m = require('fantasy-land/laws/monoid');
const s = require('fantasy-land/laws/semigroup');
const sʹ = require('fantasy-land/laws/setoid');

const {Multiplicative} = require('../fantasy-monoids');

exports.functor = {

    'identity': λ.law(f.identity)(Multiplicative),
    'composition': λ.law(f.composition)(Multiplicative)
};


exports.monoid = {

    'rightIdentity': λ.law(m.rightIdentity)(Multiplicative),
    'leftIdentity': λ.law(m.leftIdentity)(Multiplicative)
};


exports.semigroup = {

    'associativity': λ.law(s.associativity)(Multiplicative)
};


exports.setoid = {

    'reflexivity': λ.law(sʹ.reflexivity)(Multiplicative),
    'symmetry': λ.law(sʹ.symmetry)(Multiplicative),
    'transitivity': λ.law(sʹ.transitivity)(Multiplicative)
};