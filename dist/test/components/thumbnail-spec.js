"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _chai = require("chai");

var _thumbnail = require("../../src/components/thumbnail");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Thumbnail component', function () {
  it('sets tag name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_thumbnail.Thumbnail, null));
    (0, _chai.expect)(component).to.have.tagName('img');
  });
  it('sets default class name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_thumbnail.Thumbnail, null));
    (0, _chai.expect)(component).to.have.className('thumbnail');
  });
  it('does not set default class name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_thumbnail.Thumbnail, {
      noDefaultClassName: true
    }));
    (0, _chai.expect)(component).to.not.have.className('thumbnail');
  });
  it('sets custom class name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_thumbnail.Thumbnail, {
      className: "my-thumbnail"
    }));
    (0, _chai.expect)(component).to.have.className('my-thumbnail');
  });
  it('sets source url', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_thumbnail.Thumbnail, {
      src: "assets/img/thumbnail/01.jpg"
    }));
    (0, _chai.expect)(component).to.have.attr('src', 'assets/img/thumbnail/01.jpg');
  });
  it('sets alternative text', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_thumbnail.Thumbnail, {
      alt: "Photo of Uranus."
    }));
    (0, _chai.expect)(component).to.have.attr('alt', 'Photo of Uranus.');
  });
});
describe('ThumbnailLink component', function () {
  it('sets tag name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_thumbnail.ThumbnailLink, null));
    (0, _chai.expect)(component).to.have.tagName('a');
  });
  it('sets default class name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_thumbnail.ThumbnailLink, null));
    (0, _chai.expect)(component).to.have.className('thumbnail');
  });
  it('does not set default class name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_thumbnail.ThumbnailLink, {
      noDefaultClassName: true
    }));
    (0, _chai.expect)(component).to.not.have.className('thumbnail');
  });
  it('sets custom class name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_thumbnail.ThumbnailLink, {
      className: "my-thumbnail"
    }));
    (0, _chai.expect)(component).to.have.className('my-thumbnail');
  });
  it('sets source url', function () {
    var component = (0, _enzyme.mount)(_react.default.createElement(_thumbnail.ThumbnailLink, {
      src: "assets/img/thumbnail/01.jpg"
    }));
    (0, _chai.expect)(component.find('img')).to.have.attr('src', 'assets/img/thumbnail/01.jpg');
  });
  it('sets alternative text', function () {
    var component = (0, _enzyme.mount)(_react.default.createElement(_thumbnail.ThumbnailLink, {
      alt: "Photo of Uranus."
    }));
    (0, _chai.expect)(component.find('img')).to.have.attr('alt', 'Photo of Uranus.');
  });
});

//# sourceMappingURL=thumbnail-spec.js.map