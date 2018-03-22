import React from 'react';
import {connect} from "react-redux";

class CodeTool extends React.Component {
    //Doit etre styliser !

    render() {
        return (
            <div>
                <h3>Description</h3>
                {this.props.actual.map(tool =>
                    <p>{tool.data.code}</p>
                )}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {actual: state.ToolReducer.ActualTool}
}

export default connect(mapStateToProps, null)(CodeTool);