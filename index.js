const Aggregate = require('./src/Aggregate');
const Last = require('./src/Last');
const Reverse = require('./src/Reverse');
const Select = require('./src/Select');
const Where = require('./src/Where');
const Prepend = require('./src/Prepend');

const bindAll = function() {
  Array.prototype.Aggregate = Aggregate;
  Array.prototype.Last = Last;
  Array.prototype.Reverse = Reverse;
  Array.prototype.Select = Select;
  Array.prototype.Where = Where;
  Array.prototype.Prepend = Prepend;
};

module.exports = bindAll;
