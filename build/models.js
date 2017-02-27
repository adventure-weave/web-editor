"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var storm_react_diagrams_1 = require("storm-react-diagrams");
var _ = require("lodash");
var SceneNodeModel = (function (_super) {
    __extends(SceneNodeModel, _super);
    function SceneNodeModel(name, color, content) {
        if (name === void 0) { name = 'Scene title'; }
        if (color === void 0) { color = 'rgb(0,192,255)'; }
        var _this = _super.call(this, name, color) || this;
        _this.nodeType = 'story';
        if (content === undefined) {
            _this.content = "Placeholder content for **" + _this.name + "**";
        }
        return _this;
    }
    SceneNodeModel.prototype.deSerialize = function (object) {
        _super.prototype.deSerialize.call(this, object);
        this.content = object.content;
    };
    SceneNodeModel.prototype.serialize = function () {
        return _.merge(_super.prototype.serialize.call(this), {
            content: this.content
        });
    };
    return SceneNodeModel;
}(storm_react_diagrams_1.DefaultNodeModel));
exports.SceneNodeModel = SceneNodeModel;
//# sourceMappingURL=models.js.map