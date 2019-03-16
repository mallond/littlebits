"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SwitchInactive = exports.SwitchActive = exports.SwitchPaddle = exports.SwitchInput = exports.Switch = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _enums = require("../enums");

var _utils = require("../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var currentId = 0;
/**
 * Switch component.
 * http://foundation.zurb.com/sites/docs/switch.html
 *
 * @param {Object} props
 * @returns {Object}
 */

var Switch = function Switch(props) {
  var className = (0, _utils.createClassName)(props.noDefaultClassName ? null : 'switch', props.className, props.size, (0, _utils.generalClassNames)(props));
  var switchId = props.id || "switch".concat(currentId++); // TODO: Consider refactoring this, the rendering a little bit messy...

  return _react.default.createElement("div", _extends({}, (0, _utils.removeProps)(props, ['id']), {
    className: className
  }), _react.default.createElement(SwitchInput, _extends({}, props.input, {
    id: switchId
  })), _react.default.createElement(SwitchPaddle, _extends({}, props.paddle, {
    htmlFor: switchId
  }), props.active ? _react.default.createElement(SwitchActive, props.active) : null, props.inactive ? _react.default.createElement(SwitchInactive, props.inactive) : null));
};

exports.Switch = Switch;
Switch.propTypes = _objectSpread({}, _utils.GeneralPropTypes, _utils.FlexboxPropTypes, {
  size: _propTypes.default.oneOf((0, _utils.objectValues)(_enums.SwitchSizes)),
  id: _propTypes.default.string
});
/**
 * Switch input sub-component.
 *
 * @param {Object} props
 * @returns {Object}
 */

var SwitchInput = function SwitchInput(props) {
  var className = (0, _utils.createClassName)(props.noDefaultClassName ? null : 'switch-input', props.className, (0, _utils.generalClassNames)(props));
  return _react.default.createElement("input", _extends({}, (0, _utils.removeProps)(props, ['type']), {
    className: className,
    type: props.type || _enums.SwitchInputTypes.CHECKBOX
  }));
};

exports.SwitchInput = SwitchInput;
SwitchInput.propTypes = _objectSpread({
  type: _propTypes.default.oneOf((0, _utils.objectValues)(_enums.SwitchInputTypes))
}, _utils.GeneralPropTypes);
/**
 * Switch paddle sub-component.
 *
 * @param {Object} props
 * @returns {Object}
 */

var SwitchPaddle = function SwitchPaddle(props) {
  var className = (0, _utils.createClassName)(props.noDefaultClassName ? null : 'switch-paddle', props.className, (0, _utils.generalClassNames)(props));
  return _react.default.createElement("label", _extends({}, props, {
    className: className
  }));
};
/**
 * Switch active sub-component.
 *
 * @param {Object} props
 * @returns {Object}
 */


exports.SwitchPaddle = SwitchPaddle;

var SwitchActive = function SwitchActive(props) {
  var className = (0, _utils.createClassName)(props.noDefaultClassName ? null : 'switch-active', props.className, (0, _utils.generalClassNames)(props));
  return _react.default.createElement("span", _extends({}, props, {
    className: className,
    "aria-hidden": "true"
  }), props.text);
};
/**
 * Switch inactive sub-component.
 *
 * @param {Object} props
 * @returns {Object}
 */


exports.SwitchActive = SwitchActive;

var SwitchInactive = function SwitchInactive(props) {
  var className = (0, _utils.createClassName)(props.noDefaultClassName ? null : 'switch-inactive', props.className, (0, _utils.generalClassNames)(props));
  return _react.default.createElement("span", _extends({}, props, {
    className: className,
    "aria-hidden": "true"
  }), props.text);
};

exports.SwitchInactive = SwitchInactive;

//# sourceMappingURL=switch.js.map