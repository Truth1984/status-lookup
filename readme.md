## Status-lookup

Scenario: When tracking boolean status in a disk storage / database, you often need to create a table and it is a waste of space.

Status-lookup can convert your boolean status into a integer, and convert it back when you provided dictionary

### example :

```js
const StatusLookup = require("status-lookup");
let converter = new StatusLookup(["switch:on", "switch:off", "red", "green", "purple", "sweet", "sour", "bitter"]);

converter.compress("red", "sour"); // 68
converter.lookup(68); // { red: true, sour: true }
```

### api:

##### compress(...keys):

compress a list of status into a integer, skip when keys does not exist in the map;

##### lookup(int):

lookup an integer will return a map that contains the original key.

### notice:

**if you want to expand the dictionary, you need to initialize a new class and append new item to the end of the original lookup dictionary**
