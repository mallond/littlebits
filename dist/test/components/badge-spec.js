"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _chai = require("chai");

var _badge = require("../../src/components/badge");

var _enums = require("../../src/enums");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// TODO: Add test cases for invalid enum values
describe('Badge component', function () {
  it('sets tag name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_badge.Badge, null));
    (0, _chai.expect)(component).to.have.tagName('span');
  });
  it('sets default class name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_badge.Badge, null));
    (0, _chai.expect)(component).to.have.className('badge');
  });
  it('does not set default class name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_badge.Badge, {
      noDefaultClassName: true
    }));
    (0, _chai.expect)(component).to.not.have.className('badge');
  });
  it('sets custom class name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_badge.Badge, {
      className: "my-badge"
    }));
    (0, _chai.expect)(component).to.have.className('my-badge');
  });
  it('sets color', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_badge.Badge, {
      color: _enums.Colors.SUCCESS
    }));
    (0, _chai.expect)(component).to.have.className('success');
    (0, _chai.expect)(component).to.not.have.attr('color');
  });
  it('sets contents', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_badge.Badge, null, "1"));
    (0, _chai.expect)(component).to.have.text('1');
  });
});

//# sourceMappingURL=badge-spec.js.map