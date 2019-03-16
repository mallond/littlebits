"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _chai = require("chai");

var _buttonGroup = require("../../src/components/button-group");

var _enums = require("../../src/enums");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// TODO: Add test cases for invalid enum values
describe('ButtonGroup component', function () {
  it('sets tag name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_buttonGroup.ButtonGroup, null));
    (0, _chai.expect)(component).to.have.tagName('div');
  });
  it('sets default class name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_buttonGroup.ButtonGroup, null));
    (0, _chai.expect)(component).to.have.className('button-group');
  });
  it('does not set default class name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_buttonGroup.ButtonGroup, {
      noDefaultClassName: true
    }));
    (0, _chai.expect)(component).to.not.have.className('button-group');
  });
  it('sets custom class name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_buttonGroup.ButtonGroup, {
      className: "my-button-group"
    }));
    (0, _chai.expect)(component).to.have.className('my-button-group');
  });
  it('sets size', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_buttonGroup.ButtonGroup, {
      size: _enums.Sizes.SMALL
    }));
    (0, _chai.expect)(component).to.have.className('small');
    (0, _chai.expect)(component).to.not.have.attr('size');
  });
  it('sets color', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_buttonGroup.ButtonGroup, {
      color: _enums.Colors.SUCCESS
    }));
    (0, _chai.expect)(component).to.have.className('success');
    (0, _chai.expect)(component).to.not.have.attr('color');
  });
  it('sets expanded', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_buttonGroup.ButtonGroup, {
      isExpanded: true
    }));
    (0, _chai.expect)(component).to.have.className('expanded');
    (0, _chai.expect)(component).to.not.have.attr('isExpanded');
  });
  it('sets stacked', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_buttonGroup.ButtonGroup, {
      isStacked: true
    }));
    (0, _chai.expect)(component).to.have.className('stacked');
    (0, _chai.expect)(component).to.not.have.attr('isStacked');
  });
  it('sets stack on small', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_buttonGroup.ButtonGroup, {
      stackFor: _enums.Breakpoints.SMALL
    }));
    (0, _chai.expect)(component).to.have.className('stacked-for-small');
    (0, _chai.expect)(component).to.not.have.attr('stackedForSmall');
  });
  it('sets stack on medium', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_buttonGroup.ButtonGroup, {
      stackFor: _enums.Breakpoints.MEDIUM
    }));
    (0, _chai.expect)(component).to.have.className('stacked-for-medium');
    (0, _chai.expect)(component).to.not.have.attr('stackedForMedium');
  });
  it('sets stack on large', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_buttonGroup.ButtonGroup, {
      stackFor: _enums.Breakpoints.LARGE
    }));
    (0, _chai.expect)(component).to.have.className('stacked-for-large');
    (0, _chai.expect)(component).to.not.have.attr('stackedForLarge');
  });
});

//# sourceMappingURL=button-group-spec.js.map