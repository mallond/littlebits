"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Column = exports.Row = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _enums = require("../enums");

var _utils = require("../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * Row component.
 *
 * @param {Object} props
 * @returns {Object}
 */
var Row = function Row(props) {
  var className = (0, _utils.createClassName)(props.noDefaultClassName ? null : 'row', props.className, (0, _utils.isDefined)(props.upOnSmall) ? "small-up-".concat(props.upOnSmall) : null, (0, _utils.isDefined)(props.upOnMedium) ? "medium-up-".concat(props.upOnMedium) : null, (0, _utils.isDefined)(props.upOnLarge) ? "large-up-".concat(props.upOnLarge) : null, {
    'align-right': props.horizontalAlignment === _enums.HorizontalAlignments.RIGHT,
    'align-center': props.horizontalAlignment === _enums.HorizontalAlignments.CENTER,
    'align-justify': props.horizontalAlignment === _enums.HorizontalAlignments.JUSTIFY,
    'align-spaced': props.horizontalAlignment === _enums.HorizontalAlignments.SPACED,
    'align-top': props.verticalAlignment === _enums.VerticalAlignments.TOP,
    'align-middle': props.verticalAlignment === _enums.VerticalAlignments.MIDDLE,
    'align-bottom': props.verticalAlignment === _enums.VerticalAlignments.BOTTOM,
    'align-stretch': props.verticalAlignment === _enums.VerticalAlignments.STRETCH,
    'small-unstack': props.unstackOnSmall,
    'medium-unstack': props.unstackOnMedium,
    'large-unstack': props.unstackOnLarge,
    'small-collapse': props.collapseOnSmall,
    'medium-collapse': props.collapseOnMedium,
    'large-collapse': props.collapseOnLarge,
    'small-uncollapse': props.uncollapseOnSmall,
    'medium-uncollapse': props.uncollapseOnMedium,
    'large-uncollapse': props.uncollapseOnLarge,
    'collapse': props.isCollapsed,
    'expanded': props.isExpanded,
    'column': props.isColumn
  }, (0, _utils.generalClassNames)(props));
  var passProps = (0, _utils.removeProps)(props, (0, _utils.objectKeys)(Row.propTypes));
  return _react.default.createElement("div", _extends({}, passProps, {
    className: className
  }));
};

exports.Row = Row;
Row.propTypes = _objectSpread({}, _utils.GeneralPropTypes, _utils.FlexboxPropTypes, {
  upOnSmall: _propTypes.default.number,
  upOnMedium: _propTypes.default.number,
  upOnLarge: _propTypes.default.number,
  horizontalAlignment: _propTypes.default.string,
  verticalAlignment: _propTypes.default.string,
  unstackOnSmall: _propTypes.default.bool,
  unstackOnMedium: _propTypes.default.bool,
  unstackOnLarge: _propTypes.default.bool,
  collapseOnSmall: _propTypes.default.bool,
  collapseOnMedium: _propTypes.default.bool,
  collapseOnLarge: _propTypes.default.bool,
  uncollapseOnSmall: _propTypes.default.bool,
  uncollapseOnMedium: _propTypes.default.bool,
  uncollapseOnLarge: _propTypes.default.bool,
  isCollapsed: _propTypes.default.bool,
  isExpanded: _propTypes.default.bool,
  isColumn: _propTypes.default.bool
});
/**
 * Column component.
 *
 * @param {Object} props
 * @returns {Object}
 */

var Column = function Column(props) {
  var defaultClassName = props.isColumn ? 'column' : 'columns';
  var className = (0, _utils.createClassName)(props.noDefaultClassName ? null : defaultClassName, props.className, props.small ? "small-".concat(props.small) : null, props.medium ? "medium-".concat(props.medium) : null, props.large ? "large-".concat(props.large) : null, (0, _utils.isDefined)(props.offsetOnSmall) ? "small-offset-".concat(props.offsetOnSmall) : null, (0, _utils.isDefined)(props.offsetOnMedium) ? "medium-offset-".concat(props.offsetOnMedium) : null, (0, _utils.isDefined)(props.offsetOnLarge) ? "large-offset-".concat(props.offsetOnLarge) : null, (0, _utils.isDefined)(props.pushOnSmall) ? "small-push-".concat(props.pushOnSmall) : null, (0, _utils.isDefined)(props.pushOnMedium) ? "medium-push-".concat(props.pushOnMedium) : null, (0, _utils.isDefined)(props.pushOnLarge) ? "large-push-".concat(props.pushOnLarge) : null, (0, _utils.isDefined)(props.pullOnSmall) ? "small-pull-".concat(props.pullOnSmall) : null, (0, _utils.isDefined)(props.pullOnMedium) ? "medium-pull-".concat(props.pullOnMedium) : null, (0, _utils.isDefined)(props.pullOnLarge) ? "large-pull-".concat(props.pullOnLarge) : null, (0, _utils.isDefined)(props.orderOnSmall) ? "small-order-".concat(props.orderOnSmall) : null, (0, _utils.isDefined)(props.orderOnMedium) ? "medium-order-".concat(props.orderOnMedium) : null, (0, _utils.isDefined)(props.orderOnLarge) ? "large-order-".concat(props.orderOnLarge) : null, {
    'small-centered': props.centerOnSmall,
    'medium-centered': props.centerOnMedium,
    'large-centered': props.centerOnLarge,
    'small-uncentered': props.uncenterOnSmall,
    'medium-uncentered': props.uncenterOnMedium,
    'large-uncentered': props.uncenterOnLarge,
    'small-expand': props.expandOnSmall,
    'medium-expand': props.expandOnMedium,
    'large-expand': props.expandOnLarge,
    'shrink': props.isShrunk,
    'end': props.isLast
  }, (0, _utils.generalClassNames)(props));
  var passProps = (0, _utils.removeProps)(props, (0, _utils.objectKeys)(Column.propTypes));
  return _react.default.createElement("div", _extends({}, passProps, {
    className: className
  }));
};

exports.Column = Column;
Column.propTypes = _objectSpread({}, _utils.GeneralPropTypes, _utils.FlexboxPropTypes, {
  small: _propTypes.default.number,
  medium: _propTypes.default.number,
  large: _propTypes.default.number,
  offsetOnSmall: _propTypes.default.number,
  offsetOnMedium: _propTypes.default.number,
  offsetOnLarge: _propTypes.default.number,
  pushOnSmall: _propTypes.default.number,
  pushOnMedium: _propTypes.default.number,
  pushOnLarge: _propTypes.default.number,
  pullOnSmall: _propTypes.default.number,
  pullOnMedium: _propTypes.default.number,
  pullOnLarge: _propTypes.default.number,
  orderOnSmall: _propTypes.default.number,
  orderOnMedium: _propTypes.default.number,
  orderOnLarge: _propTypes.default.number,
  centerOnSmall: _propTypes.default.bool,
  centerOnMedium: _propTypes.default.bool,
  centerOnLarge: _propTypes.default.bool,
  uncenterOnSmall: _propTypes.default.bool,
  uncenterOnMedium: _propTypes.default.bool,
  uncenterOnLarge: _propTypes.default.bool,
  expandOnSmall: _propTypes.default.bool,
  expandOnMedium: _propTypes.default.bool,
  expandOnLarge: _propTypes.default.bool,
  isShrunk: _propTypes.default.bool,
  isLast: _propTypes.default.bool,
  isColumn: _propTypes.default.bool
});

//# sourceMappingURL=grid.js.map