"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _chai = require("chai");

var _label = require("../../src/components/label");

var _enums = require("../../src/enums");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// TODO: Add test cases for invalid enum values
describe('Label component', function () {
  it('sets tag name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_label.Label, null));
    (0, _chai.expect)(component).to.have.tagName('span');
  });
  it('sets default class name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_label.Label, null));
    (0, _chai.expect)(component).to.have.className('label');
  });
  it('does not set default class name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_label.Label, {
      noDefaultClassName: true
    }));
    (0, _chai.expect)(component).to.not.have.className('label');
  });
  it('sets custom class name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_label.Label, {
      className: "my-label"
    }));
    (0, _chai.expect)(component).to.have.className('my-label');
  });
  it('sets color', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_label.Label, {
      color: _enums.Colors.SUCCESS
    }));
    (0, _chai.expect)(component).to.have.className('success');
    (0, _chai.expect)(component).to.not.have.attr('color');
  });
  it('sets contents', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_label.Label, null, "Build passing"));
    (0, _chai.expect)(component).to.have.text('Build passing');
  });
});

//# sourceMappingURL=label-spec.js.map