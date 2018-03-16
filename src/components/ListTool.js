import React from 'react';
import {connect} from "react-redux";

const ListTool = () => ({
    render() {
        return (
            <div className="ListTools">
                {this.props.Tool.map((tool) =>
                    <section key={tool.id}>
                        {tool.data.title}
                        {tool.data.category}
                        {tool.data.code}
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