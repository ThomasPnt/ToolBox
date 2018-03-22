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
        showDesc();
        selectTool(data);
    },

    //Creer un Reducer pour Gerer le state en true ou false si le boutton est cliqué et ensuite passez au component qui va servir de modal, la valeur de description!
    //SeeCodeReducer.js
    //<CodeTool description=tool.data.code/>


    render() {
        console.log(this.props.See);
        console.log(this.props.ActualTool);

        return (
            <div className="ListTools">
                {this.props.Tool.map((tool) =>
                    <section className="newTool" key={tool.id}>
                        <Link to={`/tool/${tool.id}`}>
                            <button onClick={this.openDescription}><i className="material-icons">exit_to_app</i>More
                            </button>
                        </Link>
                        <h4>{tool.data.title}</h4>
                        <p>{tool.data.category}</p>
                        <div className="desc">
                            <code>{tool.data.description}</code>
                        </div>
                    </section>
                )}
                {this.props.See && <CodeTool description={this.props.ActualTool}/>}
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