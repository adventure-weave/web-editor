import * as React from 'react'

export const DefaultEditableHeader = ({node, beingEdited, onToggleEdit}) => {
    return (
        <div className='title'>
            <span className='name'>
                <b>ID:</b> {node.name}
            </span>
            <span className={'btn btn-default btn-sm glyphicon glyphicon-pencil' + (beingEdited ? ' active' : '')}
            onClick={onToggleEdit} />
            <span className='btn btn-default btn-sm glyphicon glyphicon-remove-sign' onClick={node.remove} />
        </div>
    )
}