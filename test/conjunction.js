'use strict';

const {adapters: {nodeunit: λ}} = require('fantasy-check');
const {identity} = require('fantasy-combinators');

const f = require('fantasy-land/laws/functor');
const m = require('fantasy-land/laws/monoid');
const s = require('fantasy-land/laws/semigroup');
const sʹ = require('fantasy-land/laws/setoid');

const {Conjunction} = require('../fantasy-monoids');

exports.functor = {

    'identity': λ.law(f.identity)(Conjunction),
    'composition': λ.law(f.composition)(Conjunction)
};


exports.monoid = {

    'rightIdentity': λ.law(m.rightIdentity)(Conjunction),
    'leftIdentity': λ.law(m.leftIdentity)(Conjunction)
};


exports.semigroup = {

    'associativity': λ.law(s.associativity)(Conjunction)
};


exports.setoid = {

    'reflexivity': λ.law(sʹ.reflexivity)(Conjunction),
    'symmetry': λ.law(sʹ.symmetry)(Conjunction),
    'transitivity': λ.law(sʹ.transitivity)(Conjunction)
};