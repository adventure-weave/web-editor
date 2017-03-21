import * as React from 'react'
import {
    PortWidget,
    DefaultPortLabelState
} from 'storm-react-diagrams'

import {
    BasicChoiceLabelProps,
} from '../interfaces'

var div = React.DOM.div,
    span = React.DOM.span

export class ChoicePortWidget extends React.Component<BasicChoiceLabelProps, DefaultPortLabelState> {

	public static defaultProps: BasicChoiceLabelProps = {
        model: null,
        updateCanvas: () => {}
	};

	render() {
		var model = this.props.model
		var port = React.createElement(PortWidget, {name: model.name, node: model.getParent()})
		var label = React.DOM.div({className: 'name'}, model.name)

		return React.DOM.div({className: 'out-port'},
            span({
                className: 'btn btn-default btn-sm glyphicon glyphicon-minus',
                onClick: () => {
                    model.parentNode.removePort(model);
                    this.props.updateCanvas();
                }
            }),
            label,
			port,
		);
	}
}
