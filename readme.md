## Status-lookup

Scenario: Compressing boolean status in disk storage / database

Status-lookup can convert your boolean status into bigint, and convert it back

### example :

```js
const StatusLookup = require("status-lookup");
let converter = new StatusLookup(["switch:on", "switch:off", "red", "green", "purple", "sweet", "sour", "bitter"]);

converter.compress("red", "sour"); // Integer { value: 68n }
converter.compress("red", "sour") == 68n; // true
converter.lookup(68n); // { red: true, sour: true }
```

### api:

##### compress(...keys):

compress a list of status into a integer, skip when keys does not exist in the map;

##### lookup(bigint):

return a true status map

### notice:

**if you want to expand the dictionary, you need to initialize a new class and append new item to the end of the original lookup dictionary**

### 2.0.0 :

dictionary size can now exceed 53
