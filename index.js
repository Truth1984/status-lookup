module.exports = class {
  constructor(lookups = []) {
    if (new Set(lookups).size != lookups.length) throw "status-lookup: duplicate entries found";
    this.dict = {};
    for (let i = 0; i < lookups.length; i++) this.dict[lookups[i]] = i;
  }

  /**
   * @returns {number}
   */
  compress(...keys) {
    let base = 0;
    for (let i of keys) if (this.dict[i]) base += Math.pow(2, this.dict[i]);
    return base;
  }

  /**
   * @return {Object}
   */
  lookup(int) {
    let result = {};
    let binary = int.toString(2);
    let originKey = Object.keys(this.dict);
    for (let i = binary.length; i > -1; i--) if (binary[i] == "1") result[originKey[binary.length - 1 - i]] = true;
    return result;
  }
};
