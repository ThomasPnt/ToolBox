import React from 'react';
import {connect} from "react-redux";
import {addCategory, hideAddCategory, showAddCategory} from "../actions/ActionTool";
import {bindActionCreators} from "redux";


class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tool: ''
        }
    }

    handleChange(event) {
        this.setState({tool: event.target.value})
    }

    handleSubmit(event) {
        event.preventDefault();
        var data = this.state.tool;
        this.props.addCategory(data);
        this.props.hideAddCategory();
        this.setState({tool: ""});
    }

    render() {
        return (
            <div className="header">
                <h2>ToolBox</h2>
                <button className="btn btn-primary" onClick={this.props.showAddCategory}>Add Category</button>
                {
                    this.props.Add &&
                    <form className="form-inline" onSubmit={this.handleSubmit.bind(this)}>
                        <input className="form-control col-sm-2" type="text" value={this.state.tool} onChange={this.handleChange.bind(this)} placeholder="New Category"/>
                        <input className="btn btn-primary" type="submit"/>
                    </form>
                }
                <input type="search"/>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({addCategory, showAddCategory , hideAddCategory }, dispatch)
}

function mapStateToProps(state) {
    console.log(state);
    return {
        CategoryReducer: state.CategoryReducer,
        Add: state.AddingCategory
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);