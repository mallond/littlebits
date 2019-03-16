"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _chai = require("chai");

var _accordion = require("../../src/components/accordion");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Accordion component', function () {
  it('sets tag name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_accordion.Accordion, null));
    (0, _chai.expect)(component).to.have.tagName('ul');
  });
  it('sets default class name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_accordion.Accordion, null));
    (0, _chai.expect)(component).to.have.className('accordion');
  });
  it('does not set default class name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_accordion.Accordion, {
      noDefaultClassName: true
    }));
    (0, _chai.expect)(component).to.not.have.className('accordion');
  });
  it('sets custom class name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_accordion.Accordion, {
      className: "my-accordion"
    }));
    (0, _chai.expect)(component).to.have.className('my-accordion');
  });
  it('sets contents', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_accordion.Accordion, null, "Text"));
    (0, _chai.expect)(component).to.have.text('Text');
  });
});
describe('AccordionItem component', function () {
  it('sets tag name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_accordion.AccordionItem, null));
    (0, _chai.expect)(component).to.have.tagName('li');
  });
  it('sets default class name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_accordion.AccordionItem, null));
    (0, _chai.expect)(component).to.have.className('accordion-item');
  });
  it('does not set default class name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_accordion.AccordionItem, {
      noDefaultClassName: true
    }));
    (0, _chai.expect)(component).to.not.have.className('accordion-content');
  });
  it('sets active', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_accordion.AccordionItem, {
      isActive: true
    }));
    (0, _chai.expect)(component).to.have.className('is-active');
    (0, _chai.expect)(component).to.not.have.attr('isActive');
  });
  it('sets contents', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_accordion.AccordionItem, null, "Text"));
    (0, _chai.expect)(component).to.have.text('Text');
  });
});
describe('AccordionTitle component', function () {
  it('sets tag name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_accordion.AccordionTitle, null));
    (0, _chai.expect)(component).to.have.tagName('a');
  });
  it('sets default class name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_accordion.AccordionTitle, null));
    (0, _chai.expect)(component).to.have.className('accordion-title');
  });
  it('does not set default class name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_accordion.AccordionTitle, {
      noDefaultClassName: true
    }));
    (0, _chai.expect)(component).to.not.have.className('accordion-title');
  });
  it('sets custom class name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_accordion.AccordionTitle, {
      className: "my-accordion-title"
    }));
    (0, _chai.expect)(component).to.have.className('my-accordion-title');
  });
  it('sets contents', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_accordion.AccordionTitle, null, "Text"));
    (0, _chai.expect)(component).to.have.text('Text');
  });
});
describe('AccordionContent component', function () {
  it('sets tag name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_accordion.AccordionContent, null));
    (0, _chai.expect)(component).to.have.tagName('div');
  });
  it('sets default class name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_accordion.AccordionContent, null));
    (0, _chai.expect)(component).to.have.className('accordion-content');
  });
  it('does not set default class name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_accordion.AccordionContent, {
      noDefaultClassName: true
    }));
    (0, _chai.expect)(component).to.not.have.className('accordion-content');
  });
  it('sets custom class name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_accordion.AccordionContent, {
      className: "my-accordion-container"
    }));
    (0, _chai.expect)(component).to.have.className('my-accordion-container');
  });
  it('sets active', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_accordion.AccordionContent, {
      isActive: true
    }));
    (0, _chai.expect)(component).to.have.className('is-active');
    (0, _chai.expect)(component).to.not.have.attr('isActive');
  });
  it('sets contents', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_accordion.AccordionContent, null, "Text"));
    (0, _chai.expect)(component).to.have.text('Text');
  });
});

//# sourceMappingURL=accordion-spec.js.map