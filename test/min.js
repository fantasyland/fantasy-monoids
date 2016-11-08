'use strict';

const {of, concat, empty} = require('fantasy-land')
const {adapters: {nodeunit: λ}} = require('fantasy-check');
const {identity} = require('fantasy-combinators');

const m = require('fantasy-land/laws/monoid');
const s = require('fantasy-land/laws/semigroup');
const sʹ = require('fantasy-land/laws/setoid');

const {Min, Ord, mconcat} = require('../fantasy-monoids');
const Ordʹ = Ord({ min: () => Ordʹ(Number.MIN_NUMBER)
                 , max: () => Ordʹ(Number.MAX_NUMBER)
                 , compare: (x, y) => x === y ? Ord.EQ : x < y ? Ord.LT : Ord.GT
                 });
const Minʹ = Min(Ordʹ);

exports.monoid = {

    'rightIdentity': λ.law(m.rightIdentity)(Minʹ),
    'leftIdentity': λ.law(m.leftIdentity)(Minʹ)
};


exports.semigroup = {

    'associativity': λ.law(s.associativity)(Minʹ[of])
};


exports.setoid = {

    'reflexivity': λ.law(sʹ.reflexivity)(Minʹ[of]),
    'symmetry': λ.law(sʹ.symmetry)(Minʹ[of]),
    'transitivity': λ.law(sʹ.transitivity)(Minʹ[of])
};

exports.basicUsage = test => {
    const expected = { x: { x: 1 } };

    test.deepEqual(
        Minʹ(Ordʹ(3))
          [concat](Minʹ(Ordʹ(6)))
          [concat](Minʹ(Ordʹ(8)))
          [concat](Minʹ(Ordʹ(9)))
          [concat](Minʹ(Ordʹ(1)))
        , expected
    )
    test.deepEqual(
        mconcat([ Minʹ(Ordʹ(3))
                , Minʹ(Ordʹ(6))
                , Minʹ(Ordʹ(8))
                , Minʹ(Ordʹ(9))
                , Minʹ(Ordʹ(1))
                ], Minʹ[empty]()
                )
        , expected);


    test.done();
};
