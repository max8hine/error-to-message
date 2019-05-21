# Error to Message

_As the name, it take whatever error and return a String for display in front-end._

🚨Still in development, have not tested yet.

I want a function that could take care the caught all type of error and return a string, just like that and tried to write the helper error handler function cross project.

## Developing Road map:

- Sending email for unexpected errors

## Install

```shell
npm install error-to-message
# or
yarn add error-to-message
```

## Example

## Basic

```javascript
const { toMessage } = require("error-to-message");
// ES2015
import { toMessage } from "error-to-message";

try {
  // throw error
} catch (e) {
  // uses as String
  <Notification message={toMessage(e)} />;
}
```

## Advanced

```javascript
import { newErrorMessage, errorAxios } from "error-to-message";

// 01, Optional, {Function} write your own errorHandler if needs
/** @returns {String} */
const myCustomizedErrorHandler = error => {
  if (typeof error === "object" && error.customizedKey)
    return error.customizedMsgString;
  else return error;
};

// 02, Optional, {String} write you own fallbackMessage
const fallbackMessage = "Oops, something went wrong, please try again";

// 03, Composing errorHandlers as what you needs
const toMessage = error =>
  newErrorMessage(fallbackMessage)(
    myCustomizedErrorHandler,
    errorAxios
    // ...other handlers
  )(error);

try {
  // throw error
} catch (e) {
  // uses as String
  <Notification message={toMessage(e)} />;
}
```
