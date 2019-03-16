"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactAddonsTestUtils = require("react-addons-test-utils");

var _enzyme = require("enzyme");

var _chai = require("chai");

var _sinon = require("sinon");

var _responsive = require("../../src/components/responsive");

var _topBar = require("../../src/components/top-bar");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('ResponsiveNavigation component', function () {
  it('sets tag name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_responsive.ResponsiveNavigation, null));
    (0, _chai.expect)(component).to.have.tagName('div');
  });
  it('sets default class name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_responsive.ResponsiveNavigation, {
      className: "navbar"
    }));
    (0, _chai.expect)(component).to.have.className('navbar');
  });
  it('calls componentDidMount', function () {
    (0, _sinon.spy)(_responsive.ResponsiveNavigation.prototype, 'componentDidMount');
    (0, _enzyme.mount)(_react.default.createElement(_responsive.ResponsiveNavigation, null));
    (0, _chai.expect)(_responsive.ResponsiveNavigation.prototype.componentDidMount.calledOnce).to.equal(true);

    _responsive.ResponsiveNavigation.prototype.componentDidMount.restore();
  });
  it('calls update', function () {
    (0, _sinon.spy)(_responsive.ResponsiveNavigation.prototype, 'update');
    (0, _enzyme.mount)(_react.default.createElement(_responsive.ResponsiveNavigation, null));
    (0, _chai.expect)(_responsive.ResponsiveNavigation.prototype.update.calledOnce).to.equal(true);

    _responsive.ResponsiveNavigation.prototype.update.restore();
  });
  it('calls toggle', function () {
    (0, _sinon.spy)(_responsive.ResponsiveNavigation.prototype, 'toggle');
    var component = (0, _enzyme.mount)(_react.default.createElement(_responsive.ResponsiveNavigation, null));
    component.find('.menu-icon').simulate('click');
    (0, _chai.expect)(_responsive.ResponsiveNavigation.prototype.toggle.calledOnce).to.equal(true);

    _responsive.ResponsiveNavigation.prototype.toggle.restore();
  });
  it('sets correct state on small screens', function () {
    // TODO: Figure out a better way to set the document width
    window.innerWidth = 639;
    var component = (0, _enzyme.mount)(_react.default.createElement(_responsive.ResponsiveNavigation, null));
    (0, _chai.expect)(component.state().isTitleBarVisible).to.equal(true);
    (0, _chai.expect)(component.state().isTopBarVisible).to.equal(false);
  });
  it('sets correct state on large screens', function () {
    // The only reason that this works as intended is because the tests are in the correct order
    // This is not optimal and should be fixed, so if you have a good idea go ahead and fix it.
    window.innerWidth = 1024;
    var component = (0, _enzyme.mount)(_react.default.createElement(_responsive.ResponsiveNavigation, null));
    (0, _chai.expect)(component.state().isTitleBarVisible).to.equal(false);
    (0, _chai.expect)(component.state().isTopBarVisible).to.equal(true);
  });
  it('has correct children', function () {
    var renderer = (0, _reactAddonsTestUtils.createRenderer)();
    renderer.render(_react.default.createElement(_responsive.ResponsiveNavigation, null));
    var output = renderer.getRenderOutput();
    (0, _chai.expect)(output).jsx.to.equal(_react.default.createElement("div", null, _react.default.createElement(_responsive.TitleBar, {
      isHidden: true
    }, _react.default.createElement(_responsive.MenuIcon, {
      onClick: function onClick() {}
    }), _react.default.createElement(_responsive.TitleBarTitle, null)), _react.default.createElement(_topBar.TopBar, {
      isHidden: false
    })));
  });
  it('passes on props', function () {
    var component = (0, _enzyme.mount)(_react.default.createElement(_responsive.ResponsiveNavigation, {
      titleBar: {
        id: 'foo'
      },
      topBar: {
        id: 'bar'
      }
    }));
    (0, _chai.expect)(component.find('.title-bar')).to.have.attr('id', 'foo');
    (0, _chai.expect)(component.find('.top-bar')).to.have.attr('id', 'bar');
  });
  it('calls componentWillUnmount', function () {
    (0, _sinon.spy)(_responsive.ResponsiveNavigation.prototype, 'componentWillUnmount');
    var component = (0, _enzyme.shallow)(_react.default.createElement(_responsive.ResponsiveNavigation, null));
    component.unmount();
    (0, _chai.expect)(_responsive.ResponsiveNavigation.prototype.componentWillUnmount.calledOnce).to.equal(true);

    _responsive.ResponsiveNavigation.prototype.componentWillUnmount.restore();
  });
});
describe('TitleBar component', function () {
  it('sets tag name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_responsive.TitleBar, null));
    (0, _chai.expect)(component).to.have.tagName('div');
  });
  it('sets default class name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_responsive.TitleBar, null));
    (0, _chai.expect)(component).to.have.className('title-bar');
  });
  it('does not set default class name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_responsive.TitleBar, {
      noDefaultClassName: true
    }));
    (0, _chai.expect)(component).to.not.have.className('title-bar');
  });
  it('sets custom class name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_responsive.TitleBar, {
      className: "my-title-bar"
    }));
    (0, _chai.expect)(component).to.have.className('my-title-bar');
  });
  it('does not carry over non-DOM props', function () {
    var component = (0, _enzyme.shallow)(_react.default.createElement(_responsive.TitleBar, {
      isHidden: true
    }));
    (0, _chai.expect)(component).to.not.have.prop('isHidden');
  });
});
describe('MenuIcon component', function () {
  it('sets tag name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_responsive.MenuIcon, null));
    (0, _chai.expect)(component).to.have.tagName('button');
  });
  it('sets default class name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_responsive.MenuIcon, null));
    (0, _chai.expect)(component).to.have.className('menu-icon');
  });
  it('does not set default class name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_responsive.MenuIcon, {
      noDefaultClassName: true
    }));
    (0, _chai.expect)(component).to.not.have.className('menu-icon');
  });
  it('sets custom class name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_responsive.MenuIcon, {
      className: "my-menu-icon"
    }));
    (0, _chai.expect)(component).to.have.className('my-menu-icon');
  });
  it('sets button type', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_responsive.MenuIcon, null));
    (0, _chai.expect)(component).to.have.attr('type', 'button');
  });
  it('sets contents', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_responsive.MenuIcon, null, "Icon"));
    (0, _chai.expect)(component).to.have.text('Icon');
  });
  it('does not carry over non-DOM props', function () {
    var component = (0, _enzyme.shallow)(_react.default.createElement(_responsive.MenuIcon, {
      isHidden: true
    }));
    (0, _chai.expect)(component).to.not.have.prop('isHidden');
  });
});
describe('TitleBarTitle component', function () {
  it('sets tag name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_responsive.TitleBarTitle, null));
    (0, _chai.expect)(component).to.have.tagName('div');
  });
  it('sets default class name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_responsive.TitleBarTitle, null));
    (0, _chai.expect)(component).to.have.className('title-bar-title');
  });
  it('does not set default class name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_responsive.TitleBarTitle, {
      noDefaultClassName: true
    }));
    (0, _chai.expect)(component).to.not.have.className('title-bar-title');
  });
  it('sets custom class name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_responsive.TitleBarTitle, {
      className: "my-title-bar-title"
    }));
    (0, _chai.expect)(component).to.have.className('my-title-bar-title');
  });
  it('sets contents', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_responsive.TitleBarTitle, null, "Menu"));
    (0, _chai.expect)(component).to.have.text('Menu');
  });
  it('does not carry over non-DOM props', function () {
    var component = (0, _enzyme.shallow)(_react.default.createElement(_responsive.TitleBarTitle, {
      isHidden: true
    }));
    (0, _chai.expect)(component).to.not.have.prop('isHidden');
  });
});

//# sourceMappingURL=responsive-spec.js.map