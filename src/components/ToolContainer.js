import React from 'react';
import NewTool from "./NewTool";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {showAddTool} from "../actions/ActionTool";
import ListTool from "./ListTool";

class ToolContainer extends React.Component {
    render() {
        return (
            <div className="toolcontainer" id="scrollbar">
                <div className="headcontainer">
                    <h2>Tool</h2>
                    <button className="submit" onClick={this.props.showAddTool}>Add Tool</button>
                    {this.props.Add && <NewTool hide={this.props.hideAddTool}/>}
                </div>
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