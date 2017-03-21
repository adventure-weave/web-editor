import * as React from 'react'
import {markdown_previewer} from '../../content_previewers'

const MarkdownViewer = ({content}) => {
    return (
    <div className='content' dangerouslySetInnerHTML={{__html: markdown_previewer(content)}} />
    )
}

const BasicEditor = ({content, onChange}) => {
    return <textarea value={content} onChange={onChange} />
}

export const EditableMarkdownContent = ({beingEdited, node, onChange}) => {
    return (
        <div className='content-bar'>
            {beingEdited ? <BasicEditor content={node.content} onChange={onChange} /> : <MarkdownViewer content={node.content} />}
        </div>
    )
}