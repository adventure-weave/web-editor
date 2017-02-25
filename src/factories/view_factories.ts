import * as React from "react";
import {
    NodeModel,
    NodeWidgetFactory,
    DefaultNodeWidget,
    DiagramEngine} from "storm-react-diagrams";

import {SimpleNodeWidget} from '../views/node_views'

export interface nodeCallback {
    (node: NodeModel, engine: DiagramEngine): {}
}

export class GenericNodeFactory extends NodeWidgetFactory {
	
    widgetClass: React.ComponentClass<any>
    generationFunc: nodeCallback
	
    constructor(type: string, widgetClass: React.ComponentClass<any>, generationFunc: nodeCallback) {
		super(type);
        this.widgetClass = widgetClass
        this.generationFunc = generationFunc
	}
	
	generateReactWidget(diagramEngine:DiagramEngine,node: NodeModel): JSX.Element{
		return React.createElement(this.widgetClass, this.generationFunc(node, diagramEngine));
	}
}

export var defaultGenerationFunction: nodeCallback = (node: NodeModel, engine: DiagramEngine) => {
    return {
        node: node,
        diagramEngine: engine,
        color: node.extras['color'],
        name: node.extras['name'],
        inPorts: node.extras['inPorts'],
        outPorts: node.extras['outPorts'],
    }
}

export var simpleGenerationFunction: nodeCallback = (node: NodeModel, engine: DiagramEngine) => {
    return {node: node}
}

export var StoryNodeFactory = new GenericNodeFactory('story', SimpleNodeWidget, simpleGenerationFunction)