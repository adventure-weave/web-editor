import * as React from 'react'
import {NodeModel, PortWidget, PortModel} from 'storm-react-diagrams'

export interface SimpleNodeProps {
    node: NodeModel
}

export interface SimpleNodeExtras {
    name: string,
    inPorts: Array<PortModel|string>,
    outPorts: Array<PortModel|string>,
    color?: string
}

export interface SimpleNodeState {}

export class SimpleNodeWidget extends React.Component<SimpleNodeProps, SimpleNodeState> {

	public static defaultProps: SimpleNodeExtras = {
		name: "Node",
		inPorts: [],
		outPorts: [],
		color: 'rgb(50,50,50)',
	};

	constructor(props: SimpleNodeProps) {
        for (let attr in SimpleNodeWidget.defaultProps) {
            if (!props.node.extras.hasOwnProperty(attr)) {
                console.warn('Node is missing a vital prop:', attr)
            }
            props.node.extras[attr] = props.node.extras[attr] || SimpleNodeWidget.defaultProps[attr];
        }
		super(props);
		this.state = {
		}
	}

	render() {
        let extras: SimpleNodeExtras = this.props.node.extras
        let color = extras.color || SimpleNodeWidget.defaultProps.color
        let name = extras.name || SimpleNodeWidget.defaultProps.name
        let div = React.DOM.div

		return (
			div({className:'basic-node', style: {background: color }},
				div({className: 'title'},
					div({className: 'name'}, extras.name),
					div({className: 'fa fa-close', onClick: this.props.node.remove})
				),
				div({className:'ports'},
					div({className:'in'}, extras.inPorts.map((port) => {
						var portName = "";
						var displayName = "";
						if(typeof port === 'object') {
							portName = port.name;
							displayName = port.display;
						} else {
							portName = port;
							displayName = port;
						}
						return div({className:'in-port',key: portName},
							React.createElement(PortWidget,{name:portName,node:this.props.node}),
							div({className:'name'},displayName)
						);
					})),
					div({className:'out'}, extras.outPorts.map((port) => {
						var portName = "";
						var displayName = "";
						if(typeof port === 'object') {
							portName = port.name;
							displayName = port.display;
						} else {
							portName = port;
							displayName = port;
						}
						return div({className:'out-port', key: portName},
							div({className:'name'}, displayName),
							React.createElement(PortWidget, {name: portName, node: this.props.node})
						);
					}))
				)
			)
		);
	}
}