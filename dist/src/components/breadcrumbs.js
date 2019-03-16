"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BreadcrumbItem = exports.Breadcrumbs = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _utils = require("../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * Breadcrumbs component.
 * http://foundation.zurb.com/sites/docs/breadcrumbs.html
 *
 * @param {Object} props
 * @returns {Object}
 */
var Breadcrumbs = function Breadcrumbs(props) {
  var className = (0, _utils.createClassName)(props.noDefaultClassName ? null : 'breadcrumbs', props.className, (0, _utils.generalClassNames)(props));
  var passProps = (0, _utils.removeProps)(props, (0, _utils.objectKeys)(Breadcrumbs.propTypes));
  return _react.default.createElement("ul", _extends({}, passProps, {
    className: className
  }));
};

exports.Breadcrumbs = Breadcrumbs;
Breadcrumbs.propTypes = _objectSpread({}, _utils.GeneralPropTypes);
/**
 * Breadcrumb item component.
 *
 * @param {Object} props
 * @returns {Object}
 */

var BreadcrumbItem = function BreadcrumbItem(props) {
  var className = (0, _utils.createClassName)(props.className, {
    'disabled': props.isDisabled
  }, (0, _utils.generalClassNames)(props));
  var passProps = (0, _utils.removeProps)(props, (0, _utils.objectKeys)(BreadcrumbItem.propTypes));
  return _react.default.createElement("li", _extends({}, passProps, {
    className: className
  }));
};

exports.BreadcrumbItem = BreadcrumbItem;
BreadcrumbItem.propTypes = _objectSpread({}, _utils.GeneralPropTypes, _utils.FlexboxPropTypes, {
  isDisabled: _propTypes.default.bool
});

//# sourceMappingURL=breadcrumbs.js.map