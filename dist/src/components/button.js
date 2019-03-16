"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Link = exports.Button = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _enums = require("../enums");

var _utils = require("../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Button property types.
 *
 * @type {Object}
 */
var ButtonPropTypes = _objectSpread({}, _utils.GeneralPropTypes, _utils.FlexboxPropTypes, {
  color: _propTypes.default.oneOf((0, _utils.objectValues)(_enums.ButtonColors)),
  size: _propTypes.default.oneOf((0, _utils.objectValues)(_enums.ButtonSizes)),
  isHollow: _propTypes.default.bool,
  isClear: _propTypes.default.bool,
  isExpanded: _propTypes.default.bool,
  isDisabled: _propTypes.default.bool,
  isDropdown: _propTypes.default.bool
});
/**
 * Button component.
 * http://foundation.zurb.com/sites/docs/button.html
 *
 * @param {Object} props
 * @returns {Object}
 */


var Button = function Button(props) {
  var passProps = (0, _utils.removeProps)(props, (0, _utils.objectKeys)(Button.propTypes));
  return _react.default.createElement("button", _extends({}, passProps, {
    className: createButtonClassName(props)
  }));
};

exports.Button = Button;
Button.propTypes = ButtonPropTypes;
/**
 * Link button component.
 * http://foundation.zurb.com/sites/docs/button.html#basics
 *
 * @param {Object} props
 * @returns {Object}
 */

var Link = function Link(props) {
  var passProps = (0, _utils.removeProps)(props, (0, _utils.objectKeys)(Button.propTypes));
  return _react.default.createElement("a", _extends({}, passProps, {
    className: createButtonClassName(props)
  }));
};

exports.Link = Link;
Link.propTypes = ButtonPropTypes;
/**
 * Creates button class name from the given properties.
 *
 * @param {Object} props
 * @returns {string}
 */

function createButtonClassName(props) {
  return (0, _utils.createClassName)(props.noDefaultClassName ? null : 'button', props.className, props.size, props.color, {
    'hollow': props.isHollow,
    'clear': props.isClear,
    'expanded': props.isExpanded,
    'disabled': props.isDisabled,
    'dropdown': props.isDropdown,
    'arrow-only': props.isArrowOnly
  }, (0, _utils.generalClassNames)(props));
}

//# sourceMappingURL=button.js.map