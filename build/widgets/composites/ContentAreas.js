"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var content_previewers_1 = require("../../content_previewers");
var MarkdownViewer = function (_a) {
    var content = _a.content;
    return (React.createElement("div", { className: 'content', dangerouslySetInnerHTML: { __html: content_previewers_1.markdown_previewer(content) } }));
};
var BasicEditor = function (_a) {
    var content = _a.content, onChange = _a.onChange;
    return React.createElement("textarea", { value: content, onChange: onChange });
};
exports.EditableMarkdownContent = function (_a) {
    var beingEdited = _a.beingEdited, node = _a.node, onChange = _a.onChange;
    return (React.createElement("div", { className: 'content-bar' }, beingEdited ? React.createElement(BasicEditor, { content: node.content, onChange: onChange }) : React.createElement(MarkdownViewer, { content: node.content })));
};
//# sourceMappingURL=ContentAreas.js.map