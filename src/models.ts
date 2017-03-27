import {
    NodeModel,
    PortModel
} from 'storm-react-diagrams'
import * as _ from "lodash";

export class SceneNodeModel extends NodeModel {
    
    content: any
    inPort: PortModel
    choices: {[s: string]: ChoicePortModel}
    name: string

    
    constructor(name: string = 'Scene title', content?: any) {
        super('story')
        this.name = name
        this.choices = {}

        if (content === undefined) {
            this.content = `Placeholder content for **${this.name}**`
        }
    }

    addPort(port: PortModel) {
        port = super.addPort(port)
        if (port instanceof ChoicePortModel) {
            this.choices[port.name] = port
        } else {
            this.inPort = port
        }
        console.log('choiceset:', this.choices)
        return port
    }

    removePort(port: PortModel) {
        if (port instanceof ChoicePortModel) {
            delete this.choices[port.name]
        }
        super.removePort(port)
    }

    deSerialize(object) {
		super.deSerialize(object)
		this.content = object.content
        this.name = object.name
        this.inPort = this.inPort.deSerialize()
	}
	
	serialize() {
		return _.merge(super.serialize(), {
			content: this.content,
            name: this.name,
            inPort: this.inPort.serialize()
		});
	}
}

export class ChoicePortModel extends PortModel {
    
    constructor(idx: number = 0, name?: string) {
        name = name || `Choice #${idx} placeholder`

        super(name)
    }
}