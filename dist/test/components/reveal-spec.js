"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _chai = require("chai");

var _reveal = require("../../src/components/reveal");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// TODO: Add test cases for invalid enum values
describe('Reveal component', function () {
  it('sets tag name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_reveal.Reveal, null));
    (0, _chai.expect)(component).to.have.tagName('div');
  });
  it('sets default class name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_reveal.Reveal, null));
    (0, _chai.expect)(component).to.have.className('reveal');
  });
  it('does not set default class name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_reveal.Reveal, {
      noDefaultClassName: true
    }));
    (0, _chai.expect)(component).to.not.have.className('reveal');
  });
  it('sets custom class name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_reveal.Reveal, {
      className: "my-reveal"
    }));
    (0, _chai.expect)(component).to.have.className('my-reveal');
  });
  it('sets tiny', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_reveal.Reveal, {
      isTiny: true
    }));
    (0, _chai.expect)(component).to.have.className('tiny');
    (0, _chai.expect)(component).to.not.have.attr('isTiny');
  });
  it('sets small', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_reveal.Reveal, {
      isSmall: true
    }));
    (0, _chai.expect)(component).to.have.className('small');
    (0, _chai.expect)(component).to.not.have.attr('isSmall');
  });
  it('sets large', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_reveal.Reveal, {
      isLarge: true
    }));
    (0, _chai.expect)(component).to.have.className('large');
    (0, _chai.expect)(component).to.not.have.attr('isLarge');
  });
  it('sets full', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_reveal.Reveal, {
      isFullscreen: true
    }));
    (0, _chai.expect)(component).to.have.className('full');
    (0, _chai.expect)(component).to.not.have.attr('isFullscreen');
  });
});

//# sourceMappingURL=reveal-spec.js.map