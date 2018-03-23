import React from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {selectTool, showDesc} from "../actions/ActionTool";
import CodeTool from "./CodeTool";

const ListTool = ({showDesc, selectTool}) => ({
    openDescription(e) {
        if (e) {
            selectTool(e);
            showDesc();
            this.disableAll()
        }
    },
    disableAll() {
        console.log('test')
    },

    render() {
        console.log(this.props.See);

        return (
            <div className="ListTools ">
                {this.props.Tool.map((tool, index) =>
                    <section className="newTool" key={index}>
                        <button onClick={this.openDescription.bind(this, tool.id)}>
                            <i className="material-icons">exit_to_app</i>More
                        </button>
                        <h4>{tool.data.title}</h4>
                        <p>{tool.data.category}</p>
                        <div className="desc">
                            <code>{tool.data.description}</code>
                        </div>
                    </section>
                )}
                {this.props.See && <CodeTool/>}
            </div>
        )
    }
});

function mapStateToProps(state) {
    return {
        Tool: state.ToolReducer.Tool,
        See: state.SeeCodeReducer,
        ActualTool: state.ToolReducer.ActualTool
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({showDesc, selectTool}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ListTool)