"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactAddonsTestUtils = require("react-addons-test-utils");

var _enzyme = require("enzyme");

var _chai = require("chai");

var _progressBar = require("../../src/components/progress-bar");

var _enums = require("../../src/enums");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// TODO: Add test cases for invalid enum values
describe('Progress component', function () {
  it('sets tag name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_progressBar.Progress, null));
    (0, _chai.expect)(component).to.have.tagName('div');
  });
  it('sets default class name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_progressBar.Progress, null));
    (0, _chai.expect)(component).to.have.className('progress');
  });
  it('does not set default class name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_progressBar.Progress, {
      noDefaultClassName: true
    }));
    (0, _chai.expect)(component).to.not.have.className('progress');
  });
  it('sets custom class name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_progressBar.Progress, {
      className: "my-progress"
    }));
    (0, _chai.expect)(component).to.have.className('my-progress');
  });
  it('sets role', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_progressBar.Progress, null));
    (0, _chai.expect)(component).to.have.attr('role', 'progressbar');
  });
  it('sets color', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_progressBar.Progress, {
      color: _enums.Colors.SUCCESS
    }));
    (0, _chai.expect)(component).to.have.className('success');
    (0, _chai.expect)(component).to.not.have.attr('color');
  });
  it('sets minimum value', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_progressBar.Progress, {
      min: 0
    }));
    (0, _chai.expect)(component).to.have.attr('aria-valuemin', '0');
  });
  it('sets maximum value', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_progressBar.Progress, {
      max: 100
    }));
    (0, _chai.expect)(component).to.have.attr('aria-valuemax', '100');
  });
  it('sets current value', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_progressBar.Progress, {
      value: 50
    }));
    (0, _chai.expect)(component).to.have.attr('aria-valuenow', '50');
  });
  it('sets value text', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_progressBar.Progress, {
      valueText: "50 percent"
    }));
    (0, _chai.expect)(component).to.have.attr('aria-valuetext', '50 percent');
  });
  it('sets contents', function () {
    var renderer = (0, _reactAddonsTestUtils.createRenderer)();
    renderer.render(_react.default.createElement(_progressBar.Progress, {
      value: 50
    }));
    var output = renderer.getRenderOutput();
    (0, _chai.expect)(output).jsx.to.include(_react.default.createElement(_progressBar.ProgressMeter, {
      style: {
        width: '50%'
      }
    }));
  });
});
describe('ProgressMeter component', function () {
  it('sets tag name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_progressBar.ProgressMeter, null));
    (0, _chai.expect)(component).to.have.tagName('div');
  });
  it('sets default class name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_progressBar.ProgressMeter, null));
    (0, _chai.expect)(component).to.have.className('progress-meter');
  });
  it('does not set default class name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_progressBar.ProgressMeter, {
      noDefaultClassName: true
    }));
    (0, _chai.expect)(component).to.not.have.className('progress-meter');
  });
  it('sets custom class name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_progressBar.ProgressMeter, {
      className: "my-progress-meter"
    }));
    (0, _chai.expect)(component).to.have.className('my-progress-meter');
  });
  it('sets width', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_progressBar.ProgressMeter, {
      widthPercent: 75
    }));
    (0, _chai.expect)(component).to.have.style({
      width: '75%'
    });
  });
});
describe('ProgressMeterWithText component', function () {
  it('does not set default class name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_progressBar.ProgressMeterWithText, {
      text: "25%",
      noDefaultClassName: true
    }));
    (0, _chai.expect)(component).to.not.have.className('progress-meter');
  });
  it('sets text', function () {
    var renderer = (0, _reactAddonsTestUtils.createRenderer)();
    renderer.render(_react.default.createElement(_progressBar.ProgressMeterWithText, {
      text: "25%"
    }));
    var output = renderer.getRenderOutput();
    (0, _chai.expect)(output).jsx.to.include(_react.default.createElement(_progressBar.ProgressMeterText, null, "25%"));
  });
});
describe('ProgressMeterText component', function () {
  it('sets tag name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_progressBar.ProgressMeterText, null));
    (0, _chai.expect)(component).to.have.tagName('p');
  });
  it('sets default class name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_progressBar.ProgressMeterText, null));
    (0, _chai.expect)(component).to.have.className('progress-meter-text');
  });
  it('does not set default class name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_progressBar.ProgressMeterText, {
      noDefaultClassName: true
    }));
    (0, _chai.expect)(component).to.not.have.className('progress-meter-text');
  });
  it('sets custom class name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_progressBar.ProgressMeterText, {
      className: "my-progress-meter-text"
    }));
    (0, _chai.expect)(component).to.have.className('my-progress-meter-text');
  });
  it('sets contents', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_progressBar.ProgressMeterText, null, "25%"));
    (0, _chai.expect)(component).to.have.text('25%');
  });
});
describe('NativeProgress component', function () {
  it('sets tag name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_progressBar.NativeProgress, null));
    (0, _chai.expect)(component).to.have.tagName('progress');
  });
  it('sets custom class name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_progressBar.NativeProgress, {
      className: "my-progress"
    }));
    (0, _chai.expect)(component).to.have.className('my-progress');
  });
  it('sets color', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_progressBar.NativeProgress, {
      color: _enums.Colors.SUCCESS
    }));
    (0, _chai.expect)(component).to.have.className('success');
    (0, _chai.expect)(component).to.not.have.attr('color');
  });
  it('sets maximum value', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_progressBar.NativeProgress, {
      max: 100
    }));
    (0, _chai.expect)(component).to.have.attr('max', '100');
  });
  it('sets current value', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_progressBar.NativeProgress, {
      value: 50
    }));
    (0, _chai.expect)(component).to.have.attr('value', '50');
  });
  it('sets contents', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_progressBar.NativeProgress, null, "25%"));
    (0, _chai.expect)(component).to.have.text('25%');
  });
});

//# sourceMappingURL=progress-bar-spec.js.map