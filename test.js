const lookups = require("./index");
const bigint = require("big-integer");
let status = ["switch:on", "switch:off", "red", "green", "purple", "sweet", "sour", "bitter"];

let lookup = new lookups(status);

let code = lookup.compress("red", "sour");
let arr = lookup.lookup(code);

if (!code.eq(Math.pow(2, 2) + Math.pow(2, 6))) throw "code error";
if (!arr.red || !arr.sour || Object.keys(arr).length != 2) throw "arr error";
console.log("all test passed");
