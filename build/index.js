"use strict";
var React = require("react");
var ReactDOM = require("react-dom");
var SRD = require("storm-react-diagrams");
var node_models_1 = require("./models/node_models");
var view_factories_1 = require("./factories/view_factories");
window.onload = function () {
    var engine = new SRD.DiagramEngine();
    engine.registerNodeFactory(new SRD.DefaultNodeFactory());
    engine.registerNodeFactory(view_factories_1.StoryNodeFactory);
    engine.registerLinkFactory(new SRD.DefaultLinkFactory());
    var model = engine.getDiagramModel();
    console.log(model);
    var node = new node_models_1.StoryNodeModel();
    node.extras = {
        name: 'butts, lol',
        outPorts: ['out.1']
    };
    node.x = 100;
    node.y = 120;
    var port = node.addPort(new SRD.PortModel('out.1'));
    model.addNode(node);
    ReactDOM.render(React.createElement(SRD.DiagramWidget, { diagramEngine: engine }), document.getElementById('app_container'));
};
//# sourceMappingURL=index.js.map