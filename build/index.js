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
var ReactDOM = require("react-dom");
var SRD = require("storm-react-diagrams");
var models_1 = require("./models");
var factories_1 = require("./factories");
var ParentWrapper = (function (_super) {
    __extends(ParentWrapper, _super);
    function ParentWrapper(props) {
        var _this = _super.call(this, props) || this;
        props.engine.registerNodeFactory(new factories_1.SceneNodeFactory('story', function () {
            _this.forceUpdate();
        }));
        props.engine.registerLinkFactory(new SRD.DefaultLinkFactory());
        return _this;
    }
    ParentWrapper.prototype.render = function () {
        return (React.createElement(SRD.DiagramWidget, { diagramEngine: this.props.engine }));
    };
    return ParentWrapper;
}(React.Component));
window.onload = function () {
    //this will trigger a repaint
    var engine = new SRD.DiagramEngine();
    var model = engine.getDiagramModel();
    var node = new models_1.SceneNodeModel('Scene one!');
    node.x = 100;
    node.y = 120;
    node.addPort(new SRD.PortModel('In'));
    model.addNode(node);
    console.log('nodemodel:', node.constructor.name);
    ReactDOM.render((React.createElement("div", { className: "container-fluid" },
        React.createElement("div", { className: "navbar-header" },
            React.createElement("a", { className: "navbar-brand", href: "#" }, "Adventure Weave")),
        React.createElement("ul", { className: "nav navbar-nav navbar-right" },
            React.createElement("li", null,
                React.createElement("a", { className: 'btn btn-default' },
                    React.createElement("span", { className: 'glyphicon glyphicon-plus' }))),
            React.createElement("li", { role: "separator", className: "divider" }),
            React.createElement("li", null,
                React.createElement("a", { className: 'btn btn-default' },
                    React.createElement("span", { className: 'glyphicon glyphicon-floppy-disk' })))))), document.getElementById('topnav'));
    ReactDOM.render(React.createElement(ParentWrapper, { engine: engine }), document.getElementById('app_container'));
};
//# sourceMappingURL=index.js.map