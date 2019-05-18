"use strict";

var _ = require(".");

test("Says hello world", function () {
  return expect((0, _.toMessage)()).toBe(_.message.default);
});