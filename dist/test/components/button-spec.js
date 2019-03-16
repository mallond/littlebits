"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _chai = require("chai");

var _button = require("../../src/components/button");

var _enums = require("../../src/enums");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// TODO: Add test cases for invalid enum values
describe('Button component', function () {
  it('sets tag name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_button.Button, null));
    (0, _chai.expect)(component).to.have.tagName('button');
  });
  it('sets default class name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_button.Button, null));
    (0, _chai.expect)(component).to.have.className('button');
  });
  it('sets custom class name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_button.Button, {
      className: "my-button"
    }));
    (0, _chai.expect)(component).to.have.className('my-button');
  });
  it('does not set default class name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_button.Button, {
      noDefaultClassName: true
    }));
    (0, _chai.expect)(component).to.not.have.className('button');
  });
  it('sets size', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_button.Button, {
      size: _enums.Sizes.SMALL
    }));
    (0, _chai.expect)(component).to.have.className('small');
    (0, _chai.expect)(component).to.not.have.attr('size');
  });
  it('sets color', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_button.Button, {
      color: _enums.Colors.SUCCESS
    }));
    (0, _chai.expect)(component).to.have.className('success');
    (0, _chai.expect)(component).to.not.have.attr('color');
  });
  it('sets hollow', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_button.Button, {
      isHollow: true
    }));
    (0, _chai.expect)(component).to.have.className('hollow');
    (0, _chai.expect)(component).to.not.have.attr('isHollow');
  });
  it('sets clear', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_button.Button, {
      isClear: true
    }));
    (0, _chai.expect)(component).to.have.className('clear');
    (0, _chai.expect)(component).to.not.have.attr('isClear');
  });
  it('sets expanded', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_button.Button, {
      isExpanded: true
    }));
    (0, _chai.expect)(component).to.have.className('expanded');
    (0, _chai.expect)(component).to.not.have.attr('isExpanded');
  });
  it('sets disabled', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_button.Button, {
      isDisabled: true
    }));
    (0, _chai.expect)(component).to.have.className('disabled');
    (0, _chai.expect)(component).to.not.have.attr('isDisabled');
  });
  it('sets dropdown', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_button.Button, {
      isDropdown: true
    }));
    (0, _chai.expect)(component).to.have.className('dropdown');
    (0, _chai.expect)(component).to.not.have.attr('isDropdown');
  });
  it('sets arrow only', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_button.Button, {
      isArrowOnly: true
    }));
    (0, _chai.expect)(component).to.have.className('arrow-only');
    (0, _chai.expect)(component).to.not.have.attr('isArrowOnly');
  });
  it('sets contents', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_button.Button, null, "Submit"));
    (0, _chai.expect)(component).to.have.text('Submit');
  });
});
describe('Link component', function () {
  it('sets tag name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_button.Link, null));
    (0, _chai.expect)(component).to.have.tagName('a');
  });
  it('sets default class name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_button.Link, null));
    (0, _chai.expect)(component).to.have.className('button');
  });
  it('does not set default class name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_button.Link, {
      noDefaultClassName: true
    }));
    (0, _chai.expect)(component).to.not.have.className('button');
  });
  it('sets custom class name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_button.Link, {
      className: "my-button"
    }));
    (0, _chai.expect)(component).to.have.className('my-button');
  });
  it('sets size', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_button.Link, {
      size: _enums.Sizes.SMALL
    }));
    (0, _chai.expect)(component).to.have.className('small');
    (0, _chai.expect)(component).to.not.have.attr('size');
  });
  it('sets color', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_button.Link, {
      color: _enums.Colors.SUCCESS
    }));
    (0, _chai.expect)(component).to.have.className('success');
    (0, _chai.expect)(component).to.not.have.attr('color');
  });
  it('sets hollow', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_button.Link, {
      isHollow: true
    }));
    (0, _chai.expect)(component).to.have.className('hollow');
    (0, _chai.expect)(component).to.not.have.attr('isHollow');
  });
  it('sets expanded', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_button.Link, {
      isExpanded: true
    }));
    (0, _chai.expect)(component).to.have.className('expanded');
    (0, _chai.expect)(component).to.not.have.attr('isExpanded');
  });
  it('sets disabled', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_button.Link, {
      isDisabled: true
    }));
    (0, _chai.expect)(component).to.have.className('disabled');
    (0, _chai.expect)(component).to.not.have.attr('isDisabled');
  });
  it('sets dropdown', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_button.Link, {
      isDropdown: true
    }));
    (0, _chai.expect)(component).to.have.className('dropdown');
    (0, _chai.expect)(component).to.not.have.attr('isDropdown');
  });
  it('sets arrow only', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_button.Link, {
      isArrowOnly: true
    }));
    (0, _chai.expect)(component).to.have.className('arrow-only');
    (0, _chai.expect)(component).to.not.have.attr('isArrowOnly');
  });
  it('sets contents', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_button.Link, null, "Link"));
    (0, _chai.expect)(component).to.have.text('Link');
  });
});

//# sourceMappingURL=button-spec.js.map