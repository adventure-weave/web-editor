import {
    DefaultNodeModel
} from 'storm-react-diagrams'
import * as _ from "lodash";

export class SceneNodeModel extends DefaultNodeModel {
    
    content: string;
    
    constructor(name: string = 'Scene title', color: string = 'rgb(0,192,255)', content?: string) {
        super(name, color);
        this.nodeType = 'story'
        if (content === undefined) {
            this.content = `Placeholder content for **${this.name}**`
        }
    }

    deSerialize(object){
		super.deSerialize(object)
		this.content = object.content
	}
	
	serialize(){
		return _.merge(super.serialize(), {
			content: this.content
		});
	}
}