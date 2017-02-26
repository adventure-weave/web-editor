import * as React from 'react'
import * as ReactDOM from 'react-dom'

import * as SRD from 'storm-react-diagrams'

import {SceneNodeModel} from './models'
import {SceneNodeFactory} from './factories'


window.onload = () => {
    var engine = new SRD.DiagramEngine()
    // engine.registerNodeFactory(new SRD.DefaultNodeFactory())
    engine.registerNodeFactory( new SceneNodeFactory())
    engine.registerLinkFactory(new SRD.DefaultLinkFactory())

    var model = engine.getDiagramModel()
    console.log(model)
    
    var node = new SceneNodeModel('Scene one!')
    node.x = 100;
    node.y = 120;

    // var port = node.addPort(new SRD.PortModel('out.1'))

    model.addNode(node)

    ReactDOM.render(<SRD.DiagramWidget diagramEngine={engine} />, document.getElementById('app_container'))
}
