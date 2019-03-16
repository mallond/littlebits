"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TabPanel = exports.TabsContent = exports.TabItem = exports.Tabs = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _utils = require("../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * Tabs component.
 * http://foundation.zurb.com/sites/docs/tabs.html
 *
 * @param {Object} props
 * @returns {Object}
 */
var Tabs = function Tabs(props) {
  var className = (0, _utils.createClassName)(props.noDefaultClassName ? null : 'tabs', props.className, {
    'vertical': props.isVertical
  }, (0, _utils.generalClassNames)(props));
  var passProps = (0, _utils.removeProps)(props, (0, _utils.objectKeys)(Tabs.propTypes));
  return _react.default.createElement("ul", _extends({}, passProps, {
    className: className
  }));
};

exports.Tabs = Tabs;
Tabs.propTypes = _objectSpread({}, _utils.GeneralPropTypes, _utils.FlexboxPropTypes, {
  isVertical: _propTypes.default.bool
});
/**
 * Tab item component.
 *
 * @param {Object} props
 * @returns {Object}
 */

var TabItem = function TabItem(props) {
  var className = (0, _utils.createClassName)(props.noDefaultClassName ? null : 'tabs-title', props.className, {
    'is-active': props.isActive
  }, (0, _utils.generalClassNames)(props));
  var passProps = (0, _utils.removeProps)(props, (0, _utils.objectKeys)(TabItem.propTypes));
  return _react.default.createElement("li", _extends({}, passProps, {
    className: className
  }));
};

exports.TabItem = TabItem;
TabItem.propTypes = _objectSpread({}, _utils.GeneralPropTypes, _utils.FlexboxPropTypes, {
  isActive: _propTypes.default.bool
});
/**
 * Tab panel container component.
 *
 * @param {Object} props
 * @returns {Object}
 */

var TabsContent = function TabsContent(props) {
  var className = (0, _utils.createClassName)(props.noDefaultClassName ? null : 'tabs-content', props.className, {
    'vertical': props.isVertical
  }, (0, _utils.generalClassNames)(props));
  var passProps = (0, _utils.removeProps)(props, (0, _utils.objectKeys)(TabsContent.propTypes));
  return _react.default.createElement("div", _extends({}, passProps, {
    className: className
  }));
};

exports.TabsContent = TabsContent;
TabsContent.propTypes = _objectSpread({}, _utils.GeneralPropTypes, _utils.FlexboxPropTypes, {
  isActive: _propTypes.default.bool,
  isVertical: _propTypes.default.bool
});
/**
 * Tab panel item component.
 *
 * @param {Object} props
 * @returns {Object}
 */

var TabPanel = function TabPanel(props) {
  var className = (0, _utils.createClassName)(props.noDefaultClassName ? null : 'tabs-panel', props.className, {
    'is-active': props.isActive
  }, (0, _utils.generalClassNames)(props));
  var passProps = (0, _utils.removeProps)(props, (0, _utils.objectKeys)(TabPanel.propTypes));
  return _react.default.createElement("div", _extends({}, passProps, {
    className: className
  }));
};

exports.TabPanel = TabPanel;
TabPanel.propTypes = _objectSpread({}, _utils.GeneralPropTypes, _utils.FlexboxPropTypes, {
  isActive: _propTypes.default.bool
});

//# sourceMappingURL=tabs.js.map