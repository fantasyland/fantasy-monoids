'use strict';

const {tagged} = require('daggy');
const {empty, of, concat} = require('fantasy-land');

const Unit = tagged('x');

Unit[empty] = () => Unit({});
Unit[of] = Unit[empty];

Unit.prototype[concat] = function(y) {
    return Unit({});
};

module.exports = Unit;
