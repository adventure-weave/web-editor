import {
    NodeModel,
    PortModel
} from 'storm-react-diagrams'
import * as _ from "lodash";

export class SceneNodeModel extends NodeModel {
    
    content: any
    inPort: PortModel
    ports: {[s: string]: ChoicePortModel}
    name: string

    
    constructor(name: string = 'Scene title', content?: any) {
        super('story')
        this.name = name
        this.inPort = new PortModel('In')
        this.inPort.setParentNode(this)
        if (content === undefined) {
            this.content = `Placeholder content for **${this.name}**`
        }
    }

    deSerialize(object){
		super.deSerialize(object)
		this.content = object.content
        this.name = object.name
        this.inPort = this.inPort.deSerialize()
	}
	
	serialize(){
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