"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _chai = require("chai");

var _mediaObject = require("../../src/components/media-object");

var _enums = require("../../src/enums");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('MediaObject component', function () {
  it('sets tag name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_mediaObject.MediaObject, null));
    (0, _chai.expect)(component).to.have.tagName('div');
  });
  it('sets default class name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_mediaObject.MediaObject, null));
    (0, _chai.expect)(component).to.have.className('media-object');
  });
  it('does not set default class name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_mediaObject.MediaObject, {
      noDefaultClassName: true
    }));
    (0, _chai.expect)(component).to.not.have.className('media-object');
  });
  it('sets custom class name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_mediaObject.MediaObject, {
      className: "my-media-object"
    }));
    (0, _chai.expect)(component).to.have.className('my-media-object');
  });
  it('sets stack for small', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_mediaObject.MediaObject, {
      stackForSmall: true
    }));
    (0, _chai.expect)(component).to.have.className('stack-for-small');
    (0, _chai.expect)(component).to.not.have.attr('stackForSmall');
  });
});
describe('MediaObjectSection component', function () {
  it('sets tag name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_mediaObject.MediaObjectSection, null));
    (0, _chai.expect)(component).to.have.tagName('div');
  });
  it('sets default class name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_mediaObject.MediaObjectSection, null));
    (0, _chai.expect)(component).to.have.className('media-object-section');
  });
  it('does not set default class name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_mediaObject.MediaObjectSection, {
      noDefaultClassName: true
    }));
    (0, _chai.expect)(component).to.not.have.className('media-object-section');
  });
  it('sets custom class name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_mediaObject.MediaObjectSection, {
      className: "my-media-object-section"
    }));
    (0, _chai.expect)(component).to.have.className('my-media-object-section');
  });
  it('sets main', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_mediaObject.MediaObjectSection, {
      isMain: true
    }));
    (0, _chai.expect)(component).to.have.className('main-section');
    (0, _chai.expect)(component).to.not.have.attr('isMain');
  });
  it('sets middle', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_mediaObject.MediaObjectSection, {
      isMiddle: true
    }));
    (0, _chai.expect)(component).to.have.className('middle');
    (0, _chai.expect)(component).to.not.have.attr('isMiddle');
  });
  it('sets bottom', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_mediaObject.MediaObjectSection, {
      isBottom: true
    }));
    (0, _chai.expect)(component).to.have.className('bottom');
    (0, _chai.expect)(component).to.not.have.attr('isBottom');
  });
  it('sets alignment', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_mediaObject.MediaObjectSection, {
      alignment: _enums.Alignments.CENTER
    }));
    (0, _chai.expect)(component).to.have.className('align-self-center');
    (0, _chai.expect)(component).to.not.have.attr('alignment');
  });
});

//# sourceMappingURL=media-object-spec.js.map