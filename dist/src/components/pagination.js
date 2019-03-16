"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PaginationEllipsis = exports.PaginationNext = exports.PaginationPrevious = exports.PaginationItem = exports.Pagination = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _utils = require("../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * Pagination component.
 * http://foundation.zurb.com/sites/docs/pagination.html
 *
 * @param {Object} props
 * @returns {Object}
 */
var Pagination = function Pagination(props) {
  var className = (0, _utils.createClassName)(props.noDefaultClassName ? null : 'pagination', props.className, {
    'text-center': props.isCentered
  }, (0, _utils.generalClassNames)(props));
  var passProps = (0, _utils.removeProps)(props, (0, _utils.objectKeys)(Pagination.propTypes));
  return _react.default.createElement("ul", _extends({}, passProps, {
    className: className,
    role: "navigation"
  }));
};

exports.Pagination = Pagination;
Pagination.propTypes = _objectSpread({}, _utils.GeneralPropTypes, _utils.FlexboxPropTypes, {
  isCentered: _propTypes.default.bool
});
/**
 * Pagination item component.
 *
 * @param {Object} props
 * @returns {Object}
 */

var PaginationItem = function PaginationItem(props) {
  var className = (0, _utils.createClassName)(props.className, {
    'current': props.isCurrent,
    'disabled': props.isDisabled
  }, (0, _utils.generalClassNames)(props));
  var passProps = (0, _utils.removeProps)(props, (0, _utils.objectKeys)(PaginationItem.propTypes));
  return _react.default.createElement("li", _extends({}, passProps, {
    className: className
  }));
};

exports.PaginationItem = PaginationItem;
PaginationItem.propTypes = _objectSpread({}, _utils.GeneralPropTypes, _utils.FlexboxPropTypes, {
  isCurrent: _propTypes.default.bool,
  isDisabled: _propTypes.default.bool
});
/**
 * Pagination previous wrapper-component.
 *
 * @param {Object} props
 * @returns {Object}
 */

var PaginationPrevious = function PaginationPrevious(props) {
  var className = (0, _utils.createClassName)(props.noDefaultClassName ? null : 'pagination-previous', props.className, (0, _utils.generalClassNames)(props));
  return _react.default.createElement(PaginationItem, _extends({}, props, {
    className: className
  }));
};
/**
 * Pagination next wrapper-component.
 *
 * @param {Object} props
 * @returns {Object}
 */


exports.PaginationPrevious = PaginationPrevious;

var PaginationNext = function PaginationNext(props) {
  var className = (0, _utils.createClassName)(props.noDefaultClassName ? null : 'pagination-next', props.className, (0, _utils.generalClassNames)(props));
  return _react.default.createElement(PaginationItem, _extends({}, props, {
    className: className
  }));
};
/**
 * Pagination ellipsis wrapper-component.
 *
 * @param {Object} props
 * @returns {Object}
 */


exports.PaginationNext = PaginationNext;

var PaginationEllipsis = function PaginationEllipsis(props) {
  var className = (0, _utils.createClassName)(props.noDefaultClassName ? null : 'ellipsis', props.className, (0, _utils.generalClassNames)(props));
  return _react.default.createElement(PaginationItem, _extends({}, props, {
    className: className
  }));
};

exports.PaginationEllipsis = PaginationEllipsis;

//# sourceMappingURL=pagination.js.map