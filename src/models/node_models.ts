import {NodeModel} from 'storm-react-diagrams';

export class StoryNodeModel extends NodeModel {
    
    content: string
    
    constructor() {
        super()
        this.nodeType = 'story'
        this.content = 'Edit me'
    }
}