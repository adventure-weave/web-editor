"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var storm_react_diagrams_1 = require("storm-react-diagrams");
var ChoicePortWidget_1 = require("../ChoicePortWidget");
exports.ChoicePortArea = function (_a) {
    var node = _a.node, inPort = _a.inPort, outPorts = _a.outPorts, onClickAdd = _a.onClickAdd, updateCanvas = _a.updateCanvas;
    return (React.createElement("div", null,
        React.createElement("div", { className: 'title' },
            React.createElement("span", { className: 'name' }, "Choices:"),
            React.createElement("span", { className: 'btn btn-default btn-sm glyphicon glyphicon-plus', onClick: onClickAdd })),
        React.createElement("div", { className: 'ports' },
            React.createElement("div", { className: 'in' },
                React.createElement(storm_react_diagrams_1.DefaultPortLabel, { model: inPort })),
            React.createElement("div", { className: 'out' }, Object.keys(outPorts).map(function (portName) {
                var port = outPorts[portName];
                return React.createElement(ChoicePortWidget_1.ChoicePortWidget, { model: port, updateCanvas: updateCanvas, key: port.id });
            })))));
};
//# sourceMappingURL=PortAreas.js.map