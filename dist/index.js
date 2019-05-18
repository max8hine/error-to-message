"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toMessage = exports.message = void 0;
var message = {
  default: "Oops, something went wrong, please try again"
};
exports.message = message;

var toMessage = function toMessage() {
  return message.default;
};

exports.toMessage = toMessage;