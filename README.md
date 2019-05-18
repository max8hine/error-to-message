# Example

```shell
npm install error-to-message
# or
yarn add error-to-message
```

```javascript
const { toMessage } = require("error-to-message");
// ES2015
import { toMessage } from "error-to-message";

const message = toMessage(new Error("Oops! Error."));

console.log(typeof message); // => 'string'
```
