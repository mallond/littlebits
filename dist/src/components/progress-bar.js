"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NativeProgress = exports.ProgressMeterText = exports.ProgressMeterWithText = exports.ProgressMeter = exports.Progress = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _enums = require("../enums");

var _utils = require("../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * Progress component.
 * http://foundation.zurb.com/sites/docs/progress-bar.html
 *
 * @param {Object} props
 * @returns {Object}
 */
var Progress = function Progress(props) {
  var _props$meter = props.meter,
      meterProps = _props$meter === void 0 ? {} : _props$meter;
  var className = (0, _utils.createClassName)(props.noDefaultClassName ? null : 'progress', props.className, props.color, (0, _utils.generalClassNames)(props));

  if (props.value) {
    meterProps.style = meterProps.style || {};
    meterProps.style.width = "".concat(props.value, "%");
  }

  var passProps = (0, _utils.removeProps)(props, (0, _utils.objectKeys)(Progress.propTypes));
  return _react.default.createElement("div", _extends({}, passProps, {
    className: className,
    role: "progressbar",
    "aria-valuemin": props.min,
    "aria-valuemax": props.max,
    "aria-valuenow": props.value,
    "aria-valuetext": props.valueText
  }), meterProps.text ? _react.default.createElement(ProgressMeterWithText, meterProps) : _react.default.createElement(ProgressMeter, meterProps));
};

exports.Progress = Progress;
Progress.propTypes = _objectSpread({}, _utils.GeneralPropTypes, _utils.FlexboxPropTypes, {
  min: _propTypes.default.number,
  max: _propTypes.default.number,
  value: _propTypes.default.number,
  color: _propTypes.default.oneOf((0, _utils.objectValues)(_enums.ProgressColors))
});
/**
 * Progress meter sub-component.
 *
 * @param {Object} props
 * @returns {Object}
 */

var ProgressMeter = function ProgressMeter(props) {
  var className = (0, _utils.createClassName)(props.noDefaultClassName ? null : 'progress-meter', props.className, (0, _utils.generalClassNames)(props));
  var passProps = (0, _utils.removeProps)(props, (0, _utils.objectKeys)(ProgressMeter.propTypes));
  return _react.default.createElement("div", _extends({}, passProps, {
    className: className
  }));
};

exports.ProgressMeter = ProgressMeter;
ProgressMeter.propTypes = _objectSpread({}, _utils.GeneralPropTypes);
/**
 * Progress meter with text sub-component.
 *
 * @param {Object} props
 * @returns {Object}
 */

var ProgressMeterWithText = function ProgressMeterWithText(props) {
  var className = (0, _utils.createClassName)(props.noDefaultClassName ? null : 'progress-meter', props.className, (0, _utils.generalClassNames)(props));
  var passProps = (0, _utils.removeProps)(props, (0, _utils.objectKeys)(ProgressMeterWithText.propTypes));
  return _react.default.createElement("span", _extends({}, passProps, {
    className: className
  }), _react.default.createElement(ProgressMeterText, null, props.text));
};

exports.ProgressMeterWithText = ProgressMeterWithText;
ProgressMeterWithText.propTypes = _objectSpread({}, _utils.GeneralPropTypes, _utils.FlexboxPropTypes, {
  text: _propTypes.default.string.isRequired
});
/**
 * Progress meter text sub-component.
 *
 * @param {Object} props
 * @returns {Object}
 */

var ProgressMeterText = function ProgressMeterText(props) {
  var className = (0, _utils.createClassName)(props.noDefaultClassName ? null : 'progress-meter-text', props.className, (0, _utils.generalClassNames)(props));
  var passProps = (0, _utils.removeProps)(props, (0, _utils.objectKeys)(ProgressMeterText.propTypes));
  return _react.default.createElement("p", _extends({}, passProps, {
    className: className
  }));
};

exports.ProgressMeterText = ProgressMeterText;
ProgressMeterText.propTypes = _objectSpread({}, _utils.GeneralPropTypes);
/**
 * Native progress component.
 * http://foundation.zurb.com/sites/docs/progress-bar.html#native-progress
 *
 * @returns {Object}
 */

var NativeProgress = function NativeProgress(props) {
  var className = (0, _utils.createClassName)(props.className, props.color, (0, _utils.generalClassNames)(props));
  var passProps = (0, _utils.removeProps)(props, (0, _utils.objectKeys)(NativeProgress.propTypes));
  return _react.default.createElement("progress", _extends({}, passProps, {
    max: props.max,
    value: props.value,
    className: className
  }));
};

exports.NativeProgress = NativeProgress;
NativeProgress.propTypes = _objectSpread({}, _utils.GeneralPropTypes, _utils.FlexboxPropTypes, {
  max: _propTypes.default.number,
  value: _propTypes.default.number,
  color: _propTypes.default.oneOf((0, _utils.objectValues)(_enums.ProgressColors))
}); // TODO: Consider adding support for native meter.

//# sourceMappingURL=progress-bar.js.map