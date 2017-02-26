import {
    DefaultNodeWidget,
	DefaultNodeState,
    DefaultPortLabel,
	DiagramEngine
} from 'storm-react-diagrams'
import * as _ from 'lodash'
import * as React from 'react'

import {SceneNodeModel} from './models'

var div = React.DOM.div

export interface SceneNodeProps {
	node: SceneNodeModel,
	diagramEngine: DiagramEngine
}

export class SceneNodeWidget extends React.Component<SceneNodeProps, DefaultNodeState> {

	public static defaultProps: SceneNodeProps = {
		node: null,
		diagramEngine: null
	};

	constructor(props: SceneNodeProps) {
		super(props)
		console.log(props.node)
		console.log(props.node.content)
	}
    render() {
		let node = this.props.node
		
		return (
			div({className: 'basic-node story-node', style: {background: node.color }},
				div({className:'title'},
					div({className:'name'}, node.name),
					div({className: 'fa fa-close', onClick: node.remove})
				),
				div({className: 'content'}, node.content),
				div({className:'ports'},
					div({className: 'in'}, _.map(node.getInPorts(),(port) => {
						return React.createElement(DefaultPortLabel,{model: port});
					})),
					div({className: 'out'}, _.map(node.getOutPorts(),(port) => {
						return React.createElement(DefaultPortLabel,{model: port});
					})),
				)
			)
		);
	}
}