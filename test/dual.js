'use strict';

const {adapters: {nodeunit: λ}} = require('fantasy-check');
const {identity} = require('fantasy-combinators');

const {of} = require('fantasy-land')
const m = require('fantasy-land/laws/monoid');
const s = require('fantasy-land/laws/semigroup');
const sʹ = require('fantasy-land/laws/setoid');

const {Additive, Dual} = require('../fantasy-monoids');

const Dualʹ = Dual(Additive);

exports.monoid = {

    'rightIdentity': λ.law(m.rightIdentity)(Dualʹ),
    'leftIdentity': λ.law(m.leftIdentity)(Dualʹ)
};


exports.semigroup = {

    'associativity': λ.law(s.associativity)(Dualʹ[of])
};


exports.setoid = {

    'reflexivity': λ.law(sʹ.reflexivity)(Dualʹ[of]),
    'symmetry': λ.law(sʹ.symmetry)(Dualʹ[of]),
    'transitivity': λ.law(sʹ.transitivity)(Dualʹ[of])
};
