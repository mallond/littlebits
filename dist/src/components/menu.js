"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MenuText = exports.MenuItem = exports.Menu = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _enums = require("../enums");

var _utils = require("../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * Menu component.
 * http://foundation.zurb.com/sites/docs/menu.html
 *
 * @param {Object} props
 * @returns {Object}
 */
var Menu = function Menu(props) {
  var className = (0, _utils.createClassName)(props.noDefaultClassName ? null : 'menu', props.className, {
    'align-right': props.alignment === _enums.MenuAlignments.RIGHT,
    'align-center': props.alignment === _enums.MenuAlignments.CENTER,
    'icon-top': props.iconsOnTop,
    'expanded': props.isExpanded,
    'vertical': props.isVertical,
    'simple': props.isSimple,
    'nested': props.isNested,
    'dropdown': props.isDropdown,
    'medium-horizontal': props.horizontalOnMedium
  }, (0, _utils.generalClassNames)(props));
  var passProps = (0, _utils.removeProps)(props, (0, _utils.objectKeys)(Menu.propTypes));
  return _react.default.createElement("ul", _extends({}, passProps, {
    className: className
  }));
};

exports.Menu = Menu;
Menu.propTypes = _objectSpread({}, _utils.GeneralPropTypes, _utils.FlexboxPropTypes, {
  alignment: _propTypes.default.oneOf((0, _utils.objectValues)(_enums.MenuAlignments)),
  iconsOnTop: _propTypes.default.bool,
  isExpanded: _propTypes.default.bool,
  isVertical: _propTypes.default.bool,
  isDropdown: _propTypes.default.bool,
  isSimple: _propTypes.default.bool,
  isNested: _propTypes.default.bool,
  horizontalOnMedium: _propTypes.default.bool
});
/**
 * Menu item component.
 *
 * @param {Object} props
 * @returns {Object}
 */

var MenuItem = function MenuItem(props) {
  var className = (0, _utils.createClassName)(props.className, {
    'active': props.isActive
  }, (0, _utils.generalClassNames)(props));
  var passProps = (0, _utils.removeProps)(props, (0, _utils.objectKeys)(MenuItem.propTypes));
  return _react.default.createElement("li", _extends({}, passProps, {
    className: className
  }));
};

exports.MenuItem = MenuItem;
MenuItem.propTypes = _objectSpread({}, _utils.GeneralPropTypes, _utils.FlexboxPropTypes, {
  isActive: _propTypes.default.bool
});
/**
 * Menu text wrapper-component.
 *
 * @param {Object} props
 * @returns {XML}
 */

var MenuText = function MenuText(props) {
  return _react.default.createElement(MenuItem, _extends({}, props, {
    className: props.className || 'menu-text'
  }));
};

exports.MenuText = MenuText;

//# sourceMappingURL=menu.js.map