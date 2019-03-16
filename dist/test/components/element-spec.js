"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _chai = require("chai");

var _element = require("../../src/components/element");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Block component', function () {
  it('sets tag name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_element.Block, null));
    (0, _chai.expect)(component).to.have.tagName('div');
  });
  it('sets default class name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_element.Block, {
      className: "block"
    }));
    (0, _chai.expect)(component).to.have.className('block');
  });
  it('sets hidden', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_element.Block, {
      isHidden: true
    }));
    (0, _chai.expect)(component).to.have.className('hide');
    (0, _chai.expect)(component).to.not.have.attr('isHidden');
  });
  it('sets contents', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_element.Block, null, "1"));
    (0, _chai.expect)(component).to.have.text('1');
  });
});
describe('Inline component', function () {
  it('sets tag name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_element.Inline, null));
    (0, _chai.expect)(component).to.have.tagName('span');
  });
  it('sets default class name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_element.Inline, {
      className: "inline"
    }));
    (0, _chai.expect)(component).to.have.className('inline');
  });
  it('sets hidden', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_element.Inline, {
      showForSr: true
    }));
    (0, _chai.expect)(component).to.have.className('show-for-sr');
    (0, _chai.expect)(component).to.not.have.attr('showForSr');
  });
  it('sets contents', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_element.Inline, null, "A"));
    (0, _chai.expect)(component).to.have.text('A');
  });
});

//# sourceMappingURL=element-spec.js.map