'use strict';

const {tagged} = require('daggy');
const {empty, of, concat, equals} = require('fantasy-land');
const {compare, max, LT} = require('./ord');

const Min = Ord => {
  const Min = tagged('x');

  Min[of] = x => Min(Ord[of](x));
  Min[empty] = () => Min(Ord[max]());

  Min.prototype[equals] = function(y) {
      return this.x[equals](y.x);
  };
  Min.prototype[concat] = function(y) {
      return Min(this.x[compare](y.x) === LT ? this.x : y.x);
  };

  return Min;
};

module.exports = Min;
