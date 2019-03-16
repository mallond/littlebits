"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _chai = require("chai");

var _callout = require("../../src/components/callout");

var _enums = require("../../src/enums");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// TODO: Add test cases for invalid enum values
describe('Callout component', function () {
  it('sets tag name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_callout.Callout, null));
    (0, _chai.expect)(component).to.have.tagName('div');
  });
  it('sets default class name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_callout.Callout, null));
    (0, _chai.expect)(component).to.have.className('callout');
  });
  it('does not set default class name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_callout.Callout, {
      noDefaultClassName: true
    }));
    (0, _chai.expect)(component).to.not.have.className('callout');
  });
  it('sets custom class name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_callout.Callout, {
      className: "my-callout"
    }));
    (0, _chai.expect)(component).to.have.className('my-callout');
  });
  it('sets color', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_callout.Callout, {
      color: _enums.Colors.SUCCESS
    }));
    (0, _chai.expect)(component).to.have.className('success');
    (0, _chai.expect)(component).to.not.have.attr('color');
  });
  it('sets size', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_callout.Callout, {
      size: _enums.Sizes.SMALL
    }));
    (0, _chai.expect)(component).to.have.className('small');
    (0, _chai.expect)(component).to.not.have.attr('size');
  });
  it('sets contents', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_callout.Callout, null, "Hello"));
    (0, _chai.expect)(component).to.have.text('Hello');
  });
});

//# sourceMappingURL=callout-spec.js.map