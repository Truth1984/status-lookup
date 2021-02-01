const lookups = require("./index");
const bigint = require("big-integer");
let status = ["switch:on", "switch:off", "red", "green", "purple", "sweet", "sour", "bitter"];

let lookup = new lookups(status);

let code = lookup.compress("red", "sour");
let arr = lookup.lookup(code);
let arr2 = lookup.lookup(code.toString());

if (!code.eq(Math.pow(2, 2) + Math.pow(2, 6))) throw "code error";
if (!arr.red || !arr.sour || Object.keys(arr).length != 2) throw "arr error";
if (!arr2.red || !arr2.sour || Object.keys(arr).length != 2) throw "arr2 error";

if (!lookup.has(code, "red")) throw "has1 error";
if (lookup.has(code, "sweet")) throw "has2 error";

console.log("all test passed");
