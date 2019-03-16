"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _chai = require("chai");

var _menu = require("../../src/components/menu");

var _enums = require("../../src/enums");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// TODO: Add test cases for invalid enum values
describe('Menu component', function () {
  it('sets tag name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_menu.Menu, null));
    (0, _chai.expect)(component).to.have.tagName('ul');
  });
  it('sets default class name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_menu.Menu, null));
    (0, _chai.expect)(component).to.have.className('menu');
  });
  it('does not set default class name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_menu.Menu, {
      noDefaultClassName: true
    }));
    (0, _chai.expect)(component).to.not.have.className('menu');
  });
  it('sets custom class name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_menu.Menu, {
      className: "my-menu"
    }));
    (0, _chai.expect)(component).to.have.className('my-menu');
  });
  it('sets align right', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_menu.Menu, {
      alignment: _enums.Alignments.RIGHT
    }));
    (0, _chai.expect)(component).to.have.className('align-right');
    (0, _chai.expect)(component).to.not.have.attr('alignment');
  });
  it('sets align center', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_menu.Menu, {
      alignment: _enums.Alignments.CENTER
    }));
    (0, _chai.expect)(component).to.have.className('align-center');
    (0, _chai.expect)(component).to.not.have.attr('alignment');
  });
  it('sets icons on top', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_menu.Menu, {
      iconsOnTop: true
    }));
    (0, _chai.expect)(component).to.have.className('icon-top');
    (0, _chai.expect)(component).to.not.have.attr('iconsOnTop');
  });
  it('sets expanded', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_menu.Menu, {
      isExpanded: true
    }));
    (0, _chai.expect)(component).to.have.className('expanded');
    (0, _chai.expect)(component).to.not.have.attr('isExpanded');
  });
  it('sets dropdown', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_menu.Menu, {
      isDropdown: true
    }));
    (0, _chai.expect)(component).to.have.className('dropdown');
    (0, _chai.expect)(component).to.not.have.attr('isDropdown');
  });
  it('sets vertical', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_menu.Menu, {
      isVertical: true
    }));
    (0, _chai.expect)(component).to.have.className('vertical');
    (0, _chai.expect)(component).to.not.have.attr('isVertical');
  });
  it('sets simple', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_menu.Menu, {
      isSimple: true
    }));
    (0, _chai.expect)(component).to.have.className('simple');
    (0, _chai.expect)(component).to.not.have.attr('isSimple');
  });
  it('sets nested', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_menu.Menu, {
      isNested: true
    }));
    (0, _chai.expect)(component).to.have.className('nested');
    (0, _chai.expect)(component).to.not.have.attr('isNested');
  });
  it('sets horizontal on medium', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_menu.Menu, {
      horizontalOnMedium: true
    }));
    (0, _chai.expect)(component).to.have.className('medium-horizontal');
    (0, _chai.expect)(component).to.not.have.attr('horizontalOnMedium');
  });
});
describe('MenuItem component', function () {
  it('sets tag name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_menu.MenuItem, null));
    (0, _chai.expect)(component).to.have.tagName('li');
  });
  it('sets active', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_menu.MenuItem, {
      isActive: true
    }));
    (0, _chai.expect)(component).to.have.className('active');
    (0, _chai.expect)(component).to.not.have.attr('isActive');
  });
  it('sets contents', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_menu.MenuItem, null, "Text"));
    (0, _chai.expect)(component).to.have.text('Text');
  });
});
describe('MenuText component', function () {
  it('sets default class name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_menu.MenuText, null));
    (0, _chai.expect)(component).to.have.className('menu-text');
  });
  it('sets custom class name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_menu.MenuText, {
      className: "my-menu-text"
    }));
    (0, _chai.expect)(component).to.have.className('my-menu-text');
    (0, _chai.expect)(component).to.not.have.className('menu-text');
  });
});

//# sourceMappingURL=menu-spec.js.map