"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ButtonGroup = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _enums = require("../enums");

var _utils = require("../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * Button group component.
 * http://foundation.zurb.com/sites/docs/button-group.html
 *
 * @param {Object} props
 * @returns {Object}
 */
var ButtonGroup = function ButtonGroup(props) {
  var className = (0, _utils.createClassName)(props.noDefaultClassName ? null : 'button-group', props.className, props.color, props.size, {
    'expanded': props.isExpanded,
    'stacked-for-small': props.stackFor === _enums.Breakpoints.SMALL,
    'stacked-for-medium': props.stackFor === _enums.Breakpoints.MEDIUM,
    'stacked-for-large': props.stackFor === _enums.Breakpoints.LARGE,
    'stacked': props.isStacked
  }, (0, _utils.generalClassNames)(props));
  var passProps = (0, _utils.removeProps)(props, (0, _utils.objectKeys)(ButtonGroup.propTypes));
  return _react.default.createElement("div", _extends({}, passProps, {
    className: className
  }));
};

exports.ButtonGroup = ButtonGroup;
ButtonGroup.propTypes = _objectSpread({}, _utils.GeneralPropTypes, _utils.FlexboxPropTypes, {
  color: _propTypes.default.oneOf((0, _utils.objectValues)(_enums.ButtonGroupColors)),
  size: _propTypes.default.oneOf((0, _utils.objectValues)(_enums.ButtonGroupSizes)),
  stackFor: _propTypes.default.oneOf((0, _utils.objectValues)(_enums.Breakpoints)),
  isExpanded: _propTypes.default.bool,
  isStacked: _propTypes.default.bool
});

//# sourceMappingURL=button-group.js.map