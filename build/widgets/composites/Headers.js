"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
exports.DefaultEditableHeader = function (_a) {
    var node = _a.node, beingEdited = _a.beingEdited, onToggleEdit = _a.onToggleEdit;
    return (React.createElement("div", { className: 'title' },
        React.createElement("span", { className: 'name' },
            React.createElement("b", null, "ID:"),
            " ",
            node.name),
        React.createElement("span", { className: 'btn btn-default btn-sm glyphicon glyphicon-pencil' + (beingEdited ? ' active' : ''), onClick: onToggleEdit }),
        React.createElement("span", { className: 'btn btn-default btn-sm glyphicon glyphicon-remove-sign', onClick: node.remove })));
};
//# sourceMappingURL=Headers.js.map