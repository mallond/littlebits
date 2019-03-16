"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SpaceControls = exports.ExtendedBreakpoints = exports.GutterTypes = exports.InputTypes = exports.SwitchInputTypes = exports.FloatTypes = exports.Alignments = exports.MenuAlignments = exports.VerticalAlignments = exports.HorizontalAlignments = exports.Sizes = exports.SwitchSizes = exports.ButtonGroupSizes = exports.ButtonSizes = exports.CalloutSizes = exports.Colors = exports.ProgressColors = exports.LabelColors = exports.CalloutColors = exports.ButtonGroupColors = exports.ButtonColors = exports.BadgeColors = exports.Breakpoints = void 0;

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Breakpoints enumerable.
 *
 * @type {{SMALL: string, MEDIUM: string, LARGE: string, XLARGE: string, XXLARGE: string}}
 */
var Breakpoints = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
  XLARGE: 'xlarge',
  XXLARGE: 'xxlarge'
};
/**
 * Badge color enumerable.
 *
 * @type {Object}
 */

exports.Breakpoints = Breakpoints;
var BadgeColors = {
  INFO: 'info',
  SECONDARY: 'secondary',
  SUCCESS: 'success',
  WARNING: 'warning',
  ALERT: 'alert'
};
/**
 * Button color enumerable.
 *
 * @type {Object}
 */

exports.BadgeColors = BadgeColors;
var ButtonColors = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  SUCCESS: 'success',
  ALERT: 'alert',
  WARNING: 'warning'
};
/**
 * Button group color enumerable.
 *
 * @type {Object}
 */

exports.ButtonColors = ButtonColors;
var ButtonGroupColors = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  SUCCESS: 'success',
  ALERT: 'alert',
  WARNING: 'warning'
};
/**
 * Callout color enumerable.
 *
 * @type {Object}
 */

exports.ButtonGroupColors = ButtonGroupColors;
var CalloutColors = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  SUCCESS: 'success',
  WARNING: 'warning',
  ALERT: 'alert'
};
/**
 * Label color enumerable.
 *
 * @type {Object}
 */

exports.CalloutColors = CalloutColors;
var LabelColors = {
  INFO: 'info',
  SECONDARY: 'secondary',
  SUCCESS: 'success',
  WARNING: 'warning',
  ALERT: 'alert'
};
/**
 * Progress colors enumerable.
 *
 * @type {Object}
 */

exports.LabelColors = LabelColors;
var ProgressColors = {
  SECONDARY: 'secondary',
  SUCCESS: 'success',
  WARNING: 'warning',
  ALERT: 'alert'
};
/**
 * Color meta-enumerable.
 * This is exposed to the consumer, while the sub-sets are only used internally.
 *
 * @type {Object}
 */

exports.ProgressColors = ProgressColors;

var Colors = _objectSpread({}, BadgeColors, ButtonColors, ButtonGroupColors, CalloutColors, LabelColors, ProgressColors);
/**
 * Callout size enumerable.
 *
 * @type {Object}
 */


exports.Colors = Colors;
var CalloutSizes = {
  SMALL: 'small',
  LARGE: 'large'
};
/**
 * Button size enumerable.
 *
 * @type {Object}
 */

exports.CalloutSizes = CalloutSizes;
var ButtonSizes = {
  TINY: 'tiny',
  SMALL: 'small',
  LARGE: 'large'
};
/**
 * Button group size enumerable.
 *
 * @type {Object}
 */

exports.ButtonSizes = ButtonSizes;
var ButtonGroupSizes = {
  TINY: 'tiny',
  SMALL: 'small',
  LARGE: 'large'
};
/**
 * Switch size enumerable.
 *
 * @type {Object}
 */

exports.ButtonGroupSizes = ButtonGroupSizes;
var SwitchSizes = {
  TINY: 'tiny',
  SMALL: 'small',
  LARGE: 'large'
};
/**
 * Size meta-enumerable.
 * This is exposed to the consumer, while the sub-sets are only used internally.
 *
 * @type {Object}
 */

exports.SwitchSizes = SwitchSizes;

var Sizes = _objectSpread({}, ButtonSizes, ButtonGroupSizes, CalloutSizes, SwitchSizes);
/**
 * Horizontal alignment enumerable.
 *
 * @type {Object}
 */


exports.Sizes = Sizes;
var HorizontalAlignments = {
  CENTER: 'center',
  RIGHT: 'right',
  JUSTIFY: 'justify',
  SPACED: 'spaced'
};
/**
 * Vertical alignment enumerable.
 *
 * @type {Object}
 */

exports.HorizontalAlignments = HorizontalAlignments;
var VerticalAlignments = {
  TOP: 'top',
  MIDDLE: 'middle',
  BOTTOM: 'bottom',
  STRETCH: 'stretch'
};
/**
 * Menu alignment enumerable.
 *
 * @type {{RIGHT: string, CENTER: string}}
 */

exports.VerticalAlignments = VerticalAlignments;
var MenuAlignments = {
  RIGHT: 'right',
  CENTER: 'center'
};
/**
 * Alignments meta-enumerable.
 * This is exposed to the consumer, while the sub-sets are only used internally.
 *
 * @type {Object}
 */

exports.MenuAlignments = MenuAlignments;

var Alignments = _objectSpread({}, HorizontalAlignments, VerticalAlignments, MenuAlignments);
/**
 * Float types enumerable.
 *
 * @type {{LEFT: string, CENTER: string, RIGHT: string}}
 */


exports.Alignments = Alignments;
var FloatTypes = {
  LEFT: 'left',
  CENTER: 'center',
  RIGHT: 'right'
};
/**
 * Switch type enumerable.
 *
 * @type {Object}
 */

exports.FloatTypes = FloatTypes;
var SwitchInputTypes = {
  CHECKBOX: 'checkbox',
  RADIO: 'radio'
};
/**
 * Input type meta-enumerable.
 * This is exposed to the consumer, while the sub-sets are only used internally.
 *
 * @type {Object}
 */

exports.SwitchInputTypes = SwitchInputTypes;

var InputTypes = _objectSpread({}, SwitchInputTypes);
/**
 * Gutter type enumerable.
 *
 * @type {Object}
 */


exports.InputTypes = InputTypes;
var GutterTypes = {
  MARGIN: 'margin',
  PADDING: 'padding'
};
/**
 * Extended breakpoints enumerable (includes 'ALL' option, which is useful when breakpoint is not defined).
 *
 * @type {{SMALL: string, MEDIUM: string, LARGE: string, XLARGE: string, XXLARGE: string, ALL: string}}
 */

exports.GutterTypes = GutterTypes;
var ExtendedBreakpoints = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
  XLARGE: 'xlarge',
  XXLARGE: 'xxlarge',
  ALL: 'all'
};
/**
 * Space control enumerable.
 *
 * @type {Object}
 */

exports.ExtendedBreakpoints = ExtendedBreakpoints;
var SpaceControls = {
  AUTO: 'auto',
  GROW: 'grow',
  SHRINK: 'shrink'
};
exports.SpaceControls = SpaceControls;

//# sourceMappingURL=enums.js.map