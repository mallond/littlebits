"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ThumbnailLink = exports.Thumbnail = void 0;

var _react = _interopRequireDefault(require("react"));

var _utils = require("../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * Thumbnail component.
 * http://foundation.zurb.com/sites/docs/switch.html
 *
 * @param {Object} props
 * @returns {Object}
 */
var Thumbnail = function Thumbnail(props) {
  var className = (0, _utils.createClassName)(props.noDefaultClassName ? null : 'thumbnail', props.className, (0, _utils.generalClassNames)(props));
  var passProps = (0, _utils.removeProps)(props, (0, _utils.objectKeys)(Thumbnail.propTypes));
  return _react.default.createElement("img", _extends({}, passProps, {
    className: className
  }));
};

exports.Thumbnail = Thumbnail;
Thumbnail.propTypes = _objectSpread({}, _utils.GeneralPropTypes, _utils.FlexboxPropTypes);
/**
 * Thumbnail link component.
 * http://foundation.zurb.com/sites/docs/switch.html
 *
 * @param {Object} props
 * @returns {Object}
 */

var ThumbnailLink = function ThumbnailLink(props) {
  var className = (0, _utils.createClassName)(props.noDefaultClassName ? null : 'thumbnail', props.className, (0, _utils.generalClassNames)(props)); // TODO: Consider improving how properties are set for both the link and image.

  var passProps = (0, _utils.removeProps)(props, (0, _utils.objectKeys)(ThumbnailLink.propTypes));
  return _react.default.createElement("a", {
    className: className
  }, _react.default.createElement("img", passProps));
};

exports.ThumbnailLink = ThumbnailLink;
ThumbnailLink.propTypes = _objectSpread({}, _utils.GeneralPropTypes, _utils.FlexboxPropTypes);

//# sourceMappingURL=thumbnail.js.map