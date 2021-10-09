"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _airtable = _interopRequireDefault(require("airtable"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var base = new _airtable["default"]({
  apiKey: process.env.REACT_APP_AIRTABLE_KEY
}).base(process.env.REACT_APP_AIRTABLE_BASE);
var _default = base;
exports["default"] = _default;