import React from 'react';
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {bindActionCreators} from "redux";
import {selectTool, showDesc} from "../actions/ActionTool";
import CodeTool from "./CodeTool";

const ListTool = ({showDesc,selectTool}) => ({
    openDescription() {
        var data = document.location.pathname.substr(document.location.pathname.lastIndexOf('/') + 1);
        console.log(data);
        selectTool(data);
        showDesc();
    },

    render() {
        console.log(this.props.See);

        return (
            <div className="ListTools">
                {this.props.Tool.map((tool) =>
                    <section className="newTool" key={tool.id}>
                        <Link to={`/tool/${tool.id}`} onClick={this.openDescription}>
                            <button><i className="material-icons">exit_to_app</i>More
                            </button>
                        </Link>
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
    return bindActionCreators({showDesc,selectTool},dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ListTool)