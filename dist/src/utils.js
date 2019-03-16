"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createClassName = createClassName;
exports.generalClassNames = generalClassNames;
exports.objectKeys = objectKeys;
exports.objectValues = objectValues;
exports.removeProps = removeProps;
exports.isDefined = isDefined;
exports.addBreakpoint = addBreakpoint;
exports.setDirection = setDirection;
exports.flexboxClassNames = flexboxClassNames;
exports.FlexboxPropTypes = exports.GeneralPropTypes = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _enums = require("./enums");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Property types for general properties.
 *
 * @returns {Object}
 */
var GeneralPropTypes = {
  showFor: _propTypes.default.oneOf([_enums.Breakpoints.MEDIUM, _enums.Breakpoints.LARGE]),
  showOnlyFor: _propTypes.default.oneOf(objectValues(_enums.Breakpoints)),
  hideFor: _propTypes.default.oneOf([_enums.Breakpoints.MEDIUM, _enums.Breakpoints.LARGE]),
  hideOnlyFor: _propTypes.default.oneOf(objectValues(_enums.Breakpoints)),
  isHidden: _propTypes.default.bool,
  isInvisible: _propTypes.default.bool,
  showForLandscape: _propTypes.default.bool,
  showForPortrait: _propTypes.default.bool,
  showForSr: _propTypes.default.bool,
  showOnFocus: _propTypes.default.bool,
  isClearfix: _propTypes.default.bool,
  float: _propTypes.default.oneOf(objectValues(_enums.FloatTypes))
};
/**
 * Creates class names from the given arguments.
 *
 * @param {*} args
 * @returns {string}
 */

exports.GeneralPropTypes = GeneralPropTypes;

function createClassName() {
  return _classnames.default.apply(void 0, arguments);
}
/**
 * Parses the general class names from the given properties.
 *
 * @param {Object} props
 * @returns {Object}
 */


function generalClassNames(props) {
  return {
    'show-for-medium': props.showFor === _enums.Breakpoints.MEDIUM,
    'show-for-large': props.showFor === _enums.Breakpoints.LARGE,
    'show-for-small-only': props.showOnlyFor === _enums.Breakpoints.SMALL,
    'show-for-medium-only': props.showOnlyFor === _enums.Breakpoints.MEDIUM,
    'show-for-large-only': props.showOnlyFor === _enums.Breakpoints.LARGE,
    'hide-for-medium': props.hideFor === _enums.Breakpoints.MEDIUM,
    'hide-for-large': props.hideFor === _enums.Breakpoints.LARGE,
    'hide-for-small-only': props.hideOnlyFor === _enums.Breakpoints.SMALL,
    'hide-for-medium-only': props.hideOnlyFor === _enums.Breakpoints.MEDIUM,
    'hide-for-large-only': props.hideOnlyFor === _enums.Breakpoints.LARGE,
    'hide': props.isHidden,
    'invisible': props.isInvisible,
    'show-for-landscape': props.showForLandscape,
    'show-for-portrait': props.showForPortrait,
    'show-for-sr': props.showForSr,
    'show-on-focus': props.showOnFocus,
    'clearfix': props.isClearfix,
    'float-left': props.float === _enums.FloatTypes.LEFT,
    'float-center': props.float === _enums.FloatTypes.CENTER,
    'float-right': props.float === _enums.FloatTypes.RIGHT
  };
}
/**
 * Returns the keys for the given object.
 * This method is used for getting the keys for prop types.
 *
 * @param {Object} object
 * @returns {Array}
 */


function objectKeys(object) {
  return Object.keys(object);
}
/**
 * Returns the values for the given object.
 * This method is used for getting the values for enumerables.
 *
 * @param {Object} object
 * @returns {Array}
 */


function objectValues(object) {
  var values = [];

  for (var property in object) {
    if (object.hasOwnProperty(property)) {
      values.push(object[property]);
    }
  }

  return values;
}
/**
 * Removes properties from the given object.
 * This method is used for removing valid attributes from component props prior to rendering.
 *
 * @param {Object} object
 * @param {Array} remove
 * @returns {Object}
 */


function removeProps(object, remove) {
  var result = {};

  for (var property in object) {
    if (object.hasOwnProperty(property) && remove.indexOf(property) === -1) {
      result[property] = object[property];
    }
  }

  return result;
}
/**
 * Returns whether or not the given value is defined.
 *
 * @param {*} value
 * @returns {boolean}
 */


function isDefined(value) {
  return typeof value !== 'undefined';
}
/**
 * Adds a breakpoint to a class if breakpoint is specified.
 *
 * @param {String} prop
 * @param {String} size
 * @returns {string}
 */


function addBreakpoint(prop, size) {
  return size === 'all' ? prop : "".concat(size, "-").concat(prop);
}
/**
 * Sets direction for grid and gutters (horizontal or vertical).
 *
 * @param {boolean} isVertical
 * @param {String} gutters
 * @returns {string}
 */


function setDirection(isVertical) {
  var gutters = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

  if (gutters) {
    return isVertical === true ? "grid-".concat(gutters, "-y") : "grid-".concat(gutters, "-x");
  } else {
    return isVertical === true ? 'grid-y' : 'grid-x';
  }
} // Flexbox Utilities

/**
 * Property types for flexbox utilities.
 *
 * @returns {Object}
 */


var FlexboxPropTypes = {
  alignX: _propTypes.default.oneOf(objectValues(_enums.HorizontalAlignments)),
  alignY: _propTypes.default.oneOf(objectValues(_enums.VerticalAlignments)),
  selfAlignX: _propTypes.default.oneOf(objectValues(_enums.HorizontalAlignments)),
  selfAlignY: _propTypes.default.oneOf(objectValues(_enums.VerticalAlignments)),
  centerAlign: _propTypes.default.bool,
  flexContainer: _propTypes.default.bool,
  flexDirRow: _propTypes.default.oneOf(objectValues(_enums.ExtendedBreakpoints)),
  flexDirRowRev: _propTypes.default.oneOf(objectValues(_enums.ExtendedBreakpoints)),
  flexDirCol: _propTypes.default.oneOf(objectValues(_enums.ExtendedBreakpoints)),
  flexDirColRev: _propTypes.default.oneOf(objectValues(_enums.ExtendedBreakpoints)),
  flexChild: _propTypes.default.oneOf(objectValues(_enums.SpaceControls)),
  flexOrder: _propTypes.default.number,
  flexOrderSmall: _propTypes.default.number,
  flexOrderMedium: _propTypes.default.number,
  flexOrderLarge: _propTypes.default.number
};
/**
 * Parses the flexbox class names from the given properties.
 *
 * @param {Object} props
 * @returns {Object}
 */

exports.FlexboxPropTypes = FlexboxPropTypes;

function flexboxClassNames(props) {
  var _ref;

  return _ref = {
    'flex-container': props.flexContainer,
    'align-center-middle': props.centerAlign
  }, _defineProperty(_ref, "align-".concat(props.alignX), props.alignX), _defineProperty(_ref, "align-".concat(props.alignY), props.alignY), _defineProperty(_ref, addBreakpoint('flex-dir-row', props.flexDirRow), props.flexDirRow), _defineProperty(_ref, addBreakpoint('flex-dir-row-reverse', props.flexDirRowRev), props.flexDirRowRev), _defineProperty(_ref, addBreakpoint('flex-dir-column', props.flexDirCol), props.flexDirCol), _defineProperty(_ref, addBreakpoint('flex-dir-column-reverse', props.flexDirColRev), props.flexDirColRev), _defineProperty(_ref, "flex-child-".concat(props.flexChild), props.flexChild), _defineProperty(_ref, "order-".concat(props.flexOrder), props.flexOrder), _defineProperty(_ref, "small-order-".concat(props.flexOrder), props.flexOrderSmall), _defineProperty(_ref, "medium-order-".concat(props.flexOrder), props.flexOrderMedium), _defineProperty(_ref, "large-order-".concat(props.flexOrder), props.flexOrderLarge), _ref;
}

//# sourceMappingURL=utils.js.map