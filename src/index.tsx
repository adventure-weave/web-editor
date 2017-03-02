import * as React from 'react'
import * as ReactDOM from 'react-dom'

import * as SRD from 'storm-react-diagrams'

import {SceneNodeModel} from './models'
import {SceneNodeFactory} from './factories'

class ParentWrapper extends React.Component<any, any>{

    constructor(props) {
        super(props);
        props.engine.registerNodeFactory(new SceneNodeFactory('story', () => {
            this.forceUpdate();
        }))
        props.engine.registerLinkFactory(new SRD.DefaultLinkFactory())
    }

    render(){
        return <SRD.DiagramWidget diagramEngine={this.props.engine} />;
    }
}

window.onload = () => {
    //this will trigger a repaint
    var engine = new SRD.DiagramEngine()


    var model = engine.getDiagramModel()
    console.log(model)

    var node = new SceneNodeModel('Scene one!')
    node.x = 100;
    node.y = 120;

    // var port = node.addPort(new SRD.PortModel('out.1'))

    model.addNode(node)


    ReactDOM.render(React.createElement(ParentWrapper,{engine: engine}), document.getElementById('app_container'))
}
