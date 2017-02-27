import {
    DefaultNodeWidget,
    DefaultNodeState,
    DefaultPortLabel,
    DefaultPortLabelState,
    DiagramEngine,
    PortWidget
} from 'storm-react-diagrams'
import * as _ from 'lodash'
import * as React from 'react'

import {
    SceneNodeModel,
    ChoicePortModel
} from './models'
import {markdown_previewer} from './content_previewers'

var div = React.DOM.div,
    span = React.DOM.span,
    textarea = React.DOM.textarea,
    b = React.DOM.b

export interface SceneNodeProps {
    node: SceneNodeModel,
    diagramEngine: DiagramEngine
}

export interface SceneNodeState {
    beingEdited: boolean,
    content: string
}

export interface BasicChoiceLabelProps {
    model: ChoicePortModel
}

export class SceneNodeWidget extends React.Component<SceneNodeProps, SceneNodeState> {

    public static defaultProps: SceneNodeProps = {
        node: null,
        diagramEngine: null
    };

    public static defaultState: SceneNodeState = {
        beingEdited: false,
        content: ''
    }

    previewer: any

    constructor(props: SceneNodeProps) {
        super(props)
        this.state = SceneNodeWidget.defaultState
        this.state.content = props.node.content
        this.previewer = markdown_previewer
        this.toggleEdit = this.toggleEdit.bind(this)
        this.editContent = this.editContent.bind(this)
    }

    toggleEdit() {
        this.setState({beingEdited: !this.state.beingEdited})
    }

    editContent(evt) {
        this.props.node.content = evt.target.value
        this.setState({content: evt.target.value})
    }

    render() {
        let node = this.props.node
        
        return (
            div({className: 'basic-node story-node', style: {background: node.color }},
                div({className:'title'},
                    span({className:'name'}, b({}, 'Id: '), node.name),
                    span({
                        className: 'btn btn-default btn-sm glyphicon glyphicon-pencil' + (this.state.beingEdited ? ' active' : ''),
                        onClick: this.toggleEdit
                    }),
                    span({className: 'btn btn-default btn-sm glyphicon glyphicon-remove-sign', onClick: node.remove}),
                ),
                div({className: 'content-bar'},
                ),
                this.state.beingEdited || div({className: 'content', dangerouslySetInnerHTML: {__html: this.previewer(node.content)}}),
                !this.state.beingEdited || textarea({value: this.state.content, onChange: this.editContent}),
                div({className:'title'},
                    span({className: 'name'}, 'Choices:'),
                    span({
                        className: 'btn btn-default btn-sm glyphicon glyphicon-plus',
                        onClick: () => this.props.node.addPort(new ChoicePortModel(Object.keys(node.ports).length))
                    })
                ),
                div({className:'ports'},
                    div({className: 'out'}, _.map(node.ports, (port) => {
                        return React.createElement(ChoicePortWidget, {model: port});
                    })),
                )
            )
        );
    }
}

export class ChoicePortWidget extends React.Component<BasicChoiceLabelProps, DefaultPortLabelState> {

	public static defaultProps: BasicChoiceLabelProps = {
        model: null
	};

	render() {
		var model = this.props.model
		var port = React.createElement(PortWidget, {name: model.name, node: model.getParent()})
		var label = React.DOM.div({className: 'name'}, model.name)
		
		return React.DOM.div({className: 'out-port'},
            span({
                className: 'btn btn-default btn-sm glyphicon glyphicon-minus',
                onClick: () => model.parentNode.removePort(model)
            }),
            label,
			port,
		);
	}
}