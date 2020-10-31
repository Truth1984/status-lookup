const bigint = require("big-integer");

module.exports = class {
  constructor(lookups = []) {
    if (new Set(lookups).size != lookups.length) throw "status-lookup: duplicate entries found";
    this.dict = {};
    for (let i = 0; i < lookups.length; i++) this.dict[lookups[i]] = i;
  }

  compress(...keys) {
    let base = bigint(0);
    for (let i of keys) if (this.dict[i]) base = base.add(bigint(2).pow(this.dict[i]));
    return base;
  }

  lookup(bigInt) {
    let result = {};
    let binary = bigInt.toString(2);
    let originKey = Object.keys(this.dict);
    for (let i = binary.length; i > -1; i--) if (binary[i] == "1") result[originKey[binary.length - 1 - i]] = true;
    return result;
  }
};
