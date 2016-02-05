'use strict';

const {tagged} = require('daggy');
const {empty, of, concat, map} = require('fantasy-land');

const Unit = tagged('x');

Unit[empty] = () => Unit({});
Unit[of] = Unit[empty];

Unit.prototype[concat] = function(y) {
    return Unit({});
};

Unit.prototype[map] = function(f) {
    return Unit({});
};

module.exports = Unit;