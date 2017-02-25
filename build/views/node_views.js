"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var storm_react_diagrams_1 = require("storm-react-diagrams");
var SimpleNodeWidget = (function (_super) {
    __extends(SimpleNodeWidget, _super);
    function SimpleNodeWidget(props) {
        var _this = this;
        for (var attr in SimpleNodeWidget.defaultProps) {
            if (!props.node.extras.hasOwnProperty(attr)) {
                console.warn('Node is missing a vital prop:', attr);
            }
            props.node.extras[attr] = props.node.extras[attr] || SimpleNodeWidget.defaultProps[attr];
        }
        _this = _super.call(this, props) || this;
        _this.state = {};
        return _this;
    }
    SimpleNodeWidget.prototype.render = function () {
        var _this = this;
        var extras = this.props.node.extras;
        var color = extras.color || SimpleNodeWidget.defaultProps.color;
        var name = extras.name || SimpleNodeWidget.defaultProps.name;
        var div = React.DOM.div;
        return (div({ className: 'basic-node', style: { background: color } }, div({ className: 'title' }, div({ className: 'name' }, extras.name), div({ className: 'fa fa-close', onClick: this.props.node.remove })), div({ className: 'ports' }, div({ className: 'in' }, extras.inPorts.map(function (port) {
            var portName = "";
            var displayName = "";
            if (typeof port === 'object') {
                portName = port.name;
                displayName = port.display;
            }
            else {
                portName = port;
                displayName = port;
            }
            return div({ className: 'in-port', key: portName }, React.createElement(storm_react_diagrams_1.PortWidget, { name: portName, node: _this.props.node }), div({ className: 'name' }, displayName));
        })), div({ className: 'out' }, extras.outPorts.map(function (port) {
            var portName = "";
            var displayName = "";
            if (typeof port === 'object') {
                portName = port.name;
                displayName = port.display;
            }
            else {
                portName = port;
                displayName = port;
            }
            return div({ className: 'out-port', key: portName }, div({ className: 'name' }, displayName), React.createElement(storm_react_diagrams_1.PortWidget, { name: portName, node: _this.props.node }));
        })))));
    };
    return SimpleNodeWidget;
}(React.Component));
SimpleNodeWidget.defaultProps = {
    name: "Node",
    inPorts: [],
    outPorts: [],
    color: 'rgb(50,50,50)',
};
exports.SimpleNodeWidget = SimpleNodeWidget;
//# sourceMappingURL=node_views.js.map