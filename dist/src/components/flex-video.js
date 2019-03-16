"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FlexVideo = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _utils = require("../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * FlexVideo component.
 * http://foundation.zurb.com/sites/docs/flex-video.html
 *
 * @param {Object} props
 * @returns {Object}
 */
var FlexVideo = function FlexVideo(props) {
  var className = (0, _utils.createClassName)(props.noDefaultClassName ? null : 'flex-video', props.className, {
    widescreen: props.isWidescreen,
    vimeo: props.isVimeo
  }, (0, _utils.generalClassNames)(props));
  var passProps = (0, _utils.removeProps)(props, (0, _utils.objectKeys)(FlexVideo.propTypes));
  return _react.default.createElement("div", _extends({}, passProps, {
    className: className
  }));
};

exports.FlexVideo = FlexVideo;
FlexVideo.propTypes = _objectSpread({}, _utils.GeneralPropTypes, _utils.FlexboxPropTypes, {
  isWidescreen: _propTypes.default.bool,
  isVimeo: _propTypes.default.bool
});

//# sourceMappingURL=flex-video.js.map