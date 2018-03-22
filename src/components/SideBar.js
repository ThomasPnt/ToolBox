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
        if(data.trim() !== ""){
            this.props.addCategory(data);
            this.props.hideAddCategory();
        }
        this.setState({tool: ""});
    }

    actualChange(event) {
        event.preventDefault();
        var data = document.location.pathname.substr(document.location.pathname.lastIndexOf('/') + 1);
        console.log(data);
        if(data.trim() !== "") {
            this.props.actualCategory(data);
        }
    }

    resetChange(event){
        event.preventDefault();
        var data = "All Category";
        this.props.actualCategory(data);
    }


    render() {
        return (
            <div className="sidebar" id="style-1">
                {
                    this.props.Add &&
                    <form onSubmit={this.handleSubmit.bind(this)}>
                        <input className="inputext" type="text" value={this.state.tool}
                               onChange={this.handleChange.bind(this)} placeholder="New Category"/>
                        <input className="inputsubmit" type="submit"/>
                    </form>
                }
                <ul>
                    <li onClick={this.resetChange.bind(this)}><Link to="/">ALL CATEGORY</Link></li>
                    {this.props.category.map((category) =>
                        <li key={category.id} onClick={this.actualChange.bind(this)}>
                            <Link to={`/category/${category.name}`}>
                                  {category.name}
                            </Link>
                        </li>
                        )}
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