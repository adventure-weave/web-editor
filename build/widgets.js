"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var storm_react_diagrams_1 = require("storm-react-diagrams");
var _ = require("lodash");
var React = require("react");
var models_1 = require("./models");
var content_previewers_1 = require("./content_previewers");
var div = React.DOM.div, span = React.DOM.span, textarea = React.DOM.textarea, b = React.DOM.b;
var SceneNodeWidget = (function (_super) {
    __extends(SceneNodeWidget, _super);
    function SceneNodeWidget(props) {
        var _this = _super.call(this, props) || this;
        _this.state = SceneNodeWidget.defaultState;
        _this.state.content = props.node.content;
        _this.previewer = content_previewers_1.markdown_previewer;
        _this.toggleEdit = _this.toggleEdit.bind(_this);
        _this.editContent = _this.editContent.bind(_this);
        return _this;
    }
    SceneNodeWidget.prototype.toggleEdit = function () {
        this.setState({ beingEdited: !this.state.beingEdited });
    };
    SceneNodeWidget.prototype.editContent = function (evt) {
        this.props.node.content = evt.target.value;
        this.setState({ content: evt.target.value });
    };
    SceneNodeWidget.prototype.render = function () {
        var _this = this;
        var node = this.props.node;
        return (div({ className: 'basic-node story-node', style: { background: node.color } }, div({ className: 'title' }, span({ className: 'name' }, b({}, 'Id: '), node.name), span({
            className: 'btn btn-default btn-sm glyphicon glyphicon-pencil' + (this.state.beingEdited ? ' active' : ''),
            onClick: this.toggleEdit
        }), span({ className: 'btn btn-default btn-sm glyphicon glyphicon-remove-sign', onClick: node.remove })), div({ className: 'content-bar' }), this.state.beingEdited || div({ className: 'content', dangerouslySetInnerHTML: { __html: this.previewer(node.content) } }), !this.state.beingEdited || textarea({ value: this.state.content, onChange: this.editContent }), div({ className: 'title' }, span({ className: 'name' }, 'Choices:'), span({
            className: 'btn btn-default btn-sm glyphicon glyphicon-plus',
            onClick: function () { return _this.props.node.addPort(new models_1.ChoicePortModel(Object.keys(node.ports).length)); }
        })), div({ className: 'ports' }, div({ className: 'out' }, _.map(node.ports, function (port) {
            return React.createElement(ChoicePortWidget, { model: port });
        })))));
    };
    return SceneNodeWidget;
}(React.Component));
SceneNodeWidget.defaultProps = {
    node: null,
    diagramEngine: null
};
SceneNodeWidget.defaultState = {
    beingEdited: false,
    content: ''
};
exports.SceneNodeWidget = SceneNodeWidget;
var ChoicePortWidget = (function (_super) {
    __extends(ChoicePortWidget, _super);
    function ChoicePortWidget() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ChoicePortWidget.prototype.render = function () {
        var model = this.props.model;
        var port = React.createElement(storm_react_diagrams_1.PortWidget, { name: model.name, node: model.getParent() });
        var label = React.DOM.div({ className: 'name' }, model.name);
        return React.DOM.div({ className: 'out-port' }, span({
            className: 'btn btn-default btn-sm glyphicon glyphicon-minus',
            onClick: function () { return model.parentNode.removePort(model); }
        }), label, port);
    };
    return ChoicePortWidget;
}(React.Component));
ChoicePortWidget.defaultProps = {
    model: null
};
exports.ChoicePortWidget = ChoicePortWidget;
//# sourceMappingURL=widgets.js.map