"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _reactAddonsTestUtils = require("react-addons-test-utils");

var _chai = require("chai");

var _switch = require("../../src/components/switch");

var _enums = require("../../src/enums");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// TODO: Add test cases for input types
describe('Switch component', function () {
  it('sets tag name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_switch.Switch, null));
    (0, _chai.expect)(component).to.have.tagName('div');
  });
  it('sets default class name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_switch.Switch, null));
    (0, _chai.expect)(component).to.have.className('switch');
  });
  it('does not set default class name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_switch.Switch, {
      noDefaultClassName: true
    }));
    (0, _chai.expect)(component).to.not.have.className('switch');
  });
  it('sets custom class name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_switch.Switch, {
      className: "my-switch"
    }));
    (0, _chai.expect)(component).to.have.className('my-switch');
  });
  it('has correct children', function () {
    var renderer = (0, _reactAddonsTestUtils.createRenderer)();
    renderer.render(_react.default.createElement(_switch.Switch, {
      id: "foo"
    }));
    var output = renderer.getRenderOutput();
    (0, _chai.expect)(output).jsx.to.equal(_react.default.createElement("div", {
      className: "switch"
    }, _react.default.createElement(_switch.SwitchInput, {
      id: "foo"
    }), _react.default.createElement(_switch.SwitchPaddle, {
      htmlFor: "foo"
    })));
  });
  it('passes on props', function () {
    var component = (0, _enzyme.mount)(_react.default.createElement(_switch.Switch, {
      input: {
        value: 'foo'
      },
      paddle: {
        id: 'bar'
      }
    }));
    (0, _chai.expect)(component.find('.switch-input')).to.have.value('foo');
    (0, _chai.expect)(component.find('.switch-paddle')).to.have.attr('id', 'bar');
  });
  it('renders active label', function () {
    var component = (0, _enzyme.mount)(_react.default.createElement(_switch.Switch, {
      active: {
        text: 'On'
      }
    }));
    (0, _chai.expect)(component.find('.switch-active')).to.have.text('On');
  });
  it('renders inactive label', function () {
    var component = (0, _enzyme.mount)(_react.default.createElement(_switch.Switch, {
      inactive: {
        text: 'Off'
      }
    }));
    (0, _chai.expect)(component.find('.switch-inactive')).to.have.text('Off');
  });
});
describe('SwitchInput component', function () {
  it('sets tag name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_switch.SwitchInput, null));
    (0, _chai.expect)(component).to.have.tagName('input');
  });
  it('sets default class name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_switch.SwitchInput, null));
    (0, _chai.expect)(component).to.have.className('switch-input');
  });
  it('does not set default class name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_switch.SwitchInput, {
      noDefaultClassName: true
    }));
    (0, _chai.expect)(component).to.not.have.className('switch-input');
  });
  it('sets custom class name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_switch.SwitchInput, {
      className: "my-switch-input"
    }));
    (0, _chai.expect)(component).to.have.className('my-switch-input');
  });
});
describe('SwitchPaddle component', function () {
  it('sets tag name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_switch.SwitchPaddle, null));
    (0, _chai.expect)(component).to.have.tagName('label');
  });
  it('sets default class name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_switch.SwitchPaddle, null));
    (0, _chai.expect)(component).to.have.className('switch-paddle');
  });
  it('does not set default class name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_switch.SwitchPaddle, {
      noDefaultClassName: true
    }));
    (0, _chai.expect)(component).to.not.have.className('switch-paddle');
  });
  it('sets custom class name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_switch.SwitchPaddle, {
      className: "my-switch-paddle"
    }));
    (0, _chai.expect)(component).to.have.className('my-switch-paddle');
  });
});
describe('SwitchActive component', function () {
  it('sets tag name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_switch.SwitchActive, null));
    (0, _chai.expect)(component).to.have.tagName('span');
  });
  it('sets default class name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_switch.SwitchActive, null));
    (0, _chai.expect)(component).to.have.className('switch-active');
  });
  it('does not set default class name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_switch.SwitchActive, {
      noDefaultClassName: true
    }));
    (0, _chai.expect)(component).to.not.have.className('switch-active');
  });
  it('sets custom class name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_switch.SwitchActive, {
      className: "my-switch-active"
    }));
    (0, _chai.expect)(component).to.have.className('my-switch-active');
  });
  it('sets aria-hidden', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_switch.SwitchActive, null));
    (0, _chai.expect)(component).to.have.attr('aria-hidden');
  });
  it('sets contents', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_switch.SwitchActive, {
      text: "On"
    }));
    (0, _chai.expect)(component).to.have.text('On');
    (0, _chai.expect)(component).to.not.have.attr('text');
  });
});
describe('SwitchInactive component', function () {
  it('sets tag name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_switch.SwitchInactive, null));
    (0, _chai.expect)(component).to.have.tagName('span');
  });
  it('sets default class name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_switch.SwitchInactive, null));
    (0, _chai.expect)(component).to.have.className('switch-inactive');
  });
  it('does not set default class name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_switch.SwitchInactive, {
      noDefaultClassName: true
    }));
    (0, _chai.expect)(component).to.not.have.className('switch-inactive');
  });
  it('sets custom class name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_switch.SwitchInactive, {
      className: "my-switch-inactive"
    }));
    (0, _chai.expect)(component).to.have.className('my-switch-inactive');
  });
  it('sets aria-hidden', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_switch.SwitchInactive, null));
    (0, _chai.expect)(component).to.have.attr('aria-hidden');
  });
  it('sets contents', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_switch.SwitchInactive, {
      text: "Off"
    }));
    (0, _chai.expect)(component).to.have.text('Off');
    (0, _chai.expect)(component).to.not.have.attr('text');
  });
});

//# sourceMappingURL=switch-spec.js.map