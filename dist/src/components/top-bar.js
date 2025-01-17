"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TopBarRight = exports.TopBarLeft = exports.TopBarTitle = exports.TopBar = void 0;

var _react = _interopRequireDefault(require("react"));

var _utils = require("../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * Top bar component.
 * http://foundation.zurb.com/sites/docs/top-bar.html
 *
 * @param {Object} props
 * @returns {Object}
 */
var TopBar = function TopBar(props) {
  var className = (0, _utils.createClassName)(props.noDefaultClassName ? null : 'top-bar', props.className, (0, _utils.generalClassNames)(props));
  var passProps = (0, _utils.removeProps)(props, (0, _utils.objectKeys)(TopBar.propTypes));
  return _react.default.createElement("div", _extends({}, passProps, {
    className: className
  }));
};

exports.TopBar = TopBar;
TopBar.propTypes = _objectSpread({}, _utils.GeneralPropTypes, _utils.FlexboxPropTypes);
/**
 * Top bar title sub-component.
 *
 * @param {Object} props
 * @returns {Object}
 */

var TopBarTitle = function TopBarTitle(props) {
  var className = (0, _utils.createClassName)(props.noDefaultClassName ? null : 'top-bar-title', props.className, (0, _utils.generalClassNames)(props));
  var passProps = (0, _utils.removeProps)(props, (0, _utils.objectKeys)(TopBarTitle.propTypes));
  return _react.default.createElement("div", _extends({}, passProps, {
    className: className
  }));
};

exports.TopBarTitle = TopBarTitle;
TopBarTitle.propTypes = _objectSpread({}, _utils.GeneralPropTypes, _utils.FlexboxPropTypes);
/**
 * Top bar left sub-component.
 *
 * @param {Object} props
 * @returns {Object}
 */

var TopBarLeft = function TopBarLeft(props) {
  var className = (0, _utils.createClassName)(props.noDefaultClassName ? null : 'top-bar-left', props.className, (0, _utils.generalClassNames)(props));
  var passProps = (0, _utils.removeProps)(props, (0, _utils.objectKeys)(TopBarLeft.propTypes));
  return _react.default.createElement("div", _extends({}, passProps, {
    className: className
  }));
};

exports.TopBarLeft = TopBarLeft;
TopBarLeft.propTypes = _objectSpread({}, _utils.GeneralPropTypes, _utils.FlexboxPropTypes);
/**
 * Top bar right sub-component.
 *
 * @param {Object} props
 * @returns {Object}
 */

var TopBarRight = function TopBarRight(props) {
  var className = (0, _utils.createClassName)(props.noDefaultClassName ? null : 'top-bar-right', props.className, (0, _utils.generalClassNames)(props));
  var passProps = (0, _utils.removeProps)(props, (0, _utils.objectKeys)(TopBarRight.propTypes));
  return _react.default.createElement("div", _extends({}, passProps, {
    className: className
  }));
};

exports.TopBarRight = TopBarRight;
TopBarRight.propTypes = _objectSpread({}, _utils.GeneralPropTypes, _utils.FlexboxPropTypes);

//# sourceMappingURL=top-bar.js.map