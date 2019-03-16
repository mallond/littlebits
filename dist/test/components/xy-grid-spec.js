"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _chai = require("chai");

var _enums = require("../../src/enums");

var _xyGrid = require("../../src/components/xy-grid");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('GridContainer component', function () {
  it('sets tag name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_xyGrid.GridContainer, null));
    (0, _chai.expect)(component).to.have.tagName('div');
  });
  it('sets default class name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_xyGrid.GridContainer, null));
    (0, _chai.expect)(component).to.have.className('grid-container');
  });
  it('does not set default class name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_xyGrid.GridContainer, {
      noDefaultClassName: true
    }));
    (0, _chai.expect)(component).to.not.have.className('grid-container');
  });
  it('sets custom class name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_xyGrid.GridContainer, {
      className: "my-row"
    }));
    (0, _chai.expect)(component).to.have.className('my-row');
  });
  it('sets fluid', function () {
    var component = (0, _enzyme.shallow)(_react.default.createElement(_xyGrid.GridContainer, {
      fluid: true
    }));
    (0, _chai.expect)(component).to.have.className('fluid');
    (0, _chai.expect)(component).to.not.have.prop('fluid');
  });
  it('sets full', function () {
    var component = (0, _enzyme.shallow)(_react.default.createElement(_xyGrid.GridContainer, {
      full: true
    }));
    (0, _chai.expect)(component).to.have.className('full');
    (0, _chai.expect)(component).to.not.have.prop('full');
  });
  it('sets flexbox class name', function () {
    var component = (0, _enzyme.shallow)(_react.default.createElement(_xyGrid.GridContainer, {
      alignX: "center"
    }));
    (0, _chai.expect)(component).to.have.className('align-center');
    (0, _chai.expect)(component).to.not.have.prop('alignX');
  });
});
describe('Grid component', function () {
  it('sets tag name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_xyGrid.Grid, null));
    (0, _chai.expect)(component).to.have.tagName('div');
  });
  it('sets default class name with horizontal direction', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_xyGrid.Grid, null));
    (0, _chai.expect)(component).to.have.className('grid-x');
  });
  it('sets direction to vertical', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_xyGrid.Grid, {
      vertical: true
    }));
    (0, _chai.expect)(component).to.have.className('grid-y');
  });
  it('does not set default class name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_xyGrid.Grid, {
      noDefaultClassName: true
    }));
    (0, _chai.expect)(component).to.not.have.className('grid-x');
  });
  it('sets custom class name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_xyGrid.Grid, {
      className: "my-row"
    }));
    (0, _chai.expect)(component).to.have.className('my-row');
  });
  it('sets margin gutters in horizontal direction', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_xyGrid.Grid, {
      gutters: _enums.GutterTypes.MARGIN
    }));
    (0, _chai.expect)(component).to.have.className('grid-margin-x');
  });
  it('sets padding gutters in vertical direction', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_xyGrid.Grid, {
      vertical: true,
      gutters: _enums.GutterTypes.PADDING
    }));
    (0, _chai.expect)(component).to.have.className('grid-padding-y');
  });
  it('sets up on small', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_xyGrid.Grid, {
      upOnSmall: 1
    }));
    (0, _chai.expect)(component).to.have.className('small-up-1');
    (0, _chai.expect)(component).to.not.have.attr('up');
  });
  it('sets up on medium', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_xyGrid.Grid, {
      upOnMedium: 2
    }));
    (0, _chai.expect)(component).to.have.className('medium-up-2');
    (0, _chai.expect)(component).to.not.have.attr('up');
  });
  it('sets up on large', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_xyGrid.Grid, {
      upOnLarge: 3
    }));
    (0, _chai.expect)(component).to.have.className('large-up-3');
    (0, _chai.expect)(component).to.not.have.attr('up');
  });
  it('removes padding gutters on small', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_xyGrid.Grid, {
      collapseOnSmall: _enums.GutterTypes.PADDING
    }));
    (0, _chai.expect)(component).to.have.className('small-padding-collapse');
    (0, _chai.expect)(component).to.not.have.attr('collapseOnSmall');
  });
  it('removes margin gutters on medium', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_xyGrid.Grid, {
      collapseOnMedium: _enums.GutterTypes.MARGIN
    }));
    (0, _chai.expect)(component).to.have.className('medium-margin-collapse');
    (0, _chai.expect)(component).to.not.have.attr('collapseOnMedium');
  });
  it('removes padding gutters on large', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_xyGrid.Grid, {
      collapseOnLarge: _enums.GutterTypes.PADDING
    }));
    (0, _chai.expect)(component).to.have.className('large-padding-collapse');
    (0, _chai.expect)(component).to.not.have.attr('collapseOnLarge');
  });
  it('sets grid frame', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_xyGrid.Grid, {
      gridFrame: _enums.ExtendedBreakpoints.ALL
    }));
    (0, _chai.expect)(component).to.have.className('grid-frame');
  });
  it('sets grid frame on small', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_xyGrid.Grid, {
      gridFrame: _enums.ExtendedBreakpoints.SMALL
    }));
    (0, _chai.expect)(component).to.have.className('small-grid-frame');
  });
  it('sets grid frame on medium', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_xyGrid.Grid, {
      gridFrame: _enums.ExtendedBreakpoints.MEDIUM
    }));
    (0, _chai.expect)(component).to.have.className('medium-grid-frame');
  });
  it('sets grid frame on large', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_xyGrid.Grid, {
      gridFrame: _enums.ExtendedBreakpoints.LARGE
    }));
    (0, _chai.expect)(component).to.have.className('large-grid-frame');
  });
  it('sets flexbox class name', function () {
    var component = (0, _enzyme.shallow)(_react.default.createElement(_xyGrid.Grid, {
      alignX: "center"
    }));
    (0, _chai.expect)(component).to.have.className('align-center');
    (0, _chai.expect)(component).to.not.have.prop('alignX');
  });
});
describe('Cell component', function () {
  it('sets tag name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_xyGrid.Cell, null));
    (0, _chai.expect)(component).to.have.tagName('div');
  });
  it('sets default class name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_xyGrid.Cell, null));
    (0, _chai.expect)(component).to.have.className('cell');
  });
  it('does not set default class name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_xyGrid.Cell, {
      noDefaultClassName: true
    }));
    (0, _chai.expect)(component).to.not.have.className('cell');
  });
  it('sets custom class name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_xyGrid.Cell, {
      className: "my-column"
    }));
    (0, _chai.expect)(component).to.have.className('my-column');
  });
  it('sets small', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_xyGrid.Cell, {
      small: 12
    }));
    (0, _chai.expect)(component).to.have.className('small-12');
    (0, _chai.expect)(component).to.not.have.attr('small');
  });
  it('sets medium', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_xyGrid.Cell, {
      medium: 6
    }));
    (0, _chai.expect)(component).to.have.className('medium-6');
    (0, _chai.expect)(component).to.not.have.attr('medium');
  });
  it('sets large', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_xyGrid.Cell, {
      large: 4
    }));
    (0, _chai.expect)(component).to.have.className('large-4');
    (0, _chai.expect)(component).to.not.have.attr('large');
  });
  it('sets offset on small', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_xyGrid.Cell, {
      offsetOnSmall: 1
    }));
    (0, _chai.expect)(component).to.have.className('small-offset-1');
    (0, _chai.expect)(component).to.not.have.attr('offsetOnSmall');
  });
  it('sets offset on medium', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_xyGrid.Cell, {
      offsetOnMedium: 2
    }));
    (0, _chai.expect)(component).to.have.className('medium-offset-2');
    (0, _chai.expect)(component).to.not.have.attr('offsetOnMedium');
  });
  it('sets offset on large', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_xyGrid.Cell, {
      offsetOnLarge: 3
    }));
    (0, _chai.expect)(component).to.have.className('large-offset-3');
    (0, _chai.expect)(component).to.not.have.attr('offsetOnLarge');
  });
  it('sets autosizing', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_xyGrid.Cell, {
      auto: _enums.ExtendedBreakpoints.ALL
    }));
    (0, _chai.expect)(component).to.have.className('auto');
  });
  it('sets autosizing on small', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_xyGrid.Cell, {
      auto: _enums.ExtendedBreakpoints.SMALL
    }));
    (0, _chai.expect)(component).to.have.className('small-auto');
  });
  it('sets autosizing on medium', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_xyGrid.Cell, {
      auto: _enums.ExtendedBreakpoints.MEDIUM
    }));
    (0, _chai.expect)(component).to.have.className('medium-auto');
  });
  it('sets autosizing on large', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_xyGrid.Cell, {
      auto: _enums.ExtendedBreakpoints.LARGE
    }));
    (0, _chai.expect)(component).to.have.className('large-auto');
  });
  it('sets shrink', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_xyGrid.Cell, {
      shrink: _enums.ExtendedBreakpoints.ALL
    }));
    (0, _chai.expect)(component).to.have.className('shrink');
  });
  it('sets shrink on small', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_xyGrid.Cell, {
      shrink: _enums.ExtendedBreakpoints.SMALL
    }));
    (0, _chai.expect)(component).to.have.className('small-shrink');
  });
  it('sets shrink on medium', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_xyGrid.Cell, {
      shrink: _enums.ExtendedBreakpoints.MEDIUM
    }));
    (0, _chai.expect)(component).to.have.className('medium-shrink');
  });
  it('sets shrink on large', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_xyGrid.Cell, {
      shrink: _enums.ExtendedBreakpoints.LARGE
    }));
    (0, _chai.expect)(component).to.have.className('large-shrink');
  });
  it('sets flexbox class name', function () {
    var component = (0, _enzyme.shallow)(_react.default.createElement(_xyGrid.Cell, {
      alignX: "center"
    }));
    (0, _chai.expect)(component).to.have.className('align-center');
    (0, _chai.expect)(component).to.not.have.prop('alignX');
  });
});

//# sourceMappingURL=xy-grid-spec.js.map