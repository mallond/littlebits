"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _chai = require("chai");

var _breadcrumbs = require("../../src/components/breadcrumbs");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Breadcrumbs component', function () {
  it('sets tag name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_breadcrumbs.Breadcrumbs, null));
    (0, _chai.expect)(component).to.have.tagName('ul');
  });
  it('sets default class name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_breadcrumbs.Breadcrumbs, null));
    (0, _chai.expect)(component).to.have.className('breadcrumbs');
  });
  it('does not set default class name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_breadcrumbs.Breadcrumbs, {
      noDefaultClassName: true
    }));
    (0, _chai.expect)(component).to.not.have.className('breadcrumbs');
  });
  it('sets custom class name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_breadcrumbs.Breadcrumbs, {
      className: "my-breadcrumbs"
    }));
    (0, _chai.expect)(component).to.have.className('my-breadcrumbs');
  });
});
describe('BreadcrumbItem component', function () {
  it('sets tag name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_breadcrumbs.BreadcrumbItem, null));
    (0, _chai.expect)(component).to.have.tagName('li');
  });
  it('sets disabled', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_breadcrumbs.BreadcrumbItem, {
      isDisabled: true
    }));
    (0, _chai.expect)(component).to.have.className('disabled');
    (0, _chai.expect)(component).to.not.have.attr('isDisabled');
  });
});

//# sourceMappingURL=breadcrumbs-spec.js.map