import React from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {addTool, hideAddTool} from "../actions/ActionTool";

class NewTool extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            category: '',
            code: ''
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        if(this.state.category === ""){
            console.log("Nope")
        } else {
            console.log(this.state);
            this.props.hideAddTool();
            this.props.addTool(this.state);
        }

    }

    handleChangeTitle(event) {
        this.setState({title: event.target.value})
    }

    handleChangeCode(event) {
        this.setState({code: event.target.value})
    }

    handleChangeCat(event) {
        this.setState({category: event.target.value})
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input name="title" type="text" onChange={this.handleChangeTitle.bind(this)}/>
                    <select name="category" value={this.state.category} onChange={this.handleChangeCat.bind(this)}>
                        <option defaultValue="">Choose a Category</option>
                        {this.props.Category.map((cat) =>
                            <option key={cat.id} value={cat.name}>
                                {cat.name}
                            </option>
                        )}
                    </select>
                    <textarea name="code" cols="30" rows="10" onChange={this.handleChangeCode.bind(this)}></textarea>
                    <input className="btn btn-primary" type="submit"/>
                </form>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({hideAddTool, addTool}, dispatch)
}

function mapStateToProps(state) {
    return {
        Tool: state.ToolReducer,
        Category: state.CategoryReducer
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewTool)