'use strict';

const {adapters: {nodeunit: λ}} = require('fantasy-check');
const {identity} = require('fantasy-combinators');

const {of, concat, empty} = require('fantasy-land')
const m = require('fantasy-land/laws/monoid');
const s = require('fantasy-land/laws/semigroup');
const sʹ = require('fantasy-land/laws/setoid');

const {Max, Ord, mconcat} = require('../fantasy-monoids');
const Ordʹ = Ord({ min: () => Ordʹ(Number.MIN_NUMBER)
                 , max: () => Ordʹ(Number.MAX_NUMBER)
                 , compare: (x, y) => x === y ? Ord.EQ : x < y ? Ord.LT : Ord.GT
                 });
const Maxʹ = Max(Ordʹ);

exports.monoid = {

    'rightIdentity': λ.law(m.rightIdentity)(Maxʹ),
    'leftIdentity': λ.law(m.leftIdentity)(Maxʹ)
};


exports.semigroup = {

    'associativity': λ.law(s.associativity)(Maxʹ[of])
};


exports.setoid = {

    'reflexivity': λ.law(sʹ.reflexivity)(Maxʹ[of]),
    'symmetry': λ.law(sʹ.symmetry)(Maxʹ[of]),
    'transitivity': λ.law(sʹ.transitivity)(Maxʹ[of])
};

exports.basicUsage = test => {
    const expected = { x: { x: 9 } };

    test.deepEqual(
        Maxʹ(Ordʹ(3))
          [concat](Maxʹ(Ordʹ(6)))
          [concat](Maxʹ(Ordʹ(8)))
          [concat](Maxʹ(Ordʹ(9)))
          [concat](Maxʹ(Ordʹ(1)))
        , expected
    )
    test.deepEqual(
        mconcat([ Maxʹ(Ordʹ(3))
                , Maxʹ(Ordʹ(6))
                , Maxʹ(Ordʹ(8))
                , Maxʹ(Ordʹ(9))
                , Maxʹ(Ordʹ(1))
                ], Maxʹ[empty]()
                )
        , expected);


    test.done();
};
