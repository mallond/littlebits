"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _chai = require("chai");

var _closeButton = require("../../src/components/close-button");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('CloseButton component', function () {
  it('sets tag name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_closeButton.CloseButton, null));
    (0, _chai.expect)(component).to.have.tagName('button');
  });
  it('sets default class name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_closeButton.CloseButton, null));
    (0, _chai.expect)(component).to.have.className('close-button');
  });
  it('does not set default class name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_closeButton.CloseButton, {
      noDefaultClassName: true
    }));
    (0, _chai.expect)(component).to.not.have.className('close-button');
  });
  it('sets custom class name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_closeButton.CloseButton, {
      className: "my-close-button"
    }));
    (0, _chai.expect)(component).to.have.className('my-close-button');
  });
});

//# sourceMappingURL=close-button-spec.js.map