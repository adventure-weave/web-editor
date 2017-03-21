import * as React from 'react'
import {DefaultPortLabel} from 'storm-react-diagrams'

import {ChoicePortWidget} from '../ChoicePortWidget'

export const ChoicePortArea = ({node, inPort, outPorts, onClickAdd, updateCanvas}) => {
    return (
        <div>
            <div className='title'>
                <span className='name'>Choices:</span>
                <span className='btn btn-default btn-sm glyphicon glyphicon-plus' onClick={onClickAdd} />
            </div>
            <div className='ports'>
                <div className='in'>
                    <DefaultPortLabel model={inPort} />
                </div>
                <div className='out'>
                    {Object.keys(outPorts).map(portName => {
                        let port = outPorts[portName]
                        return <ChoicePortWidget model={port} updateCanvas={updateCanvas} key={port.id} />
                    })}
                </div>
            </div>
        </div>
    )
}