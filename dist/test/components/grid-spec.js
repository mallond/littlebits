"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _chai = require("chai");

var _grid = require("../../src/components/grid");

var _enums = require("../../src/enums");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// TODO: Add test cases for invalid enum values
describe('Row component', function () {
  it('sets tag name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_grid.Row, null));
    (0, _chai.expect)(component).to.have.tagName('div');
  });
  it('sets default class name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_grid.Row, null));
    (0, _chai.expect)(component).to.have.className('row');
  });
  it('does not set default class name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_grid.Row, {
      noDefaultClassName: true
    }));
    (0, _chai.expect)(component).to.not.have.className('row');
  });
  it('sets custom class name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_grid.Row, {
      className: "my-row"
    }));
    (0, _chai.expect)(component).to.have.className('my-row');
  });
  it('sets up on small', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_grid.Row, {
      upOnSmall: 1
    }));
    (0, _chai.expect)(component).to.have.className('small-up-1');
    (0, _chai.expect)(component).to.not.have.attr('upOnSmall');
  });
  it('sets up on medium', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_grid.Row, {
      upOnMedium: 2
    }));
    (0, _chai.expect)(component).to.have.className('medium-up-2');
    (0, _chai.expect)(component).to.not.have.attr('upOnMedium');
  });
  it('sets up on large', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_grid.Row, {
      upOnLarge: 3
    }));
    (0, _chai.expect)(component).to.have.className('large-up-3');
    (0, _chai.expect)(component).to.not.have.attr('upOnLarge');
  });
  it('sets horizontal alignment', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_grid.Row, {
      horizontalAlignment: _enums.Alignments.RIGHT
    }));
    (0, _chai.expect)(component).to.have.className('align-right');
    (0, _chai.expect)(component).to.not.have.attr('horizontalAlignment');
  });
  it('sets vertical alignment', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_grid.Row, {
      verticalAlignment: _enums.Alignments.TOP
    }));
    (0, _chai.expect)(component).to.have.className('align-top');
    (0, _chai.expect)(component).to.not.have.attr('verticalAlignment');
  });
  it('sets unstack on small', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_grid.Row, {
      unstackOnSmall: true
    }));
    (0, _chai.expect)(component).to.have.className('small-unstack');
    (0, _chai.expect)(component).to.not.have.attr('unstackOnSmall');
  });
  it('sets unstack on medium', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_grid.Row, {
      unstackOnMedium: true
    }));
    (0, _chai.expect)(component).to.have.className('medium-unstack');
    (0, _chai.expect)(component).to.not.have.attr('unstackOnMedium');
  });
  it('sets unstack on large', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_grid.Row, {
      unstackOnLarge: true
    }));
    (0, _chai.expect)(component).to.have.className('large-unstack');
    (0, _chai.expect)(component).to.not.have.attr('unstackOnLarge');
  });
  it('sets collapse on small', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_grid.Row, {
      collapseOnSmall: true
    }));
    (0, _chai.expect)(component).to.have.className('small-collapse');
    (0, _chai.expect)(component).to.not.have.attr('collapseOnSmall');
  });
  it('sets collapse on medium', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_grid.Row, {
      collapseOnMedium: true
    }));
    (0, _chai.expect)(component).to.have.className('medium-collapse');
    (0, _chai.expect)(component).to.not.have.attr('collapseOnMedium');
  });
  it('sets collapse on large', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_grid.Row, {
      collapseOnLarge: true
    }));
    (0, _chai.expect)(component).to.have.className('large-collapse');
    (0, _chai.expect)(component).to.not.have.attr('collapseOnLarge');
  });
  it('sets uncollapse on small', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_grid.Row, {
      uncollapseOnSmall: true
    }));
    (0, _chai.expect)(component).to.have.className('small-uncollapse');
    (0, _chai.expect)(component).to.not.have.attr('uncollapseOnSmall');
  });
  it('sets uncollapse on medium', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_grid.Row, {
      uncollapseOnMedium: true
    }));
    (0, _chai.expect)(component).to.have.className('medium-uncollapse');
    (0, _chai.expect)(component).to.not.have.attr('uncollapseOnMedium');
  });
  it('sets uncollapse on large', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_grid.Row, {
      uncollapseOnLarge: true
    }));
    (0, _chai.expect)(component).to.have.className('large-uncollapse');
    (0, _chai.expect)(component).to.not.have.attr('uncollapseOnLarge');
  });
  it('sets collapse', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_grid.Row, {
      isCollapsed: true
    }));
    (0, _chai.expect)(component).to.have.className('collapse');
    (0, _chai.expect)(component).to.not.have.attr('isCollapsed');
  });
  it('sets column', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_grid.Row, {
      isColumn: true
    }));
    (0, _chai.expect)(component).to.have.className('column');
    (0, _chai.expect)(component).to.not.have.attr('isColumn');
  });
  it('sets expanded', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_grid.Row, {
      isExpanded: true
    }));
    (0, _chai.expect)(component).to.have.className('expanded');
    (0, _chai.expect)(component).to.not.have.attr('isExpanded');
  });
});
describe('Column component', function () {
  it('sets tag name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_grid.Column, null));
    (0, _chai.expect)(component).to.have.tagName('div');
  });
  it('sets default class name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_grid.Column, null));
    (0, _chai.expect)(component).to.have.className('columns');
  });
  it('does not set default class name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_grid.Column, {
      noDefaultClassName: true
    }));
    (0, _chai.expect)(component).to.not.have.className('columns');
  });
  it('sets custom class name', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_grid.Column, {
      className: "my-column"
    }));
    (0, _chai.expect)(component).to.have.className('my-column');
  });
  it('sets small', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_grid.Column, {
      small: 12
    }));
    (0, _chai.expect)(component).to.have.className('small-12');
    (0, _chai.expect)(component).to.not.have.attr('small');
  });
  it('sets medium', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_grid.Column, {
      medium: 6
    }));
    (0, _chai.expect)(component).to.have.className('medium-6');
    (0, _chai.expect)(component).to.not.have.attr('medium');
  });
  it('sets large', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_grid.Column, {
      large: 4
    }));
    (0, _chai.expect)(component).to.have.className('large-4');
    (0, _chai.expect)(component).to.not.have.attr('large');
  });
  it('sets offset on small', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_grid.Column, {
      offsetOnSmall: 1
    }));
    (0, _chai.expect)(component).to.have.className('small-offset-1');
    (0, _chai.expect)(component).to.not.have.attr('offsetOnSmall');
  });
  it('sets offset on medium', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_grid.Column, {
      offsetOnMedium: 2
    }));
    (0, _chai.expect)(component).to.have.className('medium-offset-2');
    (0, _chai.expect)(component).to.not.have.attr('offsetOnMedium');
  });
  it('sets offset on large', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_grid.Column, {
      offsetOnLarge: 3
    }));
    (0, _chai.expect)(component).to.have.className('large-offset-3');
    (0, _chai.expect)(component).to.not.have.attr('offsetOnLarge');
  });
  it('sets push on small', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_grid.Column, {
      pushOnSmall: 1
    }));
    (0, _chai.expect)(component).to.have.className('small-push-1');
    (0, _chai.expect)(component).to.not.have.attr('pushOnSmall');
  });
  it('sets push on medium', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_grid.Column, {
      pushOnMedium: 2
    }));
    (0, _chai.expect)(component).to.have.className('medium-push-2');
    (0, _chai.expect)(component).to.not.have.attr('pushOnMedium');
  });
  it('sets push on large', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_grid.Column, {
      pushOnLarge: 3
    }));
    (0, _chai.expect)(component).to.have.className('large-push-3');
    (0, _chai.expect)(component).to.not.have.attr('pushOnLarge');
  });
  it('sets order on small', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_grid.Column, {
      orderOnSmall: 1
    }));
    (0, _chai.expect)(component).to.have.className('small-order-1');
    (0, _chai.expect)(component).to.not.have.attr('orderOnSmall');
  });
  it('sets order on medium', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_grid.Column, {
      orderOnMedium: 2
    }));
    (0, _chai.expect)(component).to.have.className('medium-order-2');
    (0, _chai.expect)(component).to.not.have.attr('orderOnMedium');
  });
  it('sets order on large', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_grid.Column, {
      orderOnLarge: 3
    }));
    (0, _chai.expect)(component).to.have.className('large-order-3');
    (0, _chai.expect)(component).to.not.have.attr('orderOnLarge');
  });
  it('sets center on small', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_grid.Column, {
      centerOnSmall: true
    }));
    (0, _chai.expect)(component).to.have.className('small-centered');
    (0, _chai.expect)(component).to.not.have.attr('centerOnSmall');
  });
  it('sets center on medium', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_grid.Column, {
      centerOnMedium: true
    }));
    (0, _chai.expect)(component).to.have.className('medium-centered');
    (0, _chai.expect)(component).to.not.have.attr('centerOnMedium');
  });
  it('sets center on large', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_grid.Column, {
      centerOnLarge: true
    }));
    (0, _chai.expect)(component).to.have.className('large-centered');
    (0, _chai.expect)(component).to.not.have.attr('centerOnLarge');
  });
  it('sets uncenter on small', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_grid.Column, {
      uncenterOnSmall: true
    }));
    (0, _chai.expect)(component).to.have.className('small-uncentered');
    (0, _chai.expect)(component).to.not.have.attr('uncenterOnSmall');
  });
  it('sets uncenter on medium', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_grid.Column, {
      uncenterOnMedium: true
    }));
    (0, _chai.expect)(component).to.have.className('medium-uncentered');
    (0, _chai.expect)(component).to.not.have.attr('uncenterOnMedium');
  });
  it('sets uncenter on large', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_grid.Column, {
      uncenterOnLarge: true
    }));
    (0, _chai.expect)(component).to.have.className('large-uncentered');
    (0, _chai.expect)(component).to.not.have.attr('uncenterOnLarge');
  });
  it('sets expand on small', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_grid.Column, {
      expandOnSmall: true
    }));
    (0, _chai.expect)(component).to.have.className('small-expand');
    (0, _chai.expect)(component).to.not.have.attr('expandOnSmall');
  });
  it('sets expand on medium', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_grid.Column, {
      expandOnMedium: true
    }));
    (0, _chai.expect)(component).to.have.className('medium-expand');
    (0, _chai.expect)(component).to.not.have.attr('expandOnMedium');
  });
  it('sets expand on large', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_grid.Column, {
      expandOnLarge: true
    }));
    (0, _chai.expect)(component).to.have.className('large-expand');
    (0, _chai.expect)(component).to.not.have.attr('expandOnLarge');
  });
  it('sets shrink', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_grid.Column, {
      isShrunk: true
    }));
    (0, _chai.expect)(component).to.have.className('shrink');
    (0, _chai.expect)(component).to.not.have.attr('isShrunk');
  });
  it('sets last', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_grid.Column, {
      isLast: true
    }));
    (0, _chai.expect)(component).to.have.className('end');
    (0, _chai.expect)(component).to.not.have.attr('isLast');
  });
  it('sets column', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_grid.Column, {
      isColumn: true
    }));
    (0, _chai.expect)(component).to.have.className('column');
    (0, _chai.expect)(component).to.not.have.className('columns');
  });
});

//# sourceMappingURL=grid-spec.js.map