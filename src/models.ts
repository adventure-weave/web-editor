import {
    NodeModel,
    PortModel
} from 'storm-react-diagrams'
import * as _ from "lodash";

export class SceneNodeModel extends NodeModel {
    
    content: string
    ports: {[s: string]: ChoicePortModel}
    name: string

    
    constructor(name: string = 'Scene title', content?: string) {
        super('story')
        this.name = name
        if (content === undefined) {
            this.content = `Placeholder content for **${this.name}**`
        }
    }

    deSerialize(object){
		super.deSerialize(object)
		this.content = object.content
        this.name = object.name
	}
	
	serialize(){
		return _.merge(super.serialize(), {
			content: this.content,
            name: this.name
		});
	}
}

export class ChoicePortModel extends PortModel {
    
    constructor(idx: number = 0, name?: string) {
        name = name || `Choice #${idx} placeholder`

        super(name)
    }
}