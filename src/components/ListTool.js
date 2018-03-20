import React from 'react';
import {connect} from "react-redux";

const ListTool = () => ({
    openDescription(event){
        event.preventDefault();
        console.log(event.target.value);
    },

    //Creer un Reducer pour Gerer le state en true ou false si le boutton est cliqué et ensuite passez au component qui va servir de modal, la valeur de description!
    //SeeCodeReducer.js
    //<CodeTool description=tool.data.code/>

    render() {
        return (
            <div className="ListTools">
                {this.props.Tool.map((tool) =>
                    <section className="newTool" key={tool.id}>
                        <button onClick={this.openDescription.bind(this)}><i className="material-icons">exit_to_app</i>More</button>
                        <h4>{tool.data.title}</h4>
                        <p>{tool.data.category}</p>
                        <div className="desc">
                            <code>{tool.data.description}</code>
                        </div>
                    </section>
                )}
            </div>
        )
    }
});

function mapStateToProps(state) {
    return {Tool: state.ToolReducer}
}

export default connect(mapStateToProps, null)(ListTool)