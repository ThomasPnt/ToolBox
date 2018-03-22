import React from 'react';

export default class CodeTool extends React.Component {
    render() {
        return (
            <div>
                <h3>Description</h3>
                {this.props.description}
            </div>
        )
    }
}