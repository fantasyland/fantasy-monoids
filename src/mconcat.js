const concat = require('./concat');

const mconcat = (xs, empty) => xs.length ? xs.reduce(concat) : empty();

module.exports = mconcat;
