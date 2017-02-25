"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var storm_react_diagrams_1 = require("storm-react-diagrams");
var node_views_1 = require("../views/node_views");
var GenericNodeFactory = (function (_super) {
    __extends(GenericNodeFactory, _super);
    function GenericNodeFactory(type, widgetClass, generationFunc) {
        var _this = _super.call(this, type) || this;
        _this.widgetClass = widgetClass;
        _this.generationFunc = generationFunc;
        return _this;
    }
    GenericNodeFactory.prototype.generateReactWidget = function (diagramEngine, node) {
        return React.createElement(this.widgetClass, this.generationFunc(node, diagramEngine));
    };
    return GenericNodeFactory;
}(storm_react_diagrams_1.NodeWidgetFactory));
exports.GenericNodeFactory = GenericNodeFactory;
exports.defaultGenerationFunction = function (node, engine) {
    return {
        node: node,
        diagramEngine: engine,
        color: node.extras['color'],
        name: node.extras['name'],
        inPorts: node.extras['inPorts'],
        outPorts: node.extras['outPorts'],
    };
};
exports.simpleGenerationFunction = function (node, engine) {
    return { node: node };
};
exports.StoryNodeFactory = new GenericNodeFactory('story', node_views_1.SimpleNodeWidget, exports.simpleGenerationFunction);
//# sourceMappingURL=view_factories.js.map