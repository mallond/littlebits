"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SliderFill = exports.SliderHandle = exports.TwoHandleSlider = exports.Slider = void 0;

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

// TODO: Add support for changing the values.

/**
 * Slider component.
 * http://foundation.zurb.com/sites/docs/slider.html
 */
var Slider =
/*#__PURE__*/
function (_Component) {
  _inherits(Slider, _Component);

  function Slider() {
    var _this;

    _classCallCheck(this, Slider);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Slider).call(this));
    _this.state = {
      value: 0
    };
    return _this;
  }

  _createClass(Slider, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.setState({
        value: this.props.initialStart || 0
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          handleProps = _this$props.handle,
          fillProps = _this$props.fill;
      return _react.default.createElement("div", _extends({}, this.props, {
        className: classNameFromProps(this.props)
      }), _react.default.createElement(SliderHandle, handleProps), _react.default.createElement(SliderFill, fillProps));
    }
  }]);

  return Slider;
}(_react.Component);
/**
 * Two-handle slider component.
 * http://foundation.zurb.com/sites/docs/slider.html#two-handles
 */


exports.Slider = Slider;

var TwoHandleSlider =
/*#__PURE__*/
function (_Component2) {
  _inherits(TwoHandleSlider, _Component2);

  function TwoHandleSlider() {
    var _this2;

    _classCallCheck(this, TwoHandleSlider);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(TwoHandleSlider).call(this));
    _this2.state = {
      minValue: 0,
      maxValue: 100
    };
    return _this2;
  }

  _createClass(TwoHandleSlider, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.setState({
        minValue: this.props.initialStart || 0,
        maxValue: this.props.initialEnd || 100
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          minHandleProps = _this$props2.minHandle,
          maxHandleProps = _this$props2.maxHandle,
          fillProps = _this$props2.fill;
      return _react.default.createElement("div", _extends({}, this.props, {
        className: classNameFromProps(this.props)
      }), _react.default.createElement(SliderHandle, minHandleProps), _react.default.createElement(SliderHandle, maxHandleProps), _react.default.createElement(SliderFill, fillProps));
    }
  }]);

  return TwoHandleSlider;
}(_react.Component);
/**
 * Slider handle sub-component.
 *
 * @param {Object} props
 * @returns {XML}
 */


exports.TwoHandleSlider = TwoHandleSlider;

var SliderHandle = function SliderHandle(props) {
  return _react.default.createElement("span", null, _react.default.createElement("span", _extends({}, props, {
    role: "slider"
  })), _react.default.createElement("input", {
    type: "hidden"
  }));
};
/**
 * Slider fill sub-component.
 *
 * @param {Object} props
 * @returns {XML}
 */


exports.SliderHandle = SliderHandle;

var SliderFill = function SliderFill(props) {
  return _react.default.createElement("span", {
    className: props.className || 'slider-fill'
  });
};
/**
 * Creates the slider class name from the given properties.
 * This method allows us to share code between the `Slider` and `TwoHandleSlider` components.
 *
 * @param {Object} props
 * @returns {string}
 */


exports.SliderFill = SliderFill;

function classNameFromProps(props) {
  return (0, _classnames.default)(props.className || 'slider', {
    'vertical': props.isVertical,
    'disabled': props.isDisabled
  });
}

//# sourceMappingURL=slider.js.map