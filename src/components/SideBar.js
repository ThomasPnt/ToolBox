import React from 'react';
import {connect} from "react-redux";
import {Link} from 'react-router-dom';
import {addCategory, hideAddCategory} from "../actions/ActionTool";
import {bindActionCreators} from "redux";
import {actualCategory} from "../actions/ActionCategory";

class SideBar extends React.Component {
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

    actualChange(event) {
        event.preventDefault();
        var data = document.location.pathname.substr(document.location.pathname.lastIndexOf('/') + 1);
        console.log(data);
        this.props.actualCategory(data);
    }

    resetChange(event){
        event.preventDefault();
        var data = "All Category";
        this.props.actualCategory(data);
    }


    render() {
        return (
            <div>
                {
                    this.props.Add &&
                    <form className="form-inline" onSubmit={this.handleSubmit.bind(this)}>
                        <input className="form-control col-sm-2" type="text" value={this.state.tool}
                               onChange={this.handleChange.bind(this)} placeholder="New Category"/>
                        <input className="btn btn-primary" type="submit"/>
                    </form>
                }
                <ul>
                    <li onClick={this.resetChange.bind(this)}><Link to="/">ALL CATEGORY</Link></li>
                    <ul>
                    {this.props.category.map((category) =>
                        <li key={category.id} onClick={this.actualChange.bind(this)}>
                            <Link to={`/tool/${category.name}`}>
                                  {category.name}
                            </Link>
                        </li>
                        )}
                    </ul>
                </ul>
            </div>
        )
    }
}


function mapDispatchToProps(dispatch) {
    return bindActionCreators({addCategory, hideAddCategory, actualCategory}, dispatch)
}

function mapStateToProps(state) {
    return {
        category: state.CategoryReducer,
        Add: state.AddingCategory,
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(SideBar)