"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Cell = exports.Grid = exports.GridContainer = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _enums = require("../enums");

var _utils = require("../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * Grid container component.
 *
 * @param {Object} props
 * @returns {Object}
 */
var GridContainer = function GridContainer(props) {
  var className = (0, _utils.createClassName)(props.noDefaultClassName ? null : 'grid-container', props.className, {
    'fluid': props.fluid,
    'full': props.full
  }, (0, _utils.generalClassNames)(props), (0, _utils.flexboxClassNames)(props));
  var passProps = (0, _utils.removeProps)(props, (0, _utils.objectKeys)(GridContainer.propTypes));
  return _react.default.createElement("div", _extends({}, passProps, {
    className: className
  }));
};

exports.GridContainer = GridContainer;
GridContainer.propTypes = _objectSpread({}, _utils.GeneralPropTypes, _utils.FlexboxPropTypes, {
  fluid: _propTypes.default.bool,
  full: _propTypes.default.bool
});
/**
 * Grid component.
 *
 * @param {Object} props
 * @returns {Object}
 */

var Grid = function Grid(props) {
  var className = (0, _utils.createClassName)(props.noDefaultClassName ? null : (0, _utils.setDirection)(props.vertical), props.className, (0, _utils.isDefined)(props.gutters) ? (0, _utils.setDirection)(props.vertical, props.gutters) : null, (0, _utils.isDefined)(props.upOnSmall) ? "small-up-".concat(props.upOnSmall) : null, (0, _utils.isDefined)(props.upOnMedium) ? "medium-up-".concat(props.upOnMedium) : null, (0, _utils.isDefined)(props.upOnLarge) ? "large-up-".concat(props.upOnLarge) : null, (0, _utils.isDefined)(props.collapseOnSmall) ? "small-".concat(props.collapseOnSmall, "-collapse") : null, (0, _utils.isDefined)(props.collapseOnMedium) ? "medium-".concat(props.collapseOnMedium, "-collapse") : null, (0, _utils.isDefined)(props.collapseOnLarge) ? "large-".concat(props.collapseOnLarge, "-collapse") : null, (0, _utils.isDefined)(props.gridFrame) ? (0, _utils.addBreakpoint)('grid-frame', props.gridFrame) : null, (0, _utils.generalClassNames)(props), (0, _utils.flexboxClassNames)(props));
  var passProps = (0, _utils.removeProps)(props, (0, _utils.objectKeys)(Grid.propTypes));
  return _react.default.createElement("div", _extends({}, passProps, {
    className: className
  }));
};

exports.Grid = Grid;
Grid.propTypes = _objectSpread({}, _utils.GeneralPropTypes, _utils.FlexboxPropTypes, {
  vertical: _propTypes.default.bool,
  gutters: _propTypes.default.oneOf((0, _utils.objectValues)(_enums.GutterTypes)),
  upOnSmall: _propTypes.default.number,
  upOnMedium: _propTypes.default.number,
  upOnLarge: _propTypes.default.number,
  collapseOnSmall: _propTypes.default.oneOf((0, _utils.objectValues)(_enums.GutterTypes)),
  collapseOnMedium: _propTypes.default.oneOf((0, _utils.objectValues)(_enums.GutterTypes)),
  collapseOnLarge: _propTypes.default.oneOf((0, _utils.objectValues)(_enums.GutterTypes)),
  gridFrame: _propTypes.default.oneOf((0, _utils.objectValues)(_enums.ExtendedBreakpoints))
});
/**
 * Cell component.
 *
 * @param {Object} props
 * @returns {Object}
 */

var Cell = function Cell(props) {
  var className = (0, _utils.createClassName)(props.noDefaultClassName ? null : 'cell', props.className, props.small ? "small-".concat(props.small) : null, props.medium ? "medium-".concat(props.medium) : null, props.large ? "large-".concat(props.large) : null, (0, _utils.isDefined)(props.auto) ? (0, _utils.addBreakpoint)('auto', props.auto) : null, (0, _utils.isDefined)(props.shrink) ? (0, _utils.addBreakpoint)('shrink', props.shrink) : null, (0, _utils.isDefined)(props.offsetOnSmall) ? "small-offset-".concat(props.offsetOnSmall) : null, (0, _utils.isDefined)(props.offsetOnMedium) ? "medium-offset-".concat(props.offsetOnMedium) : null, (0, _utils.isDefined)(props.offsetOnLarge) ? "large-offset-".concat(props.offsetOnLarge) : null, (0, _utils.generalClassNames)(props), (0, _utils.flexboxClassNames)(props));
  var passProps = (0, _utils.removeProps)(props, (0, _utils.objectKeys)(Cell.propTypes));
  return _react.default.createElement("div", _extends({}, passProps, {
    className: className
  }));
};

exports.Cell = Cell;
Cell.propTypes = _objectSpread({}, _utils.GeneralPropTypes, _utils.FlexboxPropTypes, {
  small: _propTypes.default.number,
  medium: _propTypes.default.number,
  large: _propTypes.default.number,
  auto: _propTypes.default.oneOf((0, _utils.objectValues)(_enums.ExtendedBreakpoints)),
  shrink: _propTypes.default.oneOf((0, _utils.objectValues)(_enums.ExtendedBreakpoints)),
  offsetOnSmall: _propTypes.default.number,
  offsetOnMedium: _propTypes.default.number,
  offsetOnLarge: _propTypes.default.number
});

//# sourceMappingURL=xy-grid.js.map