"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactAddonsTestUtils = require("react-addons-test-utils");

var _enzyme = require("enzyme");

var _chai = require("chai");

var _flexVideo = require("../../src/components/flex-video");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('FlexVideo component', function () {
  it('sets tag name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_flexVideo.FlexVideo, null));
    (0, _chai.expect)(component).to.have.tagName('div');
  });
  it('sets default class name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_flexVideo.FlexVideo, null));
    (0, _chai.expect)(component).to.have.className('flex-video');
  });
  it('does not set default class name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_flexVideo.FlexVideo, {
      noDefaultClassName: true
    }));
    (0, _chai.expect)(component).to.not.have.className('flex-video');
  });
  it('sets custom class name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_flexVideo.FlexVideo, {
      className: "my-flex-video"
    }));
    (0, _chai.expect)(component).to.have.className('my-flex-video');
  });
  it('sets widescreen', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_flexVideo.FlexVideo, {
      isWidescreen: true
    }));
    (0, _chai.expect)(component).to.have.className('widescreen');
    (0, _chai.expect)(component).to.not.have.attr('isWidescreen');
  });
  it('sets vimeo', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_flexVideo.FlexVideo, {
      isVimeo: true
    }));
    (0, _chai.expect)(component).to.have.className('vimeo');
    (0, _chai.expect)(component).to.not.have.attr('isVimeo');
  });
  it('sets contents', function () {
    var renderer = (0, _reactAddonsTestUtils.createRenderer)();
    renderer.render(_react.default.createElement(_flexVideo.FlexVideo, null, _react.default.createElement("iframe", {
      src: "https://example.com"
    })));
    var output = renderer.getRenderOutput();
    (0, _chai.expect)(output).jsx.to.include(_react.default.createElement("iframe", {
      src: "https://example.com"
    }));
  });
});

//# sourceMappingURL=flex-video-spec.js.map