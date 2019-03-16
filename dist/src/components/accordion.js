"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AccordionTitle = exports.AccordionContent = exports.AccordionItem = exports.Accordion = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _utils = require("../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * Accordion component.
 * http://foundation.zurb.com/sites/docs/accordion.html
 *
 * @param {Object} props
 * @returns {Object}
 */
var Accordion = function Accordion(props) {
  var className = (0, _utils.createClassName)(props.noDefaultClassName ? null : 'accordion', props.className, (0, _utils.generalClassNames)(props));
  var passProps = (0, _utils.removeProps)(props, (0, _utils.objectKeys)(Accordion.propTypes));
  return _react.default.createElement("ul", _extends({}, passProps, {
    className: className
  }), props.children || []);
};

exports.Accordion = Accordion;
Accordion.propTypes = _objectSpread({}, _utils.GeneralPropTypes, _utils.FlexboxPropTypes, {
  children: _propTypes.default.any
});
/**
 * Accordion item component.
 *
 * @param {Object} props
 * @returns {Object}
 */

var AccordionItem = function AccordionItem(props) {
  var className = (0, _utils.createClassName)(props.noDefaultClassName ? null : 'accordion-item', props.className, {
    'is-active': props.isActive
  }, (0, _utils.generalClassNames)(props));
  var passProps = (0, _utils.removeProps)(props, (0, _utils.objectKeys)(AccordionItem.propTypes));
  return _react.default.createElement("li", _extends({}, passProps, {
    className: className
  }));
};

exports.AccordionItem = AccordionItem;
AccordionItem.propTypes = _objectSpread({}, _utils.GeneralPropTypes, _utils.FlexboxPropTypes, {
  isActive: _propTypes.default.bool
});
/**
 * Accordion panel container component.
 *
 * @param {Object} props
 * @returns {Object}
 */

var AccordionContent = function AccordionContent(props) {
  var className = (0, _utils.createClassName)(props.noDefaultClassName ? null : 'accordion-content', props.className, {
    'is-active': props.isActive
  }, (0, _utils.generalClassNames)(props));
  var passProps = (0, _utils.removeProps)(props, (0, _utils.objectKeys)(AccordionContent.propTypes));
  return _react.default.createElement("div", _extends({}, passProps, {
    className: className
  }));
};

exports.AccordionContent = AccordionContent;
AccordionContent.propTypes = _objectSpread({}, _utils.GeneralPropTypes, _utils.FlexboxPropTypes, {
  isActive: _propTypes.default.bool
});
/**
 * Accordion panel title component.
 *
 * @param {Object} props
 * @returns {Object}
 */

var AccordionTitle = function AccordionTitle(props) {
  var className = (0, _utils.createClassName)(props.noDefaultClassName ? null : 'accordion-title', props.className, (0, _utils.generalClassNames)(props));
  var passProps = (0, _utils.removeProps)(props, (0, _utils.objectKeys)(AccordionContent.propTypes));
  return _react.default.createElement("a", _extends({}, passProps, {
    className: className
  }));
};

exports.AccordionTitle = AccordionTitle;
AccordionTitle.propTypes = _objectSpread({}, _utils.GeneralPropTypes, _utils.FlexboxPropTypes);

//# sourceMappingURL=accordion.js.map