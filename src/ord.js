'use strict';

const {tagged} = require('daggy');
const {empty, of, concat, equals} = require('fantasy-land');

const Ord = M => {

    const _Ord = tagged('x');

    _Ord[of] = _Ord;
    _Ord[Ord.min] = M[Ord.min];
    _Ord[Ord.max] = M[Ord.max];

    _Ord.prototype.compare = function(y) {
      return M.compare(this.x, y.x);
    };
    _Ord.prototype[equals] = function(y) {
        return M.compare(this.x, y.x) === Ord.EQ;
    };
    _Ord.prototype.lt = function(y) {
        return M.compare(this.x, y.x) === Ord.LT;
    };
    _Ord.prototype.gt = function(y) {
        return M.compare(this.x, y.x) === Ord.GT;
    };

    return _Ord;
};

Ord.EQ = 0;
Ord.GT = 1;
Ord.LT = -1;

Ord.compare = 'compare';
Ord.min = 'min';
Ord.max = 'max';

module.exports = Ord;
