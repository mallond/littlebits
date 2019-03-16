"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _chai = require("chai");

var _topBar = require("../../src/components/top-bar");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('TopBar component', function () {
  it('sets tag name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_topBar.TopBar, null));
    (0, _chai.expect)(component).to.have.tagName('div');
  });
  it('sets default class name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_topBar.TopBar, null));
    (0, _chai.expect)(component).to.have.className('top-bar');
  });
  it('does not set default class name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_topBar.TopBar, {
      noDefaultClassName: true
    }));
    (0, _chai.expect)(component).to.not.have.className('top-bar');
  });
  it('sets custom class name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_topBar.TopBar, {
      className: "my-top-bar"
    }));
    (0, _chai.expect)(component).to.have.className('my-top-bar');
  });
});
describe('TopBarTitle component', function () {
  it('sets tag name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_topBar.TopBarTitle, null));
    (0, _chai.expect)(component).to.have.tagName('div');
  });
  it('sets default class name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_topBar.TopBarTitle, null));
    (0, _chai.expect)(component).to.have.className('top-bar-title');
  });
  it('does not set default class name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_topBar.TopBarTitle, {
      noDefaultClassName: true
    }));
    (0, _chai.expect)(component).to.not.have.className('top-bar-title');
  });
  it('sets custom class name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_topBar.TopBarTitle, {
      className: "my-top-bar-title"
    }));
    (0, _chai.expect)(component).to.have.className('my-top-bar-title');
  });
});
describe('TopBarLeft component', function () {
  it('sets tag name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_topBar.TopBarLeft, null));
    (0, _chai.expect)(component).to.have.tagName('div');
  });
  it('sets default class name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_topBar.TopBarLeft, null));
    (0, _chai.expect)(component).to.have.className('top-bar-left');
  });
  it('does not set default class name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_topBar.TopBarLeft, {
      noDefaultClassName: true
    }));
    (0, _chai.expect)(component).to.not.have.className('top-bar-left');
  });
  it('sets custom class name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_topBar.TopBarLeft, {
      className: "my-top-bar-left"
    }));
    (0, _chai.expect)(component).to.have.className('my-top-bar-left');
  });
});
describe('TopBarRight component', function () {
  it('sets tag name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_topBar.TopBarRight, null));
    (0, _chai.expect)(component).to.have.tagName('div');
  });
  it('sets default class name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_topBar.TopBarRight, null));
    (0, _chai.expect)(component).to.have.className('top-bar-right');
  });
  it('does not set default class name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_topBar.TopBarRight, {
      noDefaultClassName: true
    }));
    (0, _chai.expect)(component).to.not.have.className('top-bar-right');
  });
  it('sets custom class name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_topBar.TopBarRight, {
      className: "my-top-bar-right"
    }));
    (0, _chai.expect)(component).to.have.className('my-top-bar-right');
  });
});

//# sourceMappingURL=top-bar-spec.js.map