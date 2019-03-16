"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _chai = require("chai");

var _pagination = require("../../src/components/pagination");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Pagination component', function () {
  it('sets tag name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_pagination.Pagination, null));
    (0, _chai.expect)(component).to.have.tagName('ul');
  });
  it('sets default class name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_pagination.Pagination, null));
    (0, _chai.expect)(component).to.have.className('pagination');
  });
  it('does not set default class name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_pagination.Pagination, {
      noDefaultClassName: true
    }));
    (0, _chai.expect)(component).to.not.have.className('pagination');
  });
  it('sets custom class name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_pagination.Pagination, {
      className: "my-pagination"
    }));
    (0, _chai.expect)(component).to.have.className('my-pagination');
  });
  it('sets role', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_pagination.Pagination, null));
    (0, _chai.expect)(component).to.have.attr('role', 'navigation');
  });
  it('sets aria label', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_pagination.Pagination, {
      "aria-label": "Pagination"
    }));
    (0, _chai.expect)(component).to.have.attr('aria-label', 'Pagination');
  });
  it('sets centered', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_pagination.Pagination, {
      isCentered: true
    }));
    (0, _chai.expect)(component).to.have.className('text-center');
    (0, _chai.expect)(component).to.not.have.attr('isCentered');
  });
});
describe('PaginationItem component', function () {
  it('sets tag name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_pagination.PaginationItem, null));
    (0, _chai.expect)(component).to.have.tagName('li');
  });
  it('sets current', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_pagination.PaginationItem, {
      isCurrent: true
    }));
    (0, _chai.expect)(component).to.have.className('current');
    (0, _chai.expect)(component).to.not.have.attr('isCurrent');
  });
  it('sets disabled', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_pagination.PaginationItem, {
      isDisabled: true
    }));
    (0, _chai.expect)(component).to.have.className('disabled');
    (0, _chai.expect)(component).to.not.have.attr('isDisabled');
  });
});
describe('PaginationPrevious component', function () {
  it('sets default class name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_pagination.PaginationPrevious, null));
    (0, _chai.expect)(component).to.have.className('pagination-previous');
  });
  it('does not set default class name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_pagination.PaginationPrevious, {
      noDefaultClassName: true
    }));
    (0, _chai.expect)(component).to.not.have.className('pagination-previous');
  });
});
describe('PaginationNext component', function () {
  it('sets default class name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_pagination.PaginationNext, null));
    (0, _chai.expect)(component).to.have.className('pagination-next');
  });
  it('does not set default class name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_pagination.PaginationNext, {
      noDefaultClassName: true
    }));
    (0, _chai.expect)(component).to.not.have.className('pagination-next');
  });
});
describe('PaginationEllipsis component', function () {
  it('sets default class name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_pagination.PaginationEllipsis, null));
    (0, _chai.expect)(component).to.have.className('ellipsis');
  });
  it('does not set default class name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_pagination.PaginationEllipsis, {
      noDefaultClassName: true
    }));
    (0, _chai.expect)(component).to.not.have.className('ellipsis');
  });
});

//# sourceMappingURL=pagination-spec.js.map