"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var storm_react_diagrams_1 = require("storm-react-diagrams");
var _ = require("lodash");
var React = require("react");
var div = React.DOM.div;
var SceneNodeWidget = (function (_super) {
    __extends(SceneNodeWidget, _super);
    function SceneNodeWidget(props) {
        var _this = _super.call(this, props) || this;
        console.log(props.node);
        console.log(props.node.content);
        return _this;
    }
    SceneNodeWidget.prototype.render = function () {
        var node = this.props.node;
        return (div({ className: 'basic-node story-node', style: { background: node.color } }, div({ className: 'title' }, div({ className: 'name' }, node.name), div({ className: 'fa fa-close', onClick: node.remove })), div({ className: 'content' }, node.content), div({ className: 'ports' }, div({ className: 'in' }, _.map(node.getInPorts(), function (port) {
            return React.createElement(storm_react_diagrams_1.DefaultPortLabel, { model: port });
        })), div({ className: 'out' }, _.map(node.getOutPorts(), function (port) {
            return React.createElement(storm_react_diagrams_1.DefaultPortLabel, { model: port });
        })))));
    };
    return SceneNodeWidget;
}(React.Component));
SceneNodeWidget.defaultProps = {
    node: null,
    diagramEngine: null
};
exports.SceneNodeWidget = SceneNodeWidget;
//# sourceMappingURL=widgets.js.map