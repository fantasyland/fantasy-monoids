'use strict';

const {adapters: {nodeunit: λ}} = require('fantasy-check');
const {identity} = require('fantasy-combinators');

const m = require('fantasy-land/laws/monoid');
const s = require('fantasy-land/laws/semigroup');
const sʹ = require('fantasy-land/laws/setoid');

const {Min} = require('../fantasy-monoids');

exports.monoid = {

    'rightIdentity': λ.law(m.rightIdentity)(Min),
    'leftIdentity': λ.law(m.leftIdentity)(Min)
};


exports.semigroup = {

    'associativity': λ.law(s.associativity)(Min)
};


exports.setoid = {

    'reflexivity': λ.law(sʹ.reflexivity)(Min),
    'symmetry': λ.law(sʹ.symmetry)(Min),
    'transitivity': λ.law(sʹ.transitivity)(Min)
};
