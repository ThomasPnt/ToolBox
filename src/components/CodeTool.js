import React from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {hideDesc} from "../actions/ActionTool";

class CodeTool extends React.Component {
    close(e) {
        e.preventDefault();
        this.props.hideDesc();
    }

    render() {
        return (
            <div className="codeModal">
                <section>
                    <h3>Description</h3>
                    <a onClick={this.close.bind(this)}>&times;</a>
                    {this.props.actual.map((tool, index) =>
                        <div key={index}>
                            <p>{tool.data.code}</p>
                        </div>
                    )}
                </section>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {actual: state.ToolReducer.ActualTool}
}


function mapDispatchToProps(dispatch) {
    return bindActionCreators({hideDesc}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CodeTool);