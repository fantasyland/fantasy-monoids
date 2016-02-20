'use strict';

const {tagged} = require('daggy');
const {empty, of, concat, equals} = require('fantasy-land');
const {compare, min, GT} = require('./ord');

const Max = Ord => {
  const Max = tagged('x');

  Max[of] = x => Max(Ord[of](x));
  Max[empty] = () => Max(Ord[min]());

  Max.prototype[equals] = function(y) {
      return this.x[equals](y.x);
  };
  Max.prototype[concat] = function(y) {
      return Max(this.x[compare](y.x) === GT ? this.x: y.x);
  };

  return Max;
};

module.exports = Max;
