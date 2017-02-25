"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var storm_react_diagrams_1 = require("storm-react-diagrams");
var StoryNodeModel = (function (_super) {
    __extends(StoryNodeModel, _super);
    function StoryNodeModel() {
        var _this = _super.call(this) || this;
        _this.nodeType = 'story';
        _this.content = 'Edit me';
        return _this;
    }
    return StoryNodeModel;
}(storm_react_diagrams_1.NodeModel));
exports.StoryNodeModel = StoryNodeModel;
//# sourceMappingURL=node_models.js.map