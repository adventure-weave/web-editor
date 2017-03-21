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
var storm_react_diagrams_1 = require("storm-react-diagrams");
var widgets_1 = require("./widgets");
var React = require("react");
var SceneNodeFactory = (function (_super) {
    __extends(SceneNodeFactory, _super);
    function SceneNodeFactory(nodeType, updateCanvas) {
        if (nodeType === void 0) { nodeType = 'story'; }
        var _this = _super.call(this, nodeType) || this;
        _this.cb = updateCanvas;
        return _this;
    }
    SceneNodeFactory.prototype.generateReactWidget = function (diagramEngine, node) {
        return React.createElement(widgets_1.SceneNodeWidget, {
            node: node,
            diagramEngine: diagramEngine,
            updateCanvas: this.cb
        });
    };
    return SceneNodeFactory;
}(storm_react_diagrams_1.NodeWidgetFactory));
exports.SceneNodeFactory = SceneNodeFactory;
//# sourceMappingURL=factories.js.map