"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MediaObjectSection = exports.MediaObject = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _enums = require("../enums");

var _utils = require("../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * Media object component.
 *
 * @param {Object} props
 * @returns {Object}
 */
var MediaObject = function MediaObject(props) {
  var className = (0, _utils.createClassName)(props.noDefaultClassName ? null : 'media-object', props.className, {
    'stack-for-small': props.stackForSmall
  }, (0, _utils.generalClassNames)(props));
  var passProps = (0, _utils.removeProps)(props, (0, _utils.objectKeys)(MediaObject.propTypes));
  return _react.default.createElement("div", _extends({}, passProps, {
    className: className
  }));
};

exports.MediaObject = MediaObject;
MediaObject.propTypes = _objectSpread({}, _utils.GeneralPropTypes, _utils.FlexboxPropTypes, {
  stackForSmall: _propTypes.default.bool
});
/**
 * Media object section component.
 *
 * @param {Object} props
 * @returns {Object}
 */

var MediaObjectSection = function MediaObjectSection(props) {
  var className = (0, _utils.createClassName)(props.noDefaultClassName ? null : 'media-object-section', props.className, {
    'align-self-center': props.alignment === _enums.HorizontalAlignments.CENTER,
    'align-self-right': props.alignment === _enums.HorizontalAlignments.RIGHT,
    'align-self-justify': props.alignment === _enums.HorizontalAlignments.JUSTIFY,
    'align-self-spaced': props.alignment === _enums.HorizontalAlignments.SPACED,
    'main-section': props.isMain,
    'middle': props.isMiddle,
    'bottom': props.isBottom
  }, (0, _utils.generalClassNames)(props));
  var passProps = (0, _utils.removeProps)(props, (0, _utils.objectKeys)(MediaObjectSection.propTypes));
  return _react.default.createElement("div", _extends({}, passProps, {
    className: className
  }));
};

exports.MediaObjectSection = MediaObjectSection;
MediaObjectSection.propTypes = _objectSpread({}, _utils.GeneralPropTypes, _utils.FlexboxPropTypes, {
  alignment: _propTypes.default.oneOf((0, _utils.objectValues)(_enums.HorizontalAlignments)),
  isMain: _propTypes.default.bool,
  isMiddle: _propTypes.default.bool,
  isBottom: _propTypes.default.bool
});

//# sourceMappingURL=media-object.js.map