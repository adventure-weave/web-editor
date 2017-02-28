import {
    DefaultNodeProps,
    DiagramEngine,
    NodeModel,
    NodeWidgetFactory,
} from 'storm-react-diagrams'
import {SceneNodeModel} from './models'
import {SceneNodeWidget} from './widgets'

import * as React from "react"

export class SceneNodeFactory extends NodeWidgetFactory {

    cb;

    constructor(nodeType: string = 'story',updateCanvas: () => any) {
        super(nodeType)
        this.cb = updateCanvas;
    }

    generateReactWidget(diagramEngine: DiagramEngine, node: SceneNodeModel): JSX.Element{
		return React.createElement(SceneNodeWidget, {
			node: node,
			diagramEngine: diagramEngine,
            updateCanvas: this.cb
		});
	}
}
