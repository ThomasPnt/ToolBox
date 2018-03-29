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
                console.log(e)
            }
        },
        render() {
            console.log(this.props.See);
            if (this.props.Tool && this.props.Tool.length > 0) {
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
            } else if (this.props.filterCategory === "All Category") {
                return (
                    <div className="ListTools ">{
                        this.props.AllTool.map((tool, index) =>
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
            else {
                return (
                    <div className="ListTools">
                        <p id="noCard">No Card</p>
                    </div>
                )
            }
        }
    })
;

function mapStateToProps(state) {
    return {
        Tool: state.ToolReducer.Tool.filter(tool => tool.data.category === state.ToolReducer.filterCategory),
        AllTool: state.ToolReducer.Tool,
        See: state.SeeCodeReducer,
        ActualTool: state.ToolReducer.ActualTool,
        filterCategory: state.ToolReducer.filterCategory
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({showDesc, selectTool}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ListTool)