"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TitleBarTitle = exports.MenuIcon = exports.TitleBar = exports.ResponsiveNavigation = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _topBar = require("./top-bar");

var _utils = require("../utils");

var _ExecutionEnvironment = _interopRequireDefault(require("fbjs/lib/ExecutionEnvironment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

// Default pixel value when title bar is displayed and top bar is hidden.
var DEFAULT_BREAKPOINT = 640;
/**
 * Responsive navigation component.
 * http://foundation.zurb.com/sites/docs/responsive-navigation.html
 */

var ResponsiveNavigation =
/*#__PURE__*/
function (_Component) {
  _inherits(ResponsiveNavigation, _Component);

  function ResponsiveNavigation() {
    var _this;

    _classCallCheck(this, ResponsiveNavigation);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ResponsiveNavigation).call(this));
    _this.state = {
      isTitleBarVisible: true,
      isTopBarVisible: false
    };
    _this.update = _this.update.bind(_assertThisInitialized(_this));
    _this.toggle = _this.toggle.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(ResponsiveNavigation, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.update();
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (_ExecutionEnvironment.default.canUseDOM) {
        window.addEventListener('resize', this.update);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (_ExecutionEnvironment.default.canUseDOM) {
        window.removeEventListener('resize', this.update);
      }
    }
    /**
     * Updates the state of this component.
     * While this might seem like a sub-optimal solution, it is actually the only solution.
     * Using 'hide' and 'show' -classes won't work because they set display with `!important`.
     */

  }, {
    key: "update",
    value: function update() {
      var breakpoint = this.props.breakpoint;

      if (_ExecutionEnvironment.default.canUseDOM) {
        this.setState({
          isTitleBarVisible: window.innerWidth < breakpoint,
          isTopBarVisible: window.innerWidth >= breakpoint
        });
      }
    }
    /**
     * Called when the menu icon is clicked.
     */

  }, {
    key: "toggle",
    value: function toggle() {
      this.setState({
        isTopBarVisible: !this.state.isTopBarVisible
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          isTitleBarVisible = _this$state.isTitleBarVisible,
          isTopBarVisible = _this$state.isTopBarVisible;
      var _this$props = this.props,
          _this$props$titleBar = _this$props.titleBar,
          titleBarProps = _this$props$titleBar === void 0 ? {} : _this$props$titleBar,
          _this$props$menuIcon = _this$props.menuIcon,
          menuIconProps = _this$props$menuIcon === void 0 ? {} : _this$props$menuIcon,
          _this$props$titleBarT = _this$props.titleBarTitle,
          titleBarTitleProps = _this$props$titleBarT === void 0 ? {} : _this$props$titleBarT,
          _this$props$topBar = _this$props.topBar,
          topBarProps = _this$props$topBar === void 0 ? {} : _this$props$topBar,
          children = _this$props.children;
      return _react.default.createElement("div", (0, _utils.removeProps)(this.props, ['breakpoint']), _react.default.createElement(TitleBar, _extends({}, titleBarProps, {
        isHidden: !isTitleBarVisible
      }), _react.default.createElement(MenuIcon, _extends({}, menuIconProps, {
        onClick: this.toggle
      })), _react.default.createElement(TitleBarTitle, titleBarTitleProps)), _react.default.createElement(_topBar.TopBar, _extends({}, topBarProps, {
        isHidden: !isTopBarVisible
      }), children));
    }
  }]);

  return ResponsiveNavigation;
}(_react.Component);

exports.ResponsiveNavigation = ResponsiveNavigation;
ResponsiveNavigation.propTypes = _objectSpread({}, _utils.GeneralPropTypes, _utils.FlexboxPropTypes, {
  breakpoint: _propTypes.default.number.isRequired
});
ResponsiveNavigation.defaultProps = {
  breakpoint: DEFAULT_BREAKPOINT
};
/**
 * Title bar sub-component.
 *
 * @param {Object} props
 * @returns {Object}
 */

var TitleBar = function TitleBar(props) {
  var className = (0, _utils.createClassName)(props.noDefaultClassName ? null : 'title-bar', props.className, (0, _utils.generalClassNames)(props));
  var passProps = (0, _utils.removeProps)(props, (0, _utils.objectKeys)(TitleBar.propTypes));
  return _react.default.createElement("div", _extends({}, passProps, {
    className: className
  }));
};

exports.TitleBar = TitleBar;
TitleBar.propTypes = _objectSpread({}, _utils.GeneralPropTypes, _utils.FlexboxPropTypes);
/**
 * Title bar menu icon sub-component.
 *
 * @param {Object} props
 * @returns {Object}
 */

var MenuIcon = function MenuIcon(props) {
  var className = (0, _utils.createClassName)(props.noDefaultClassName ? null : 'menu-icon', props.className, (0, _utils.generalClassNames)(props));
  var passProps = (0, _utils.removeProps)(props, (0, _utils.objectKeys)(MenuIcon.propTypes));
  return _react.default.createElement("button", _extends({}, passProps, {
    className: className,
    type: "button"
  }));
};

exports.MenuIcon = MenuIcon;
MenuIcon.propTypes = _objectSpread({}, _utils.GeneralPropTypes, _utils.FlexboxPropTypes);
/**
 * Title bar title sub-component.
 *
 * @param {Object} props
 * @returns {Object}
 */

var TitleBarTitle = function TitleBarTitle(props) {
  var className = (0, _utils.createClassName)(props.noDefaultClassName ? null : 'title-bar-title', props.className, (0, _utils.generalClassNames)(props));
  var passProps = (0, _utils.removeProps)(props, (0, _utils.objectKeys)(TitleBarTitle.propTypes));
  return _react.default.createElement("div", _extends({}, passProps, {
    className: className
  }));
};

exports.TitleBarTitle = TitleBarTitle;
TitleBarTitle.propTypes = _objectSpread({}, _utils.GeneralPropTypes, _utils.FlexboxPropTypes);

//# sourceMappingURL=responsive.js.map