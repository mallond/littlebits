"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _chai = require("chai");

var _tabs = require("../../src/components/tabs");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// TODO: Add test cases for invalid enum values
describe('Tabs component', function () {
  it('sets tag name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_tabs.Tabs, null));
    (0, _chai.expect)(component).to.have.tagName('ul');
  });
  it('sets default class name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_tabs.Tabs, null));
    (0, _chai.expect)(component).to.have.className('tabs');
  });
  it('does not set default class name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_tabs.Tabs, {
      noDefaultClassName: true
    }));
    (0, _chai.expect)(component).to.not.have.className('tabs');
  });
  it('sets custom class name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_tabs.Tabs, {
      className: "my-tabs"
    }));
    (0, _chai.expect)(component).to.have.className('my-tabs');
  });
  it('sets vertical', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_tabs.Tabs, {
      isVertical: true
    }));
    (0, _chai.expect)(component).to.have.className('vertical');
    (0, _chai.expect)(component).to.not.have.attr('isVertical');
  });
});
describe('TabItem component', function () {
  it('sets tag name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_tabs.TabItem, null));
    (0, _chai.expect)(component).to.have.tagName('li');
  });
  it('does not set default class name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_tabs.TabItem, {
      noDefaultClassName: true
    }));
    (0, _chai.expect)(component).to.not.have.className('tabs-content');
  });
  it('sets active', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_tabs.TabItem, {
      isActive: true
    }));
    (0, _chai.expect)(component).to.have.className('is-active');
    (0, _chai.expect)(component).to.not.have.attr('isActive');
  });
  it('sets contents', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_tabs.TabItem, null, "Text"));
    (0, _chai.expect)(component).to.have.text('Text');
  });
});
describe('TabsContent component', function () {
  it('sets tag name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_tabs.TabsContent, null));
    (0, _chai.expect)(component).to.have.tagName('div');
  });
  it('sets default class name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_tabs.TabsContent, null));
    (0, _chai.expect)(component).to.have.className('tabs-content');
  });
  it('does not set default class name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_tabs.TabsContent, {
      noDefaultClassName: true
    }));
    (0, _chai.expect)(component).to.not.have.className('tabs-content');
  });
  it('sets custom class name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_tabs.TabsContent, {
      className: "my-panel-container"
    }));
    (0, _chai.expect)(component).to.have.className('my-panel-container');
  });
  it('sets vertical', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_tabs.TabsContent, {
      isVertical: true
    }));
    (0, _chai.expect)(component).to.have.className('vertical');
    (0, _chai.expect)(component).to.not.have.attr('isVertical');
  });
});
describe('TabPanel component', function () {
  it('sets tag name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_tabs.TabPanel, null));
    (0, _chai.expect)(component).to.have.tagName('div');
  });
  it('sets default class name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_tabs.TabPanel, null));
    (0, _chai.expect)(component).to.have.className('tabs-panel');
  });
  it('does not set default class name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_tabs.TabPanel, {
      noDefaultClassName: true
    }));
    (0, _chai.expect)(component).to.not.have.className('tabs-panel');
  });
  it('sets custom class name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_tabs.TabPanel, {
      className: "my-panel-item"
    }));
    (0, _chai.expect)(component).to.have.className('my-panel-item');
  });
  it('sets active', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_tabs.TabPanel, {
      isActive: true
    }));
    (0, _chai.expect)(component).to.have.className('is-active');
    (0, _chai.expect)(component).to.not.have.attr('isActive');
  });
});

//# sourceMappingURL=tabs-spec.js.map