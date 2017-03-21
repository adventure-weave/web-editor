"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var storm_react_diagrams_1 = require("storm-react-diagrams");
var div = React.DOM.div, span = React.DOM.span;
var ChoicePortWidget = (function (_super) {
    __extends(ChoicePortWidget, _super);
    function ChoicePortWidget() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ChoicePortWidget.prototype.render = function () {
        var _this = this;
        var model = this.props.model;
        var port = React.createElement(storm_react_diagrams_1.PortWidget, { name: model.name, node: model.getParent() });
        var label = React.DOM.div({ className: 'name' }, model.name);
        return React.DOM.div({ className: 'out-port' }, span({
            className: 'btn btn-default btn-sm glyphicon glyphicon-minus',
            onClick: function () {
                model.parentNode.removePort(model);
                _this.props.updateCanvas();
            }
        }), label, port);
    };
    return ChoicePortWidget;
}(React.Component));
ChoicePortWidget.defaultProps = {
    model: null,
    updateCanvas: function () { }
};
exports.ChoicePortWidget = ChoicePortWidget;
//# sourceMappingURL=ChoicePortWidget.js.map