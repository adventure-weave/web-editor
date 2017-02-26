"use strict";
var React = require("react");
var ReactDOM = require("react-dom");
var SRD = require("storm-react-diagrams");
var models_1 = require("./models");
var factories_1 = require("./factories");
window.onload = function () {
    var engine = new SRD.DiagramEngine();
    // engine.registerNodeFactory(new SRD.DefaultNodeFactory())
    engine.registerNodeFactory(new factories_1.SceneNodeFactory());
    engine.registerLinkFactory(new SRD.DefaultLinkFactory());
    var model = engine.getDiagramModel();
    console.log(model);
    var node = new models_1.SceneNodeModel('Scene one!');
    node.x = 100;
    node.y = 120;
    // var port = node.addPort(new SRD.PortModel('out.1'))
    model.addNode(node);
    ReactDOM.render(React.createElement(SRD.DiagramWidget, { diagramEngine: engine }), document.getElementById('app_container'));
};
//# sourceMappingURL=index.js.map