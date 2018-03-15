import React from 'react';
import NewTool from "./NewTool";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {showAddTool} from "../actions/ActionTool";
import ListTool from "./ListTool";

class ToolContainer extends React.Component {
    render() {
        return (
            <div>
                <h2>Tool</h2>
                <button className="btn btn-primary" onClick={this.props.showAddTool}>Add Tool</button>
                {this.props.Add && <NewTool hide={this.props.hideAddTool}/>}
                <ListTool/>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({showAddTool}, dispatch)
}

function mapStateToProps(state) {
    return {
        Tool: state.ToolReducer,
        Add: state.AddingTool
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToolContainer);