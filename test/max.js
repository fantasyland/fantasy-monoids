'use strict';

const {adapters: {nodeunit: λ}} = require('fantasy-check');
const {identity} = require('fantasy-combinators');

const m = require('fantasy-land/laws/monoid');
const s = require('fantasy-land/laws/semigroup');
const sʹ = require('fantasy-land/laws/setoid');

const {Max} = require('../fantasy-monoids');

exports.monoid = {

    'rightIdentity': λ.law(m.rightIdentity)(Max),
    'leftIdentity': λ.law(m.leftIdentity)(Max)
};


exports.semigroup = {

    'associativity': λ.law(s.associativity)(Max)
};


exports.setoid = {

    'reflexivity': λ.law(sʹ.reflexivity)(Max),
    'symmetry': λ.law(sʹ.symmetry)(Max),
    'transitivity': λ.law(sʹ.transitivity)(Max)
};
