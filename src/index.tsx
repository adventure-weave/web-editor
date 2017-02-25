import * as React from 'react'
import * as ReactDOM from 'react-dom'

import * as SRD from 'storm-react-diagrams'

import {StoryNodeModel} from './models/node_models'
import {StoryNodeFactory} from './factories/view_factories'

window.onload = () => {
    var engine = new SRD.DiagramEngine()
    engine.registerNodeFactory(new SRD.DefaultNodeFactory())
    engine.registerNodeFactory(StoryNodeFactory)
    engine.registerLinkFactory(new SRD.DefaultLinkFactory())

    var model = engine.getDiagramModel()
    console.log(model)
    
    var node = new StoryNodeModel()
    node.extras = {
        name: 'butts, lol',
        outPorts: ['out.1']
    }
    node.x = 100;
    node.y = 120;

    var port = node.addPort(new SRD.PortModel('out.1'))

    model.addNode(node)

    ReactDOM.render(<SRD.DiagramWidget diagramEngine={engine} />, document.getElementById('app_container'))
}
