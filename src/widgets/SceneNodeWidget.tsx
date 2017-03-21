import * as React from 'react'
import _ from 'lodash'
import {markdown_previewer} from '../content_previewers'

import {ChoicePortWidget} from './ChoicePortWidget'
import {
    SceneNodeProps,
    SceneNodeState
} from '../interfaces'
import {ChoicePortModel} from '../models'
import {
    DefaultEditableHeader,
    EditableMarkdownContent,
    ChoicePortArea
} from './composites'

export class SceneNodeWidget extends React.Component<SceneNodeProps, SceneNodeState> {

    public static defaultProps: SceneNodeProps = {
        node: null,
        diagramEngine: null,
        updateCanvas: () => {}
    };

    public static defaultState: SceneNodeState = {
        beingEdited: false,
        content: ''
    }

    protected header = DefaultEditableHeader
    protected contentArea = EditableMarkdownContent
    protected portArea = ChoicePortArea

    previewer: any

    constructor(props: SceneNodeProps) {
        super(props)
        this.state = SceneNodeWidget.defaultState
        this.state.content = props.node.content
        this.previewer = markdown_previewer
        this.toggleEdit = this.toggleEdit.bind(this)
        this.editContent = this.editContent.bind(this)
        this.addPort = this.addPort.bind(this)
    }

    toggleEdit() {
        this.setState({beingEdited: !this.state.beingEdited})
    }

    editContent(evt) {
        this.props.node.content = evt.target.value
        this.setState({content: evt.target.value})
    }

    addPort() {
        this.props.node.addPort(new ChoicePortModel(Object.keys(this.props.node.ports).length))
        this.props.updateCanvas()
    }

    render() {
        console.log('inport is:', this.props.node.inPort)
        return (
        <div className='basic-node story-node'>
            <this.header beingEdited={this.state.beingEdited} onToggleEdit={this.toggleEdit} node={this.props.node} />
            <this.contentArea node={this.props.node} beingEdited={this.state.beingEdited} onChange={this.editContent} />
            <this.portArea inPort={this.props.node.inPort} outPorts={this.props.node.ports}
            node={this.props.node}
            onClickAdd={this.addPort}
            updateCanvas={this.props.updateCanvas} />
        </div>
        )
    }
}