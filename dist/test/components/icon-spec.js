"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _chai = require("chai");

var _icon = require("../../src/components/icon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Icon component', function () {
  it('sets tag name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_icon.Icon, {
      name: "ok"
    }));
    (0, _chai.expect)(component).to.have.tagName('i');
  });
  it('sets icon', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_icon.Icon, {
      name: "ok"
    }));
    (0, _chai.expect)(component).to.have.className('ok');
    (0, _chai.expect)(component).to.not.have.attr('icon');
  });
  it('sets prefix', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_icon.Icon, {
      prefix: "fa",
      name: "ok"
    }));
    (0, _chai.expect)(component).to.have.className('fa');
    (0, _chai.expect)(component).to.not.have.attr('prefix');
  });
  it('adds prefix to name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_icon.Icon, {
      prefix: "fa",
      name: "ok"
    }));
    (0, _chai.expect)(component).to.have.className('fa');
    (0, _chai.expect)(component).to.have.className('fa-ok');
  });
});

//# sourceMappingURL=icon-spec.js.map