"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _chai = require("chai");

var _enums = require("../src/enums");

var _utils = require("../src/utils");

var _flexVideo = require("../src/components/flex-video");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Utilities', function () {
  it('removeProps', function () {
    var props = {
      foo: 1,
      bar: true,
      baz: '???'
    };
    var actual = (0, _utils.removeProps)(props, ['bar']);
    (0, _chai.expect)(actual).to.have.property('foo');
    (0, _chai.expect)(actual).to.have.property('baz');
    (0, _chai.expect)(actual).to.not.have.property('bar');
  });
  it('createClassName', function () {
    var className = (0, _utils.createClassName)('foo', {
      bar: true,
      baz: 1 === 2,
      qux: undefined
    });
    (0, _chai.expect)(className).to.equal('foo bar');
  });
  it('generalClassNames', function () {
    var props = {
      showFor: _enums.Breakpoints.MEDIUM,
      isHidden: true,
      showForSr: false,
      float: 'left'
    };
    var classNames = (0, _utils.generalClassNames)(props);
    (0, _chai.expect)(classNames['show-for-medium']).to.equal.true;
    (0, _chai.expect)(classNames['hide']).to.equal.true;
    (0, _chai.expect)(classNames['show-for-sr']).to.equal.false;
    (0, _chai.expect)(classNames['float-left']).to.equal.true;
  });
  it('objectValues', function () {
    var obj = {
      FOO: 'foo',
      BAR: 'bar',
      BAZ: 'baz',
      QUX: 'qux'
    };
    (0, _chai.expect)((0, _utils.objectValues)(obj)).to.include('foo');
    (0, _chai.expect)((0, _utils.objectValues)(obj)).to.include('bar');
    (0, _chai.expect)((0, _utils.objectValues)(obj)).to.include('baz');
    (0, _chai.expect)((0, _utils.objectValues)(obj)).to.include('qux');
  });
  it('flexboxClassNames', function () {
    var props = {
      flexDirRow: _enums.ExtendedBreakpoints.MEDIUM,
      flexOrderSmall: 4,
      flexChild: _enums.SpaceControls.GROW
    };
    var classNames = (0, _utils.flexboxClassNames)(props);
    (0, _chai.expect)(classNames['medium-flex-dir-row']).to.equal.true;
    (0, _chai.expect)(classNames['small-order-4']).to.equal.true;
    (0, _chai.expect)(classNames['flex-child-grow']).to.equal.true;
  });
});

//# sourceMappingURL=utils-spec.js.map