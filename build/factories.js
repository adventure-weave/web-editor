"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var storm_react_diagrams_1 = require("storm-react-diagrams");
var widgets_1 = require("./widgets");
var React = require("react");
var SceneNodeFactory = (function (_super) {
    __extends(SceneNodeFactory, _super);
    function SceneNodeFactory(nodeType) {
        if (nodeType === void 0) { nodeType = 'story'; }
        return _super.call(this, nodeType) || this;
    }
    SceneNodeFactory.prototype.generateReactWidget = function (diagramEngine, node) {
        return React.createElement(widgets_1.SceneNodeWidget, {
            node: node,
            diagramEngine: diagramEngine
        });
    };
    return SceneNodeFactory;
}(storm_react_diagrams_1.NodeWidgetFactory));
exports.SceneNodeFactory = SceneNodeFactory;
//# sourceMappingURL=factories.js.map