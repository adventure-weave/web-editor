import {DiagramEngine} from 'storm-react-diagrams'

import {
    SceneNodeModel,
    ChoicePortModel
} from './models'

export interface SceneNodeProps {
    node: SceneNodeModel,
    diagramEngine: DiagramEngine,
    updateCanvas: () => any
}

export interface SceneNodeState {
    beingEdited: boolean,
    content: any
}

export interface BasicChoiceLabelProps {
    model: ChoicePortModel,
    updateCanvas: () => any
}