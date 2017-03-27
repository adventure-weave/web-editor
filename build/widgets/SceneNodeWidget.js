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
var content_previewers_1 = require("../content_previewers");
var models_1 = require("../models");
var composites_1 = require("./composites");
var SceneNodeWidget = (function (_super) {
    __extends(SceneNodeWidget, _super);
    function SceneNodeWidget(props) {
        var _this = _super.call(this, props) || this;
        _this.header = composites_1.DefaultEditableHeader;
        _this.contentArea = composites_1.EditableMarkdownContent;
        _this.portArea = composites_1.ChoicePortArea;
        _this.state = SceneNodeWidget.defaultState;
        _this.state.content = props.node.content;
        _this.previewer = content_previewers_1.markdown_previewer;
        _this.toggleEdit = _this.toggleEdit.bind(_this);
        _this.editContent = _this.editContent.bind(_this);
        _this.addPort = _this.addPort.bind(_this);
        return _this;
    }
    SceneNodeWidget.prototype.toggleEdit = function () {
        this.setState({ beingEdited: !this.state.beingEdited });
    };
    SceneNodeWidget.prototype.editContent = function (evt) {
        this.props.node.content = evt.target.value;
        this.setState({ content: evt.target.value });
    };
    SceneNodeWidget.prototype.addPort = function () {
        this.props.node.addPort(new models_1.ChoicePortModel(Object.keys(this.props.node.ports).length));
        this.props.updateCanvas();
    };
    SceneNodeWidget.prototype.render = function () {
        return (React.createElement("div", { className: 'basic-node story-node' },
            React.createElement(this.header, { beingEdited: this.state.beingEdited, onToggleEdit: this.toggleEdit, node: this.props.node }),
            React.createElement(this.contentArea, { node: this.props.node, beingEdited: this.state.beingEdited, onChange: this.editContent }),
            React.createElement(this.portArea, { inPort: this.props.node.inPort, outPorts: this.props.node.choices, node: this.props.node, onClickAdd: this.addPort, updateCanvas: this.props.updateCanvas })));
    };
    return SceneNodeWidget;
}(React.Component));
SceneNodeWidget.defaultProps = {
    node: null,
    diagramEngine: null,
    updateCanvas: function () { }
};
SceneNodeWidget.defaultState = {
    beingEdited: false,
    content: ''
};
exports.SceneNodeWidget = SceneNodeWidget;
//# sourceMappingURL=SceneNodeWidget.js.map