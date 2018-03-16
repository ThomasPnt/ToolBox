import React from 'react';
import {connect} from "react-redux";
import {addCategory, hideAddCategory, showAddCategory} from "../actions/ActionTool";
import {bindActionCreators} from "redux";


class Header extends React.Component {

    render() {
        return (
            <div className="header">
                <section className="title">
                    <h2>ToolBox</h2>
                </section>
                <section className="addcat">
                <button onClick={this.props.showAddCategory}>Add Category</button>
                    <h4>{this.props.Actual.actual ? this.props.Actual.actual : this.props.Actual}</h4>
                </section>
                <section className="search">
                    <input type="search"/>
                </section>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({addCategory, showAddCategory, hideAddCategory}, dispatch)
}

function mapStateToProps(state) {
    console.log(state);
    return {
        CategoryReducer: state.CategoryReducer,
        Add: state.AddingCategory,
        Actual: state.ActualCategoryReducer
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);