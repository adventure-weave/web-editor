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
        return (
            <SRD.DiagramWidget diagramEngine={this.props.engine} />
        )
    }
}

window.onload = () => {
    //this will trigger a repaint
    var engine = new SRD.DiagramEngine()
    var model = engine.getDiagramModel()

    var node = new SceneNodeModel('Scene one!')
    node.x = 100;
    node.y = 120;

    model.addNode(node)

    console.log('nodemodel:', node.constructor.name)

    ReactDOM.render((<div className="container-fluid">
        <div className="navbar-header">
            <a className="navbar-brand" href="#">
                Adventure Weave
            </a>
        </div>
        <ul className="nav navbar-nav navbar-right">
            <li>
                <a className='btn btn-default'>
                <span className='glyphicon glyphicon-plus'></span>
                </a>
            </li>
            <li role="separator" className="divider"></li>
            <li>
                <a className='btn btn-default'>
                <span className='glyphicon glyphicon-floppy-disk'></span>
                </a>
            </li>
        </ul>
    </div>
    )
    , document.getElementById('topnav'))
    ReactDOM.render(React.createElement(ParentWrapper,{engine: engine}), document.getElementById('app_container'))
}
