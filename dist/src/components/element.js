"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Inline = exports.Block = void 0;

var _react = _interopRequireDefault(require("react"));

var _utils = require("../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * Div component.
 *
 * @param {Object} props
 * @returns {Object}
 */
var Block = function Block(props) {
  var passProps = (0, _utils.removeProps)(props, (0, _utils.objectKeys)(Block.propTypes));
  return _react.default.createElement("div", _extends({}, passProps, {
    className: (0, _utils.createClassName)(props.className, (0, _utils.generalClassNames)(props))
  }));
};

exports.Block = Block;
Block.propTypes = _objectSpread({}, _utils.GeneralPropTypes, _utils.FlexboxPropTypes);
/**
 * Span component.
 *
 * @param {Object} props
 * @returns {Object}
 */

var Inline = function Inline(props) {
  var passProps = (0, _utils.removeProps)(props, (0, _utils.objectKeys)(Inline.propTypes));
  return _react.default.createElement("span", _extends({}, passProps, {
    className: (0, _utils.createClassName)(props.className, (0, _utils.generalClassNames)(props))
  }));
};

exports.Inline = Inline;
Inline.propTypes = _objectSpread({}, _utils.GeneralPropTypes, _utils.FlexboxPropTypes);

//# sourceMappingURL=element.js.map